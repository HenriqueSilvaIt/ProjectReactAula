import './styles.css' /* importando css */
import homeIm from '../../assets/home.svg';
import productsIcon from '../../assets/products.svg'
import LoggedUser from '../LoggedUser';
import { NavLink } from 'react-router-dom';



export default function HeaderAdmin() { /* por organização a função java script aqui
    tem que ter o mesmo nome da pasta que colocamos dentro do componente HeaderClient */


  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">

        <h1>DSCommerce Admin</h1>
        <div className="dsc-nav-bar-right">
          <div className="dsc-menu-itens-container">
            <NavLink 
            to="/admin/home"
            className={({isActive}) => isActive ? "dsc-menu-item-active" : ""}>
              <div className="dsc-menu-item">
                <img src={homeIm} alt="home" />
                <p>Início</p>
              </div>
            </NavLink>
            <NavLink 
            to="/admin/products"
             className={({isActive}) => isActive ? "dsc-menu-item-active" : ""}>
              <div className="dsc-menu-item">
                <img src={productsIcon} alt="cadastro de produtos" />
                <p >Produtos</p>
              </div>
            </NavLink>
          </div>

          <LoggedUser />
        </div>
      </nav>
    </header>
  );

}