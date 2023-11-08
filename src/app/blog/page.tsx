import { Metadata } from 'next';
import React from 'react'
import BlogsContainer from './components/BlogsContainer/BlogsContainer';

export const metadata: Metadata = {
  title: "ACME || Blogs",
  description: "ACME Hospital: Leading healthcare provider with advanced medical services, skilled professionals, cutting-edge technology. Compassionate care, excellence in treatment. Trusted community choice for health and wellness.",
};
export default function Appointment() {
  return (
    <main className='container'>
     <BlogsContainer/>
    </main>
  )
}
