import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, clear, getTotal } = useContext(CartContext)

    return (
        <>
            
            {cart.length !== 0 ?
                (
                    <div className=''>
                        <div className=''>
                            {cart.map((e) => <CartItem key={e.id} item={e} />)}
                            {`Total:  $ ${getTotal()}`}
                            <button className="btn btn-danger" onClick={clear}>limpiar Carrito</button>
                            <Link to='/checkout'>
                                <button className="btn btn-info">Finalizar Compra</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h3>no hay nada en el carrito</h3>
                        <Link to='/'>volver la tienda</Link>
                    </div>
                )
            }

        </>
    )

}

export default Cart