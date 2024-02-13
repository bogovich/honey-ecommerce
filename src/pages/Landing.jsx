
import Product from '../components/Product'
import Hero from '../components/Hero'
import { useSelector } from 'react-redux'
import { selectFeaturedProducts } from '../redux/selectors'

const Landing = () => {
    const featuredProducts = useSelector(selectFeaturedProducts);

    return (
        <>
            <Hero />
            <section className="landing__products">
                <h1 className="hero__title">Featured products</h1>
                <div className="products">
                    {featuredProducts.map(product => (
                        <Product key={product.id} product={product}/>
                    ))}
                </div>
            </section>
        </>
        )
}

export default Landing;