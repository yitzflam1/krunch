import React from 'react';
import Hero from '../components/Hero/Hero';
import OrderForm from '../components/OrderForm/OrderForm';
import SEO from '../components/SEO/SEO';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <OrderForm />
    </>
  );
}