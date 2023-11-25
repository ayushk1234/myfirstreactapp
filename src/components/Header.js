import { Link,NavLink } from "react-router-dom"
export default function Header(){
    const style = {
        color:"red"
    }
    return(
        <header>
        <Link to="/">#VANLIFE</Link>
        <nav>
          
          <NavLink style={({isActive})=>isActive?style:null} to="/about">About</NavLink>
          {/* <Link to="/navbar">Navbar</Link> */}
          <NavLink style={({isActive})=>isActive?style:null} to="/vans">Van</NavLink>
          <NavLink style={({isActive})=>isActive?style:null} to="/host">Host</NavLink>
          </nav>
  
        </header>
    )

}