import { NavLink } from 'react-router-dom';
import './Navbar.modules.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/servicos">Serviços</NavLink>
        </li>
        <li>
          <NavLink to="/contato">Contato</NavLink>
        </li>
        <li>
          <NavLink to="/extra">Extra</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
