"use client"

import dynamic from 'next/dynamic';
import HomeHeaderLeft from "./Left/HomeHeaderLeft"
//import HomeHeaderBanner from "@/zentities/Home/HomeHeader/HomeHeaderBanner"
import "./HomeHeader.scss"


const HomeHeaderBanner = dynamic(
  () => import("@/zentities/Home/HomeHeader/HomeHeaderBanner"),
  { ssr: false }
);


function HomeHeader()
{

  return(
    <section className='HomeHeader sectionHome'>
      <div className='HomeHeader__content'>
        <HomeHeaderLeft />
        <HomeHeaderBanner />
      </div>
    </section>
  )
}

export default HomeHeader
         