import './styles.css' /* importando css */
import cartIcon from '../../assets/cart.svg' /*importando imagem */
export default function HeaderClient() { /* por organização a função java script aqui
    tem que ter o mesmo nome da pasta que colocamos dentro do componente HeaderClient */

    return (
        <header className="dsc-header-client">
        <nav className="dsc-container">
          <h1>E-commerce</h1>
          <div className="dsc-nav-bar-right">
            <div className="dsc-menu-itens-container"> 
              <div className="dsc-menu-item">
                <img src={cartIcon} alt="car" />
              </div>
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
            );

}