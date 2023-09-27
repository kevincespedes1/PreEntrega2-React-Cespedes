import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ItemCount = ({ product, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const { stock } = product

    function onAdd() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function onDecrease() {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    // const agregar = ()=>{
    //     useEffect(()=>{
    //         window.addEventListener('click', ()=>{
    //             console.log("hola")
    //             });
    //     })
    // }

    return (
        <div className='flexx'>
            <div className='flex'>
                <button className='button' onClick={onDecrease}>-</button>
                <span>{count}</span>
                <button className='button' onClick={onAdd}>+</button>
            </div>
            <NavLink to={`/cart`}>
                <button className='agregar'>Agregar al Carrito</button>
            </NavLink>
        </div>
    )
}

export default ItemCount