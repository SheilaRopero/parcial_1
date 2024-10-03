import { checkSchema } from 'express-validator';
import { findActorByEmail } from '../models/actor.model.js';

export const postActorValidator = checkSchema(
  {
    nombre: {
      errorMessage: 'Nombre invalido',
      notEmpty: true,
      trim: true,
      isLength: {
        options: { min: 3 },
        errorMessage: 'El nombre debe tener mínimo 3 caracteres',
      },
    },
    correo: {
      errorMessage: 'Correo invalido',
      notEmpty: true,
      custom: {
        options: async (value) => {
          const actor = await findActorByEmail(value);
          if (actor) {
            return Promise.reject('El correo ya está registrado');
          }
        },
      },
      trim: true,
      normalizeEmail: true,
      isEmail: {
        errorMessage: 'El correo debe ser valido',
      },
    },
    contrasena: {
      errorMessage: 'Contraseña invalida',
      notEmpty: true,
      trim: true,
      normalizeEmail: true,
      isLength: {
        options: { min: 8 },
        errorMessage: 'La contraseña debe tener mínimo 8 caracteres',
      },
      custom: {
        options: async (value) => {
          const actor = await findArtistByEmail(value);
          if (actor) {
            return Promise.reject('El correo ya se encuentra registrado');
          }
        },
      },
    },
    telefono: {
      trim: true,
      errorMessage: 'Telefono invalido',
      notEmpty: true,
      isMobilePhone: {
        options: ['es-CO'],
        errorMessage: 'El telefono debe ser valido',
      },
    },
    biografia: {
      errorMessage: 'Biografia invalida',
      notEmpty: true,
      isLength: {
        options: { min: 10, max: 200 },
        errorMessage: 'La biografia debe tener entre 20 y 200 caracteres',
      },
    },
  },
  ['body']
);

export const updateActorValidator = checkSchema(
  {
    nombre: {
      optional: true,
      isString: true,
      trim: true,
      isLength: {
        options: { min: 1, max: 50 },
      },
      errorMessage:
        'El nombre debe ser una cadena de texto de 1 a 50 caracteres',
    },
    correo: {
      optional: true,
      isEmail: true,
      custom: {
        options: async (value) => {
          const actor = await findActorByEmail(value);
          if (actor) {
            return Promise.reject('El correo ya se encuentra registrado');
          }
        },
      },
      trim: true,
      normalizeEmail: true,
      errorMessage: 'El correo debe ser valido',
    },
    contrasena: {
      optional: true,
      isString: true,
      trim: true,
      isLength: {
        options: { min: 8, max: 50 },
      },
      errorMessage:
        'La contraseña debe ser una cadena de texto de 8 a 20 caracteres',
    },
    telefono: {
      optional: true,
      isString: true,
      trim: true,
      errorMessage: 'El telefono debe ser valido',
    },
    biografia: {
      optional: true,
      isString: true,
      trim: true,
      isLength: {
        options: { min: 1, max: 500 },
      },
      errorMessage:
        'La biografía debe ser una cadena de texto de 1 a 200 caracteres',
    },
  },
  ['body']
);

export const deleteActorValidator = checkSchema(
  {
    id: {
      errorMessage: 'No se ingreso un id valido',
      notEmpty: true,
    },
  },
  ['params']
);
