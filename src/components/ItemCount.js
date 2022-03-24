import React,{useState} from 'react'
const ItemCount = () =>{
    
    const [numero, setNumero] = useState(0)
    const Aumentar = () =>{
        setNumero(numero + 1)
    }

    const Reducir = () =>{
        setNumero(numero - 1)
    }
    return(
        <>
           <h5> {numero}</h5>
            <button onClick={Aumentar}>+</button>
            <button onClick={Reducir}>-</button>
        </>
    )
}

export default ItemCount
