import {
    deleteActorModel,
    getActorUnicoModel,
    getActorsModel,
    postActorModel,
    updateActorModel,
  } from '../models/actor.model.js';
  
  export const getAll = async (req, res) => {
    try {
      const page = req.query.page || 1;
      const pageSize = req.query.pageSize || 10;
      let data = await getActorsModel(page, pageSize);
      res.json(data);
    } catch (error) {
      res.status(500).json({
        data: [],
        msg: 'Servicio no disponible, por favor intente mas tarde',
        success: false,
      });
    }
  };
  
  export async function getActor(req, res) {
    try {
      const id = req.params.id;
      let data = await getActorUnicoModel(id);
      res.json({ success: true, data: data, msg: 'Actor obtenido' });
    } catch {
      res.status(500).json({
        data: [],
        msg: 'Servicio no disponible, por favor intente mas tarde',
        success: false,
      });
    }
  }
  
  export async function createActor(req, res) {
    try {
      let { nombre, correo, contrasena, telefono, biografia } =
        req.body;
      let data = await postActorModel(
        nombre,
        correo,
        contrasena,
        telefono,
        biografia
      );
      res.json({ success: true, data: [], msg: data });
    } catch (error) {
      res.status(500).json({
        data: [],
        msg: 'Servicio no disponible, por favor intente mas tarde',
        success: false,
      });
    }
  }
  export async function updateActor(req, res) {
    try {
      const { nombre, correo, contrasena, telefono, biografia } =
        req.body;
      console.log(req.body);
      console.log(res.body);
      const id = req.params.id;
      const actorData = {
        nombre,
        correo,
        contrasena,
        telefono,
        biografia,
        id,
      };
      const data = await updateActorModel(actorData);
      res.json(data);
    } catch (error) {
      res.status(500).json({
        data: [],
        msg: 'Servicio no disponible, por favor intente mas tarde',
        success: false,
      });
    }
  }
  
  export async function deleteActor(req, res) {
    try {
      const { id } = req.params;
      const data = await deleteActorModel(id);
      res.json(data);
    } catch (e) {
      res.status(500).json({
        data: [],
        msg: 'Servicio no disponible, por favor intente mas tarde',
        success: false,
      });
    }
  }
  