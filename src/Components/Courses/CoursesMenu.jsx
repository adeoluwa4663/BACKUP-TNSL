import React,{useState,useEffect} from 'react'
import Home from './Home/Home'
import InProgress from './InProgress/InProgress';
import '../../Styles/Courses.scss'
import { useLocation, Link } from 'react-router-dom'

function ToggleMenu() {

  const location = useLocation();
  const {pathname} = location
  const splitLocation = pathname.split('/')
  const [toggle, setToggle] = useState(true);
  
  useEffect(() => {
    if(splitLocation[1]==='inprogress'){
      setToggle(true)
    }
    else if(splitLocation[1] === 'inprogress'){
      setToggle(false)
    }
    
  },[splitLocation])
    
  
  const home = (e)=>{
    e.preventDefault();
    setToggle(true);
  }  

  const inprogress = (e)=>{
    e.preventDefault();
    setToggle(false);
  }  
    return (
    <div className='courseMenu'>
        <h2 className='header'>Courses</h2>
        <div className='courseButton'>
            <button onClick={home} className={toggle ? 'btn1':'btn1 btn-inactive'}>Home</button>
            <button onClick={inprogress} className={toggle ? 'btn2 btn-inactive':'btn2'}>In-progress</button>
            <Link className='completed' to='/courses/completed/'>Completed</Link>
        </div>
        
       {toggle &&<Home/>} 
       {!toggle && <InProgress/>}
    </div>
  )
}

export default ToggleMenu