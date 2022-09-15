import React from 'react'
import '../../Styles/Contact.scss'

function ContactFrom() {
  return (
    <div className='formContainer'>
      <h6>Get a message in</h6>
      <h2>Contact Form</h2>
      <form className='form' action="">
        <div className='left'>
          <p>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id='name' />
          </p>
          <p>
            <label htmlFor="phone">Phone Number</label>
            <br />
            <input type="number" id='phone' />
          </p>
        </div>
        <div className='right'>
          <p>
            <label htmlFor="email">E-mail</label>
            <br />
            <input type="email" id='email' />
          </p>
          <p>
            <label htmlFor="subject">Subject</label>
            <br />
            <input type="text" id='subject' />
          </p>
        </div>
        <p>
          <label htmlFor="message">Message</label>
          <br />
          <textarea name="message" id="message" cols="30"></textarea>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  )
}

export default ContactFrom