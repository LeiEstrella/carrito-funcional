import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
const Item = ({ pro }) => {
  const navigate = useNavigate();
  const clickComprar = (id) => {
    navigate('/item/' + id);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../" + pro.img} />
      <Card.Body>
        <Card.Title>{pro.titulo}</Card.Title>
        <Card.Text>{pro.descripcion}
        </Card.Text>
        <Card.Text>Precio:${pro.precio}
        </Card.Text>
        <Button variant="primary" onClick={() => clickComprar(pro.id)}>Comprar</Button>
      </Card.Body>
    </Card>);

}

export default Item