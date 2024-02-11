
import Product from '../components/Product'
import Hero from '../components/Hero'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, getDocs} from "firebase/firestore"
import {db} from '../firebase'

const getProductData = async () => {
    try {
        const q = query(collection(db, "products"), orderBy("created_at", "desc"));
        const data = await getDocs(q);
        const productsArray = data.docs.map((doc) => ({id: doc.id, data: doc.data()}));
        return productsArray;
    } catch (error) {
        console.error("Failed to fetch products: ", error);
        return [];
    }
}

const Landing = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProductData().then(setProducts);
    },[])
    console.log(products)
    return (
        <>
            <Hero />
            <section className="landing__products">
                <h1 className="hero__title">Featured products</h1>
                <div className="products">
                    {products.map(product => (
                        <Product key={product.id} image={product.data.images[1]} title={product.data.title} category={product.data.category} packaging={product.data.packaging} description={product.data.description} price={product.data.price}/>
                    ))}
                </div>
            </section>
        </>
        )
}

export default Landing;