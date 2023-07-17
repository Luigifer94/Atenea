import mongoose, { Schema, Document } from 'mongoose';

interface IPatient extends Document {
  nombre: string;
  apellido: string;
  cedula: string;
  edad: number;
  telefono: string;
}

const PatientSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cedula: { type: String, required: true },
  edad: { type: Number, required: true },
  telefono: { type: String, required: true },
});

const Patient = mongoose.model<IPatient>('Patient', PatientSchema);

export default Patient;