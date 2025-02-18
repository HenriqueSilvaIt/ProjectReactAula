import computerImg from './assets/compute.png' /*importantando imagem*/
import cartImg from './assets/cart.svg'/*importantando imagem*/
import './App.css'

function App() {
  return ( /* esse <> </> é um fragment, sempre que tenho mais de 1 elemento html eu preciso colocar 
    dentro de um fragment, porque eu só posso ter 1 elemento java script de retorno que é um fragment */
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <h1>E-commerce</h1>
          <div className="dsc-nav-bar-right">
            <div className="dsc-menu-itens-container"> 
              <div className="dsc-menu-item">
                <img src={cartImg} alt="car" />
              </div>
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="product-details-section" className="dsc-container">
          <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
              <img src={computerImg} alt="Computer" />
            </div>
            <div className="dsc-product-details-bottom">
              <h3>R$ 5000,00</h3>
              <h4>Computador Gamer XT</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                aliquam neque incidunt aperiam, magnam dolorum et, facere officiis
                ad iste accusantium ipsam impedit nesciunt delectus obcaecati
                nihil, assumenda natus sint?
              </p>
              <div className="dsc-category-container">
                <div className="dsc-category">
                  Eletronicos
                </div>
                <div className="dsc-category">Computadores</div>
              </div>
            </div>
          </div>
          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue">
              Comprar
            </div>
            <div className="dsc-btn dsc-btn-white">
              Início
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App
