
import { useState } from 'react'


export default function ItemCount({product, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    const { stock} = product
    
    
    
    function onIncrement() {
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
                <button className='button' onClick={onIncrement}>+</button>
            </div>
                <button className='agregar' onClick={()=> onAdd(count)} disabled={!stock}>Agregar al Carrito</button>
        </div>
    )
}

