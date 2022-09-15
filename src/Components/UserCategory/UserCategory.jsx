import React from 'react'
import '../../Styles/UserDetails.scss'
import OrangeButton from '../../assets/Buttons/OrangeButton'
import SocialLinks from './SocialLinks'
import Referals from './Referals'

function UserCategory() {
    const contents = [{'icon':'icons/facebook.svg','link':'@Uchiha_k'},
    {'icon':'icons/linkdin.svg','link':'@Uchiha_k'},
    {'icon':'icons/dribble.svg','link':'@Uchiha_k'},
    {'icon':'icons/coolicon.svg','link':'@Uchiha_k'}
    
                    ]

  return (
    <div className='userCategory'>
        <div className="userProfiles">
            <div className="userDetail">
                <div className="userImg">
                    <img src='images/user.png' alt="" />

                </div>
                <div className="userContent">
                    <p><span className='title'>Name</span>: Lola Anita <span className='verified'><img src='icons/Check.svg' alt='verfied user'/></span></p>
                    <p><span className='title'>Role</span>: User Interface Designer</p>
                    <p><span className='title'>Bio</span>: Head desigxmcjner @TNSL, Co-founder @ BD-X,
@thescribemediang.</p>
                </div>
            </div>
            <div className="referals">
                <Referals/>

            </div>

        </div>
        <div className='socialContainer'>
            <div className="socials">
            {
                contents.map((content,i)=>
                <SocialLinks content={content}/>
                )}
            </div>
        </div>
        <div className="messageButton">
        <OrangeButton name='Message'/>
        </div>

    </div>
  )
}

export default UserCategory