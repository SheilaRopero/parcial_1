import pgService from '../services/pg.service.js';

export const getActorsModel = async (page, pageSize) => {
  const pg = new pgService();
  const offset = (page - 1) * pageSize;
  const query = `SELECT * FROM actor LIMIT $1 OFFSET $2`;
  const result = await pg.connection.query(query, [pageSize, offset]);
  return result;
};

export const getActorUnicoModel = async (id) => {
  const pg = new pgService();
  const query = `SELECT * FROM actor WHERE id = $1`;
  const result = await pg.connection.query(query, [id]);
  return result;
};

export const postActorModel = async (
  nombre,
  correo,
  contrasena,
  telefono,
  biografia
) => {
  try {
    const pg = new pgService();
    const existingActorQuery = `SELECT * FROM actor WHERE correo = $1`;
    const existingActor = await pg.connection.oneOrNone(existingActorQuery, [
      correo,
    ]);

    if (existingActor) {
      throw new Error('El correo ya está registrado');
    }

    const query = `INSERT INTO actor
    (nombre,correo,contrasena,telefono,biografia)  
    VALUES 
    ($1, $2, $3, $4, $5)
    `;
    await pg.connection.none(query, [
      nombre,
      correo,
      contrasena,
      telefono,
      biografia,
    ]);
    return 'Actor creado con exito';
  } catch (error) {
    if (error.message === 'El correo ya está registrado') {
      return error.message;
    }
    return 'Error al crear el actor';
  }
};

export const updateActorModel = async (actorData) => {
  const {
    nombre,
    correo,
    contrasena,
    telefono,
    biografia,
    id,
  } = actorData;
  try {
    const pg = new pgService();
    const query = `UPDATE ACTOR SET
    nombre = $1,
    correo = $2,
    contrasena = $3,
    telefono = $4,
    biografia = $5
    WHERE id = $6
    `;
    const result = await pg.connection.result(
      `SELECT COUNT(*) FROM ACTOR WHERE id = $1`,
      [id]
    );
    if (result.rows[0].count === '0') {
      return 'El actor no se encontró';
    }
    await pg.connection.none(query, [
      nombre,
      correo,
      contrasena,
      telefono,
      biografia,
      id,
    ]);
    return 'Actor actualizado con éxito';
  } catch (error) {
    if (error.code === '23502') {
      return 'No ingresaste un dato obligatorio';
    } else {
      throw new Error('Error al actualizar el actor');
    }
  }
};

export const deleteActorModel = async (id) => {
  try {
    const pg = new pgService();
    const result = await pg.connection.result(
      `SELECT COUNT(*) FROM ACTOR WHERE id = $1`,
      [id]
    );
    if (result.rows[0].count === '0') {
      return 'El actor no se encontró';
    }
    const query = 'DELETE from actor WHERE id = $1';
    await pg.connection.none(query, [id]);
    return 'Eliminado con exito el actor';
  } catch (error) {
    throw new Error('Error al eliminar el actor');
  }
};

export const findActorByEmail = async (correo) => {
  const pg = new pgService();
  const query = 'SELECT * FROM actor WHERE correo = $1';
  const result = await pg.connection.oneOrNone(query, [correo]);
  return result;
};
