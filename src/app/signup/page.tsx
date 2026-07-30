import SignUpPage from '@/pages/SignUpPage/SignUpPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SignUp',
  description: 'Информация о нашей компании',
};


export default function SignUp() {
  return (
    <SignUpPage />
  );
}
