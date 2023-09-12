import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
const ItemDetail = ({ product, isLoading }) => {
    if (isLoading) {
        return <h2>Espere un momento...</h2>
    }


    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <>
            <div className="start">
                <div className="item-2">
                    <NavLink to={`/category/${product.category}`}>
                        <button className="atras">Volver atras</button>
                    </NavLink>
                    <h1 >{product.name}</h1>
                    <img src={product.img} />
                    <p>Stock Disponible para comprar: {product.stock}</p>
                    <h3 className="price">Precio: ${product.price}</h3>
                    <ItemCount product={product} initial={1} />
                </div>
            </div>
        </>
    );
};

ItemDetail.propTypes = {
    product: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default ItemDetail