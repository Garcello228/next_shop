import PaymentPage from '@/pages/payment/PaymentPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment',
  description: 'Информация о нашей компании',
};


export default function Payment() {
  return (
    <PaymentPage />
  );
}