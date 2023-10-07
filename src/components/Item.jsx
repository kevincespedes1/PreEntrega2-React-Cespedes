import { NavLink } from "react-router-dom"
const Item = ({ product }) => {
  const handleClick = (e) => {
    e.stopPropagation()
  }
  return (
    <div className='item-list' >
      <div className="item-1" onClick={handleClick}>
        <h1>{product.category}</h1>
        <img src={product.img} alt={product.name} />
        <p>Stock disponible : {product.stock}</p>
        <NavLink to={`/item/${product.id}`}>
          <button className="btn">Ver Producto</button>
        </NavLink>
      </div>
    </div>
  )
}
export default Item