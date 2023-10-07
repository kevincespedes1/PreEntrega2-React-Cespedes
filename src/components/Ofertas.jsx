import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
const Ofertas = () => {
    const [products, setProducts] = useState([])



    useEffect(() => {

        const db = getFirestore();
        const q = query(collection(db, "products"), where("price", "<=", 6000));
        getDocs(q).then((snapshot) => {
            if (snapshot.size !== 0) {
                setProducts(
                    snapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data() }
                    })
                );
            }
        });
    }, [])
    return (
        <>
            <p className='titulo-ofertas'>Aquí encontraras nuestras mejores ofertas a un menor costo!! <br />
            Precios Menores a $6000
            </p>
            {/* <p className='titulo-ofertas'> Precios Menores a $6000</p> */}
            <div className="item-list-container">
                {products.map((product) => (
                    <div className='item-list'>
                        <div className="item-1">
                            <h1>{product.category}</h1>
                            <img src={product.img} alt={product.name} />
                            <p>Stock disponible : {product.stock}</p>
                            <NavLink to={`/item/${product.id}`}>
                                <button className="btn">Ver Producto</button>
                            </NavLink>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}




export default Ofertas