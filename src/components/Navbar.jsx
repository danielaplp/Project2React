import { NavLink } from "react-router-dom";
import { ThemeContext } from '../context/Theme.context';
import { useContext } from 'react';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`Navbar ${theme}`}>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/Quemsomos'
        >
         Quem Somos?
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/OProjeto'
        >
          O Projeto
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/AIlha'
        >
          A Ilha
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/Especies'
        >
          Espécies
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/Atividades'
        >
          Atividades
        </NavLink>
      </ul>

    </nav>
  );
    

}

export default Navbar;