import { Container } from "@mui/material"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from "react"
import ItemListProduct from './ItemListProduct'
import ItemCount from './ItemCount'

const ItemDetail = ({}) => {
    const {id} = useParams()
    const [data, setProduct] = useState({})

    useEffect( () => {
        filterProductById(ItemListProduct, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    return(
        <Container>
            <h1>{data.title}</h1>
            <h2>${data.price}</h2>
            <h3>Modelo: {data.modelo}</h3>
            <ItemCount/>
        </Container>
    )
}

export default ItemDetail