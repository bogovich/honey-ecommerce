
import Product from '../components/Product'
import Hero from '../components/Hero'
import { useSelector } from 'react-redux'

const Landing = () => {
    const products = useSelector(state => state.productReducer.products)
    const featuredProducts = products.filter((product) => product.data.featured === true)

    return (
        <>
            <Hero />
            <section className="landing__products">
                <h1 className="hero__title">Featured products</h1>
                <div className="products">
                    {featuredProducts.map(product => (
                        <Product key={product.id} image={product.data.images[1]} title={product.data.title} category={product.data.category} packaging={product.data.packaging} description={product.data.description} price={product.data.price}/>
                    ))}
                </div>
            </section>
        </>
        )
}

export default Landing;