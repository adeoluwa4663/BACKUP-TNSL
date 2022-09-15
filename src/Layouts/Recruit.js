import React,{useState} from 'react'
import RecruitBanner from '../Components/Recruit/RecruitBanner'
import RecruitPage from '../Components/Recruit/RecruitPage'
import Footer from '../Components/Footer/Footer'
import TransparentNav from '../Components/Navbar/TransparentNav'
import NavBar from '../Components/Navbar/Navbar'
function Recruit() {
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
    return (
        <div>
          {!colorChange?
            <TransparentNav/>:<NavBar/>}
          <RecruitBanner />
          <RecruitPage />
          <Footer />
        </div>
    )
}
export default Recruit