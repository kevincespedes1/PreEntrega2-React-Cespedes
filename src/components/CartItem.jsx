import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {


    const { removeItem } = useContext(CartContext)

    return (
        <>
                    <div className='start'>
                        <div className="item-2">
                            <div>
                            <h1>{item.name}</h1>
                            <img src={item.img} alt={item.name} />
                            </div>
                            <p >Precio por unidad: {item.price}</p>
                            <h2 >Cantidad elegida: {item.amount}</h2>
                            <h2>Precio Total: {item.price * item.amount}</h2>
                            <button className='btn' onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                        </div>
                </div>

        </>
    )
}

export default CartItem