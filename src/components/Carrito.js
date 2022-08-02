import { useContext, useState } from 'react'
import CartContext from './Context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../services/index'


const Carrito = () => {
    const { cart, totalQuantity } = useContext(CartContext)
    const initialContact = { firstName: "", lastName: "", phone: "" };
    const [contact, setContact] = useState(initialContact);
    const notify = () => toast("Orden guardada exitosamente.");


    const handleChange = (propertyName) => (event) => {
        setContact((contact) => ({
          ...contact,
          [propertyName]: event.target.value
        }))
    };

    const sendOrder = () => {
        const orden = {
            ...contact,
            ...cart
        }
        const docRef =  addDoc(collection(db, "productos"), orden);
        notify();

          
    }

    return (
        <div>
            <br></br>
            <h4>Carrito</h4><br/>
            {cart.length === 0 ? "No hay productos seleccionados" :
                <>
                  
                    <div>
                        {cart.map((prod, index) => {
                            return (
                                <div key={index}>
                                    <div className='cart'>
                                        <div>Nombre: {prod.titulo}</div>
                                        <div>Cantidad: {prod.quantity}</div>
                                        <div>Precio: {prod.precio}</div>
                                    </div>

                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                    <div className="card">
                        <h5>Contacto</h5>
                        <div className="cardTitle">
                            Nombre: <input type="text"  
                            onChange={handleChange("firstName")}
                            value={contact.firstName} />
                        </div>
                        <div className="cardTitle">
                            Apellido: <input type="text"  
                            onChange={handleChange("lastName")}
                            value={contact.lastName} />
                        </div>
                        <div className="cardTitle">
                            Telefono: <input type="text"  
                            onChange={handleChange("phone")}
                            value={contact.phone} />
                        </div>
                    </div>
                    <button type="submit" className='btn btn-primary' onClick={() => sendOrder()}>Enviar</button>
                    <ToastContainer />
                </>
            }


        </div>
    )
}

export default Carrito
