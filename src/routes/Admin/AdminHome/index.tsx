import cartIm from '../../../assets/cart.svg'
import './style.css'

export default function AdminHome() {

    return ( 
    <main>
      <section id="admin-home-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Bem vindo à area administrativa</h2>
        <div className="dsc-login-form-container"> 
          
          <img className="dsc-card-home"src={cartIm} alt="hom"/>
        </div>
      </section>
    </main>
    );
}