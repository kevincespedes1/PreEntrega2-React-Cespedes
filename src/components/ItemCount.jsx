import React, { useState } from 'react'

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

    return (
        <div className='flexx'>
            <div className='flex'>
                <button className='button' onClick={onDecrease}>-</button>
                <span>{count}</span>
                <button className='button' onClick={onAdd}>+</button>
            </div>
            <button className='agregar'>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount