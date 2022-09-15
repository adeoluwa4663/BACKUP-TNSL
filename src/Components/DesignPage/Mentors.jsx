import React from 'react'
import mentor1 from '../../assets/mentor1.png'
import mentor2 from '../../assets/mentor2.png'
import mentor3 from '../../assets/mentor3.png'
import mentor4 from '../../assets/mentor4.png'
import '../../Styles/Design.scss'

function Mentors() {
    return(
        <div className='mentors'>
            <h4 className='header'>Be mentored by the world’s best and industry trusted experts</h4>
            <p className='subheader'>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>
            <div className='specific'>
                <div className='eachmentor'>
                    <img src={mentor1} alt="" />
                    <p className='name'>COURAGE ABDUL</p>
                    <p className='info'>lorem ipsumv</p>
                </div>
                <div className='eachmentor'>
                    <img src={mentor2} alt="" />
                    <p className='name'>COURAGE ABDUL</p>
                    <p className='info'>lorem ipsumv</p>
                </div>
                <div className='eachmentor'>
                    <img src={mentor3} alt="" />
                    <p className='name'>COURAGE ABDUL</p>
                    <p className='info'>lorem ipsumv</p>
                </div>
                <div className='eachmentor'>
                    <img src={mentor4} alt="" />
                    <p className='name'>COURAGE ABDUL</p>
                    <p className='info'>lorem ipsumv</p>
                </div>           
            </div>
        </div>
    )
}

export default Mentors