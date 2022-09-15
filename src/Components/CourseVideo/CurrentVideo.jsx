import React from 'react'
import play from '../../assets/icons/play.png'
import '../../Styles/CourseVideo.scss'

function CurrentVideo() {
    return(
        <div className='currentVideo'>
            <div className='placeholder'>
                <img src={play} alt="" />
            </div>
            <div className='courseButton'>
                <button className='active'>Transcript</button>
                <button>Notes</button>
                <button>Resources</button>
            </div>
            <div>
                <div className='info'>
                    <p className='timestamp'>0:00</p>
                    <p className='transcriptText'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices gravida hendrerit auctor vel eget vitae a. Urna tellus augue aliquet at fames elementum. Condimentum sodales nec orci lacus integer imperdiet. Facilisis scelerisque auctor imperdiet aliquet at id ut. Phasellus nunc morbi sit at ultrices accumsan, augue feugiat lorem. Arcu sed interdum quis quam 
                        Tellus in tempus vitae tempus imperdiet. Bibendum donec quis cursus metus dis. Mauris, facilisis morbi nisi, dolor, dolor malesuada aliquam. Sed massa, netus faucibus egestas in lectus neque lacus. Semper gravida elit at diam massa. Faucibus ut cras vel eget. Vestibulum velit id pharetra tortor. Nec elementum proin in suspendisse.
                    </p>
                </div>
                <div className='info'>
                    <p className='timestamp'>1:50</p>
                    <p className='transcriptText'>
                        Nulla eu eget varius ullamcorper arcu praesent feugiat elit. At aliquet pharetra, ullamcorper faucibus diam non est amet. Id arcu, in commodo congue pellentesque congue euismod justo. Interdum urna sem quisque arcu eget purus tortor. Ipsum, ultrices sodales urna id id sagittis habitant dictumst facilisi.
                        Molestie ac fringilla dictum aliquet mollis turpis elit. Ac semper est tempus pretium. Massa interdum scelerisque . Id nibh enim egestas gravida.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CurrentVideo