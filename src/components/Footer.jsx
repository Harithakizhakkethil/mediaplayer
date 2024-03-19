import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
   <>
        <div  className='w-100 justify-content-center mt-5 align-items-center d-flex flex-column'>
            <div className='w-100 justify-content-evenly d-flex '>
                <div className='website' style={{width:'400px'}}>
                <FontAwesomeIcon icon={faVideo} beat style={{color:'orange',fontSize:'30px',paddingRight:'10px'}} />
                <span style={{color:'white',fontSize:'30px'}}>Video Player</span>
                    <p style={{color:'white',fontSize:'16px',textAlign: 'justify',paddingTop:'10px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit veritatis quisquam illo, sed, ea officia perspiciatis, provident excepturi id error quibusdam tempora! Aperiam voluptas illo impedit neque earum est alias?</p>
                </div>
                    <div className='links'>
                        <h4>Links</h4>
                        <p className='mt-3'><Link to={'/'}>Landing Page</Link></p>
                        <p><Link to={'/home'}>Home</Link></p>
                        <p><Link to={'/watchHistory'}>Watch History</Link></p>
                    </div>

                <div className='guides'>
                    <h4>Guides</h4>
                    <p className='mt-3'>React</p>
                        <p>React-Bootstrap</p>
                        <p>Bootswatch</p>
                </div>
                <div className='contact'>
                    <h4>Contact Us</h4> 
                    <input style={{borderRadius:'5px',padding:'7px'}} type="text" placeholder='Enter your Email ID' />
                    <button style={{borderRadius:'5px',height:'40px',width:'110px',marginLeft:'8px',backgroundColor:'orange',color:'white'}}>Subscribe</button>
                    <div className='d-flex justify-content-around mt-3 pt-2'>
                    <FontAwesomeIcon icon={faInstagram} size='2xl' />
                    <FontAwesomeIcon icon={faFacebook} size='2xl' />
                    <FontAwesomeIcon icon={faTwitter} size='2xl' />
                    <FontAwesomeIcon icon={faLinkedin} size='2xl' />
                    
                    </div>
                    
                </div> 
   
            </div>        
        <p style={{paddingTop:'50px'}}>Copyright © 2023 Media Player. Built with React.</p>
        </div>
        
   </>
  )
}

export default Footer