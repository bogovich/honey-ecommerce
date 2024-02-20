import './Hero.css'
import { Link } from 'react-router-dom'


const Hero = () => {

    return (
        <section className="hero-section">
          <div className="hero-images">
              <div className="hero__images-container">
                  <img src="https://www.turistickeprice.hr/wp-content/uploads/2023/09/foto-Bozo-Boscic-TZ-BBZ.webp" />
                  <img src="https://source.unsplash.com/zuj7kbZNcUk" />
              </div>
              <Link to="/about-our-area" className="hero__button hero__button-products">Find more about our area!</Link>
              <Link to="/products" className="hero__button hero__button-locality">Check out our products!</Link>
          </div>
        </section>
    );
};

export default Hero;