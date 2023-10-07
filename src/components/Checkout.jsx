import { useContext, useState } from 'react'
import { useCart, CartContext } from '../context/CartContext'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
export default function Checkout() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [orderId, setOrderId] = useState()

    function crearOrden() {
        const db = getFirestore()
        const order = {
            buyer: {
                name,
                email,
                phone,
            },
        };
        const ordenesRef = collection(db, "ordenes")

        addDoc(ordenesRef, order).then((result) => {
            setOrderId(result.id)
        })
    }
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex' }}>
                <label>
                    name
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label>
                    email
                    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <label>
                    phone
                    <input type="number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </label>
            <button onClick={crearOrden}>FINALIZAR COMPRA</button>
            </form>
            {
                orderId&&(
                    <div style={{display:'flex'}}>
                        <h2>Compra exitosa</h2>
                        <h2>{`El código de compra es: ${orderId}`}</h2>
                        <Link to="/"><button className='btn'>volver a comprar</button></Link>
                    </div>
                    )
            }
        </div>

    )
}