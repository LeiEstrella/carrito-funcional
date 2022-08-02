import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

const ItemCount = ({ cantidad, initial=0, onAdd }) => {
    let [valor, setValor] = useState(initial)
    const onAddPlus = () => {
        console.log("cantidad " + cantidad)
        console.log("valor " + valor)
        if (valor < cantidad) {
            setValor(valor + 1)
        }
    }
    const onSubstract = () => {
        if (valor > 0) {
            setValor(valor - 1)
        }
    }
    const terminar = () => {


    }

    return (
        <Card.Text>
            <span>Cantidad: {valor + " "}</span>
            <Button onClick={() => onAddPlus()}>+</Button> &nbsp;
            <Button onClick={() => onSubstract()}>-</Button>
            <Button onClick={() => onAdd(valor)}>Agregar al carrito</Button>
            <br />
            {valor !== 0 ?
                <Link to='/cart'>Terminar compra</Link> :
                <></>
            }
        </Card.Text>);

}

export default ItemCount