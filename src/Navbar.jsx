import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="my-name">
                Chun-Kuei Chang 張峻魁
            </h1>
            <Link to='/' className='link'>
                <p className='link-text'>About Me</p>
            </Link>
            <Link to='/contact' className='link'>
                <p className='link-text'>Contact Info</p>
            </Link>
        </div>
    );
}

export default Navbar;