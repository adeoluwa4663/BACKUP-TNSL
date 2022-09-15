import React from 'react'
import '../../Styles/UserDetails.scss'

function SocialLinks({content}) {
  return (
    <div className='socialLinkcontent'>
        {content &&
            <div className='eachContent'>
                <span className='contentImg'><img src={content.icon} alt='icons'/></span>
                @Uchiha_k
            </div>
        }
    </div>
  )
}

export default SocialLinks