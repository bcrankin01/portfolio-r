import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <>
        <div className='contact-wrapper'> 
            <div className="form-wrapper">
                <form>
                    <h2>CONTACT ME</h2>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="First, Last" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
            <div className='contact-info'>
                <h3>e-mail: bcrankin01@gmail.com</h3>
                <h3>Phone: 571-888-2988</h3>
            </div>
        </div>
        
        
    </>
  );
};

export default Contact