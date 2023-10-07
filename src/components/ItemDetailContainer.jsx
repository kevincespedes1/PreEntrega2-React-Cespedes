import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {
    const [product, setproduct] = useState();
    const { id } = useParams();
    const getProduct = () => {
        const db = getFirestore();
        const query = doc(db, 'products', id);
        getDoc(query)
            .then((snapshot) => {
                setproduct({ id: snapshot.id, ...snapshot.data() })
            })
            .catch(error => console.log(error))
    };
    useEffect(() => {
        getProduct();
    }, [id])
    return (
        <div className='detailContainer'>
            {product &&
                <ItemDetail product={product}></ItemDetail>
            }
        </div>
    )
}
export default ItemDetailContainer