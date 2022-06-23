import React from 'react'
import './contact.css'
 const Contact = () => {
  return (
    <div className='contact'>
      <div className='address'>
        <div className='add-content'>
          <h3>Address</h3>
          <h3> Addis Ababa, Ethipia</h3>
        </div>
        <div className='add-content'>
        <h3>Phone</h3>
          <h3> Addis Ababa, Ethipia</h3>
        </div>
        <div className='add-content'>
          <h3>Email</h3>
          <h3> Addis Ababa, Ethipia</h3>
        </div>
      </div>
      <div className='form'>
        <form>
          <h2>Reach Me</h2>
          <input type={'text'} name="name" placeholder='Your Name'/>
          <input type={'email'} name="email" placeholder='Your Email'/>
          <textarea rows={3} name="name" placeholder='Tell Me, text me..'/>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}
export default Contact;
