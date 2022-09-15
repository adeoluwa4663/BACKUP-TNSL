import React,{useState} from 'react'
import JobBanner from '../Components/Trending Jobs/JobBanner'
import Footer from '../Components/Footer/Footer'
import TransparentNav from '../Components/Navbar/TransparentNav'
// import JobsList from '../Components/Trending Jobs/JobsList'
import Offers from '../Components/Trending Jobs/Offers'
import NavBar from '../Components/Navbar/Navbar'

function TrendingJobs() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 60){
          setColorchange(true);
        }
        else{
          setColorchange(false);
        }
     };
     window.addEventListener('scroll', changeNavbarColor);
    return(
        <div>
            
            {!colorChange?
            <TransparentNav/>:<NavBar/>}
            <JobBanner/>
            {/* <JobsList/> */}
            <Offers/>
            <Footer/>
        </div>
    )
}

export default TrendingJobs