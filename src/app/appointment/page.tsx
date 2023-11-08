import { Metadata } from 'next';
import React from 'react'
import DoctorsContainer from './components/DoctorsContainer/DoctorsContainer';
export const metadata: Metadata = {
  title: "ACME || Appointments",
  description: "ACME Hospital: Leading healthcare provider with advanced medical services, skilled professionals, cutting-edge technology. Compassionate care, excellence in treatment. Trusted community choice for health and wellness.",
};
export default function Appointment() {
  return (
    <main className='container'>
      <DoctorsContainer/>
    </main>
  )
}
