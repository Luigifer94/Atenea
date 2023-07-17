import express from 'express';
import Patient from '../models/patient';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { nombre, apellido, cedula, edad, telefono } = req.body;

    const newPatient = new Patient({
      nombre,
      apellido,
      cedula,
      edad,
      telefono,
    });

    await newPatient.save();

    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el paciente', error });
  }
});

export default router;