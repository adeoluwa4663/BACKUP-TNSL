import React,{useState} from 'react'
import '../../Styles/UserDetails.scss'
import copy from "copy-to-clipboard";  

function Referals() {
  const [copyText, setCopyText] = useState('Https://edoofwweldperifnrorrih5090n5oenjfe......');

  const handleCopyText = (e) => {
    setCopyText('Https://edoofwweldperifnrorrih5090n5oenjfe......');
 } 

  const copyToClipboard = () => {
    copy(copyText);
 }
  return (
    <div className='referalContainer'>
        <div className="referalHeading">
            <h6>REFERRALS/REWARDS</h6>
        </div>
        <div className="referalDescription">
        <p>    
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p> 

        </div>
        <div className="referalLink">
            <div className="referalLinkcontainer">
            <input
            value={copyText}
            className='referalInput'
            onChange={handleCopyText}
            readonly
            placeholder={copyText}

            /> 
            <button onClick={copyToClipboard} ><img src='icons/link.svg' alt='link'/> </button>
            </div>
        </div>

    </div>
  )
}

export default Referals