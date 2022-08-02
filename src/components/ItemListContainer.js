import React, { useEffect, useState } from 'react';
import getProducto from './BaseDatos/base';
import ItemList from './ItemList';
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ param }) => {
  const [productos, setProductos] = useState([])
  let { tipoSemilla } = useParams();

  useEffect(() => {
    getProducto().then(response => {
      setProductos(response);
      // console.log(response);

    })
  }, [])

  return (
    <div>
      <section>
        <h1 className="titulo">Bienvenido a Semillas</h1>
        <Container fluid>
          <ItemList productos={productos} tipo={tipoSemilla} />
        </Container>

      </section>
    </div>
  );
};

export default ItemListContainer;


