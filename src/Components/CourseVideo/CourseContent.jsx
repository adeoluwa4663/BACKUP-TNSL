import React from 'react';
import Collapsible from 'react-collapsible';
import up from '../../assets/icons/up.svg'
import down from '../../assets/icons/down.svg'
import tick from '../../assets/icons/tick.svg'
import '../../Styles/CourseVideo.scss'

function CourseContent() {
  return (
    <div className='courseContent'>
        <h3 className='headerTopic'>Course Content</h3>
        <Collapsible
          className='collapsible' 
          trigger={<div className='iconOpen'>
            <div>
            <h5>Section 1: Introduction to UX</h5>
            <p>
              <span>0/4</span><span>8 Mins</span>
            </p>
            </div>
            <img className='toggleIcon' src={down} alt="" />
          </div>} 
          triggerWhenOpen={<div className='iconClose'>
            <h5>Section 1: Introduction to UX</h5>
            <img className='toggleIcon' src={up} alt="" />
          </div>}
        >
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex porro doloremque rerum debitis beatae qui sit aliquam, iste in cumque, dolorem sequi. Aut velit odit veritatis quas autem provident accusantium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet praesentium officiis fuga, quis magni accusamus deserunt maxime nihil provident, minima a porro vel quos molestias. Maxime cumque aliquid unde veritatis!</p>
        </Collapsible>
        <Collapsible
          className='collapsible' 
          trigger={<div className='iconOpen'>
            <div>
            <h5>Section 2: Design Principles</h5>
            <p>
              <span>0/4</span><span>8 Mins</span>
            </p>
            </div>
            <img className='toggleIcon' src={down} alt="" />
          </div>} 
          triggerWhenOpen={<div className='iconClose'>
            <h5>Section 2: Design Principles</h5>
            <img className='toggleIcon' src={up} alt="" />
          </div>}
        >
          <div className='topic'>
            <img src={tick} alt="" />
            <p className='topicList'>6. Color Theory <br /> 8 mins</p>
          </div>
          <div className='topic'>
            <img src={tick} alt="" />
            <p className='topicList'>7. Imagery <br /> 8 mins</p>
          </div>
          <div className='topic'>
            <img src={tick} alt="" />
            <p className='topicList'>8. Typography <br /> 2 mins</p>
          </div>          
        </Collapsible>
        <Collapsible
          className='collapsible' 
          trigger={<div className='iconOpen'>
            <div>
            <h5>Section 3: Introduction to UX</h5>
            <p>
              <span>0/4</span><span>8 Mins</span>
            </p>
            </div>
            <img className='toggleIcon' src={down} alt="" />
          </div>} 
          triggerWhenOpen={<div className='iconClose'>
            <h5>Section 1: Introduction to UX</h5>
            <img className='toggleIcon' src={up} alt="" />
          </div>}
        >
          <p>Ex porro doloremque rerum debitis beatae qui sit aliquam, iste in cumque, dolorem sequi. Aut velit odit veritatis quas autem provident accusantium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet praesentium officiis fuga, quis magni accusamus deserunt maxime nihil provident, minima a porro vel quos molestias. Maxime cumque aliquid unde veritatis!</p>
        </Collapsible>
    </div>
  );
};

export default CourseContent;