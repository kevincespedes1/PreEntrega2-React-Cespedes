import { useContext, useState } from "react";
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';
import CartContext from "../context/CartContext";
const ItemDetail = ({ product, initial }) => {
    const [count, setCount] = useState(initial)
    const handleOnAdd = (count) => {
        setCount(count);
    }
const { removeItem, addItem} = useContext(CartContext)
return (
        <>
            <div className="start">
                <div className="item-2">
                    <NavLink to={`/category/${product.category}`}>
                        <button className="atras">Volver atras</button>
                    </NavLink>
                    <div>
                        <h1 >{product.name}</h1>
                        <img src={product.img} />
                    </div>
                    {count > 0
                        ?
                        (
                            <div>
                                <h3> Cantidad elegida :{count}</h3>
                                <h3 className="price">Total Precio: $ {product.price*count} </h3>
                                <NavLink to={`/cart`}>
                                    <button className="agregar" onClick={()=> {addItem(product, count)}}>Finalizar Compra</button>
                                </NavLink>
                            </div>

                        )
                        :
                        (
                            <div>
                                <p>Stock Disponible para comprar: {product.stock}</p>
                                <h3 className="price">Precio: ${product.price}</h3>
                                    <ItemCount product={product}  initial={1} onAdd={handleOnAdd}  />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default ItemDetail