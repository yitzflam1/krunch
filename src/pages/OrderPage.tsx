import React from 'react';
import OrderForm from '../components/OrderForm/OrderForm';
import SEO from '../components/SEO/SEO';

export default function OrderPage() {
  return (
    <>
      <SEO 
        title="Order Online - Krunchies Jerusalem"
        description="Order premium chicken dishes from Krunchies Jerusalem. Quick and easy online ordering for pickup and delivery."
      />
      <OrderForm />
    </>
  );
}