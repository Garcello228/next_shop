import ContactPage from '@/pages/Contact/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Информация о нашей компании',
};


export default function Contact() {
  return (
    <ContactPage />
  );
}
