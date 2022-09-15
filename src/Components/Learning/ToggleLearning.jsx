import React from 'react'
import '../../Styles/Learning.scss'
import TrustedSmall from '../Trusted/TrustedSmall';
import Apply from './Apply';
import Community from './Community';
import Environments from './Environments';
import Experience from './Experience';
import Hired from './Hired';
import Payment from './Payment';



function ToggleLearning({ data, content }) {
    

    return (
      <>
      <div className="toggleContainer">
        <div className="learningContent">
          <h4>{content.heading}</h4>
          <p>{content.desc}</p>
        </div>
      <div className="toggle" >
        {data.map((d,i)=> 
        <div className='toggleView' key={i}>
          <div className='toggleImg'>
            <img src={d.img} alt="he" />
          </div>
          
          <div className='toggleContent'>
            <h4>{d.title}</h4>
            <p>{d.description}</p>
          </div>
        </div>
        )
}
      </div>
      <Environments/>
       <Community/>
       <Apply/>
       <Payment/>
       <Experience/>
       <Hired/>
       <TrustedSmall/>
        </div>
      </>
    );
  
}

export default ToggleLearning