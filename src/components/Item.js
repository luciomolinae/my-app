import React from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';

const Item = ({title, price, modelo, id}) => {
    return (
        <article>
            
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>Modelo: {modelo}</h3>
            <Link to={`/productos/${id}`}><button>Ver</button></Link>
            <ItemCount/>
        </article>
    )
}

export default Item;