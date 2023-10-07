import '../App.css';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore'
const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const productsRef = collection(db, "products");
        const qRef = categoryId ? query(productsRef,
            where('category', '==', categoryId))
            : productsRef
        getDocs(qRef).then((snapshot) => {
            const data = snapshot.docs.map((product) => {
                return { id: product.id, ...product.data() }
            })
            setProducts(data);
        })
            .catch((error) => { console.log(error) })
    }, [categoryId]);
    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer
