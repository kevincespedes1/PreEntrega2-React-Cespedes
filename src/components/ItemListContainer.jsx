import '../App.css';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../products'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(result => {
            setProducts(result)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return <h1>Cargando Productos...</h1>
    }
    return (

        <div className="item-list-container"><ItemList products={products} /></div>

    )

}
export default ItemListContainer
