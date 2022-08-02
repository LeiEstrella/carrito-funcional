import './CartWidget.css'
import { useContext } from 'react';
import CartContext from './Context/CartContext';

const CartWidget = () => {

   const { getCartQuantity, totalQuantity } = useContext(CartContext)

   // const totalQuantity = getCartQuantity()

   return (
      <div className="CartWidget">
         <img src="imagenes/carrito.png" alt='cart' className='CartImg' height="30px" />
         {totalQuantity}
      </div>
   );
}

export default CartWidget