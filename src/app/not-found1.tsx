import { Metadata } from 'next';
import NotFound from "@/widgets/NotFound";

export const metadata: Metadata = {
  title: 'Notfound',
  description: 'Информация о нашей компании',
};

export default function Notfound()
{
   return(
      <NotFound />
   )
}