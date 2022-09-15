import React,{useState,useEffect} from 'react'
import ToggleLearning from './ToggleLearning';
import '../../Styles/Learning.scss'
import ToggleBusiness from './ToggleBusiness';
import { useLocation } from 'react-router-dom'

function ToggleMenu() {
  
  


  const location = useLocation();
  const {pathname} = location
  const splitLocation = pathname.split('/')
  const [toggle, setToggle] = useState(true);
  const learningContent = {'heading': 'LEARN  AT YOUR OWN PACE', 'desc':'GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS.'}
  const businessContent = {'heading': 'RECRUIT VETTED PERSONNELS'}
  
  const data1 = [{'title':'UI/UX DESIGN',
  'description':'Lorem ipsum dolornefjfvjo fvkfvkfknfkkkcd,cdk,cdcmd ac, cm ma mama d','img':'images/ui1.png'},
  {'title':'DIGITAL MARKETING',
  'description':'Lorem ipsum dolornefjfvjo fvkfvkfknfkkkcd,cdk,cdcmd ac, cm ma mama d','img':'images/Digital.png'},
  {'title':'PROGRAMMING',
  'description':'Lorem ipsum dolornefjfvjo fvkfvkfknfkkkcd,cdk,cdcmd ac, cm ma mama d','img':'images/programming.png'}];
  useEffect(() => {
    if(splitLocation[1]==='learning'){
      setToggle(true)
    }
    else if(splitLocation[1] === 'business'){
      setToggle(false)
    }
    
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  
  const learning = (e)=>{
    e.preventDefault();
    setToggle(true);
  }  

  const business = (e)=>{
    e.preventDefault();
    setToggle(false);
  }  
    return (
      <div className='learningMenu'>
    <div className='learningBtn'>
      <button onClick={learning} className={toggle ? 'btn1':'btn1 btn-inactive'}>LEARNING</button>
      <button onClick={business} className={toggle ? 'btn2 btn-inactive':'btn2'}>BUSINESS</button>
      
    </div>
        
       {toggle &&<ToggleLearning data={data1} content={learningContent}/>} 
       {!toggle && <ToggleBusiness content={businessContent}/>}
    </div>
  )
}

export default ToggleMenu