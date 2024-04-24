import CartWidget from "./CartWidget";
import "./navbar.css"
 

//Creación de estructura básica del componente

const NavBar = () => {
    return (
        <div className="nav-bar">
  <div className="logo">
    <img style={{width:"100px"}} src="http://www.logobook.com/wp-content/uploads/2016/10/Elliots_Books_logo.svg" alt="Logo"/> 
  </div>  
  <ul className="nav-list">
    <li>Best Sellers •</li>
    <li>Sagas famosas •</li>
    <li>Negocios •</li>
    <li>Novelas •</li>
    <li>Autoayuda</li>
  </ul>
  <CartWidget/>
</div>

    )
}

export default NavBar;