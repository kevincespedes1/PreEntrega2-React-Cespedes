import { NavLink } from "react-router-dom";
export default function Item({ product }) {
  return (
    <div className="item-1">
      <h1>{product.category}</h1>
      <img src={product.img} alt={product.name} />
      <p>Stock disponible : {product.stock}</p>
      <NavLink to={`/category/${product.category}/item/${product.id}`}>
        <button className="btn">Ver Producto</button>
      </NavLink>
    </div>
  )

}