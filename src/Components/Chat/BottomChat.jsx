import React,{useState} from 'react'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

import '../../Styles/BottomChat.scss'
function BottomChat() {
  const [clicked,setClicked] = useState(false);
  const handleClick = (e)=>{
    e.preventDefault();
    setClicked(true)
  }

  const handleCloseclick = (e) =>{
    e.preventDefault();
    setClicked(false)

  }


  return (
    <div className='bottomChat'>
      {!clicked ?
      (<div className="bottomChatcontainer1">
        <div className="chatContents">
          <div className="cont">
            <h6>Kaoruu</h6>
            <p>lakhDKLADH</p>  
          </div>
          <button onClick={handleClick}><IoIosArrowUp/></button>
        </div>
      </div>)
      :
      (<div className="bottomChatcontainer2">
        <div className="chatContents">
          <div className="cont">
            <h6>Kaoruu</h6>
            <p>lakhDKLADH</p>  
          </div>
          <button onClick={handleCloseclick}><IoIosArrowDown/></button>
          </div>
      </div>)
      }
    </div>
  )
}

export default BottomChat;