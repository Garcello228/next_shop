"use client"

import HomeHeader from "@/widgets/Home/HomeHeader/HomeHeader";
import BrowseByCategory from "@/widgets/Home/BrowseByCategory/BrowseByCategory";
import MusicExperience from "@/widgets/Home/MusicExperience/MusicExperience";
import NewArrival from "@/widgets/Home/NewArrival";
import Additionally from "@/widgets/About/Additionally";
import Strelka from "@/widgets/Home/Strelka/Strelka";
import FlashSales from "@/widgets/Home/FlashSales/FlashSales";
import ExploreOurProducts from "@/widgets/Home/ExploreOurProducts";
import dynamic from 'next/dynamic';
//import BestSellingProducts from "@/widgets/Home/BestSellingProducts";
import "./Home.scss"


const BestSellingProducts = dynamic(
  () => import('@/widgets/Home/BestSellingProducts/BestSellingProducts'), // укажите точный путь к файлу
  { ssr: false }
);


function Home ()
{
   return (
      <main className='container Homebottom'>
         <HomeHeader />
         <FlashSales />
         <BrowseByCategory />
         <BestSellingProducts />
         <MusicExperience />
         <ExploreOurProducts />
         <NewArrival />
         <Additionally />
         <Strelka />
      </main>
   );
}

export default Home