import { pageLinks,socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
import logo from "../images/logo.svg"


const Navbar = ()=>{

    return (
        <nav>
          
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/navbar">Navbar</Link> */}
    
            <div>
                <img src={logo}/>
                <button type ="button"> <i className='fas fa-bars'></i></button>
               
            </div>
            <PageLinks parentClass='nav-links' itemClass='nav-link' />
            <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass='nav-icon' />
          })}
        </ul>
        </nav>
    )

}

export default Navbar