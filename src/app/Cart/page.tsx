import CartPage from '@/pages/Cart/CartPage';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Cart',
  description: 'Информация о нашей компании',
};

export const dynamic = 'force-dynamic';

export default function Contact() {
  return (
    <CartPage />
    
  );
}
