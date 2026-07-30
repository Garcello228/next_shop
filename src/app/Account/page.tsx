import AccountPage from '@/pages/Account/AccountPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account',
  description: 'Информация о нашей компании',
};


export default function Account() {
  return (
    <AccountPage />
  );
}