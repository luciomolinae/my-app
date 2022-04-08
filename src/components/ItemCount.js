
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

    const ItemCount = ({addProduct}) => {
    const [click, setClick] = useState(1);

    const addBuy = () => {
        setClick(click + 1);
    };
    
    const removeBuy = () => {
        if (click > 0) {
        setClick(click - 1);
        }
    };

    return (
    <>
        <h4>Compraste: {click}</h4>
        <button onClick={addBuy} className="addBuy">Comprar</button>
        <button onClick={removeBuy} className="removeBuy">Quitar Compra</button>
        <Button onClick={() => addProduct(click)}>Agregar compra</Button>
    </>
    );
}

export default ItemCount


