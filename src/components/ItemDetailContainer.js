import React, { useState, useEffect } from 'react';
import getProducto from './BaseDatos/base';
import { useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = (props) => {
    let [pro, setPro] = useState()
    let [productos, setProductos] = useState([])
    let { id } = useParams();

    useEffect(() => {
        getProducto().then(response => {
            setProductos(response);
            let found = response.filter(x => x.id === id)
            setPro(found[0])
        })

        //console.log(response);

    }, [])

    return (
        <Container fluid>
            <ItemDetail {...pro}></ItemDetail>
        </Container>
    );
}

export default ItemDetailContainer