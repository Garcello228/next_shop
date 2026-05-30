


import InputDown from '@/yfeatures/Header/down/InputDown/InputDown';
import NawHeader from '@/zentities/DownHeader/NawHeader/nawHeader';
import DownUser from './DownUser/DownUser';

import './DownHeader.scss'



function DownHeader()
{

   

  
  
   
  return (

    <>
          
      <div className="header__down container">
        <div className='navig'>
          <h2 className='navig__title'>Exclusive</h2>
          <NawHeader />
          <div className="navig__input">
            <InputDown />
            <DownUser />
          </div>
        </div>
      </div>
        
    </>
  )
}


export default DownHeader
             
        
                          
                  