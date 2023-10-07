import Item from './Item'
const ItemList = ({ products }) => {
  return (
    <div className="item-list-container">
      {products.map((product) => (
        <Item key={product.id} product={product}></Item>
      ))}
    </div>
  )
}
export default ItemList