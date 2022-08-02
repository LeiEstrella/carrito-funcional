import React, { useEffect } from 'react';
import { useState, useContext } from 'react'
import { Card } from "react-bootstrap";
import ItemCount from './ItemCount';
import CartContext from './Context/CartContext'


const ItemDetail = ({ id, titulo, img, descripcion, name, precio, cantidad }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    addItem({id, titulo, img, precio, quantity})
    setQuantityAdded(quantity)
  }

  useEffect(() => {
    // console.log(pro);

  }, [])


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../" + img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}
        </Card.Text>
        <Card.Text>Precio:${precio}
        </Card.Text>
      </Card.Body>
      <ItemCount cantidad={cantidad} onAdd={handleOnAdd} />
    </Card>);

}

export default ItemDetail