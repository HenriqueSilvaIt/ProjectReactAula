import './styles.css' /* importando css */
import cartIcon from '../../assets/cart.svg' /*importando imagem */
import { Link } from 'react-router-dom';
export default function HeaderClient() { /* por organização a função java script aqui
    tem que ter o mesmo nome da pasta que colocamos dentro do componente HeaderClient */

    return (
        <header className="dsc-header-client">
        <nav className="dsc-container">
          <Link to="/"> 
          <h1>E-commerce</h1>
          </Link>
          <div className="dsc-nav-bar-right">
            <div className="dsc-menu-itens-container"> 
              <div className="dsc-menu-item">
                <Link to="/cart">
                <img src={cartIcon} alt="car" />
                </Link>
          
              </div>
            </div>
            <Link to="/login">
                Entrar
            </Link>
          
          </div>
        </nav>
      </header>
            );

}