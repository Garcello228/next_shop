import WishlistPage from '@/pages/Wishlist/WishlistPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Информация о нашей компании',
};

export const dynamic = 'force-dynamic';


export default function Wishlist()
{
    
  return(
    <WishlistPage />
  )
}