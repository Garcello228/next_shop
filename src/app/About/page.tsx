import AboutPage from '@/pages/About/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Информация о нашей компании',
};


export default function About() {
  return (
    <AboutPage />
  );
}
