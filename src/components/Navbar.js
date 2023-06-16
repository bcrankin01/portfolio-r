import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <p className='nav-title'>BCR</p>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>CONTACT ME</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar