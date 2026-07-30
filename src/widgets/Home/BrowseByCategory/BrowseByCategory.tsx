"use client"

import {  useState } from "react";
import HeaderFliping from "@/zshared/Home/HeaderFliping/HeaderFliping";
import Category from "./Category/Category";
import TitleHome from "@/zshared/Home/HeaderHome"
import "./BrowseByCategory.scss"



function BrowseByCategory()
{

    const [offset, setOffset] = useState(0);


   
    return(
        <section className="BrowseByCategory sectionHome">
            <div className="BrowseByCategory__content">
                <header className="header">
                    <TitleHome подзаголовок="Categories" title="Browse By Category"/>
                    <HeaderFliping offset={offset} setOffset={setOffset}/>
                </header>
                <Category offset={offset}/>
            </div>
        </section>
    )
}

export default BrowseByCategory