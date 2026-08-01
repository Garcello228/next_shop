"use client"

import { useState } from 'react';
import styles from './UpHeader.module.scss'
import DropDownIcon from './icone/DropDown.svg';

type langNames = 'English' | 'Русский';


function UpHeader() {

  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');

  const toggleSelect = () => setIsOpen(!isOpen);

  const handleSelect = (langName: langNames) => {
    setCurrentLang(langName);
    setIsOpen(false);
     
  };
  


  return (

        <>
          <div className={styles.up}>
            <p className={styles.title}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <span className={styles.span}>ShopNow</span></p>
            <button className={styles.select} onClick={toggleSelect}>
             <div id={styles.google_translate_element} style={{ display: 'none' }}></div>
             <div className={`${styles.customSelect} ${isOpen ? styles.selectOptions : ''}`} id="mySelect" >
              <p className={styles.selectTrigger}>{currentLang}</p>
              {isOpen && (
              <div className={styles.selectOptions}>
                <div className={styles.option} data-value="1" onClick={() => handleSelect('English')}>English</div>
                <div className={styles.option} data-value="2" onClick={() => handleSelect('Русский')}>Русский</div>
              </div>
              )}
             </div>
             <DropDownIcon className={`${styles.Вниз} ${isOpen ? styles.Вверх : ''}`} alt="" />
            </button>
           </div>
         
        </>
  )
    
}


export default UpHeader