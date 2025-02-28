import cartIcon from '../../assets/cart.svg';
import './style.css';

export default function CartIcon() {
    
    return(
       <> 
       <div className="dsc-menu-cart"> 
        <img src={cartIcon} alt="car" />
        <div className="dsc-cart-count">22</div>
        </div>
        </>
  
    )
}