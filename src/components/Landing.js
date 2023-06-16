import React from 'react'
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
        <div className="landing-wrapper container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="landing-content">
                <h2>Hello, I'm Ben!</h2>
                <p>Your next Full-Stack Developer.</p>
                <div className='badges hstack gap2 justify-content-end'>
                    <div className="p-2 prof-logo">
                      <Link to='https://github.com/bcrankin01' target="_blank" rel="noopener noreferrer" className="prof-logo">
                        <i class="fa-brands fa-github fa-2xl" style={{color: "#84a7a1"}}></i>
                      </Link>
                    </div>
                    <div className="p-2 prof-logo">
                      <Link to='https://www.linkedin.com/in/ben-rankin-03868a24a' target="_blank" rel="noopener noreferrer" className="prof-logo">
                        <i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#84a7a1" }}></i>
                      </Link>
                    </div>
                </div>
              </div>
                  
            </div>
            <div className="col-md-6">
              <img src="../../public/images/gradpic_transparent.png" alt="Post Graduation" />
            </div>
          </div>
            
           
        </div>
    </>
  )
}

export default Landing