import Product from "../components/Product";
import Hero from "../components/Hero";
import { useSelector } from "react-redux";
import { selectFeaturedProducts } from "../redux/selectors";
import Loading from "../components/Loading";

const Landing = () => {
  const featuredProducts = useSelector(selectFeaturedProducts);
  const status = useSelector((state) => state.productReducer.status);
  console.log(status);

  if (!featuredProducts) {
    return <h1> Loading </h1>;
  }

  return (
    <>
      <Hero />
      <section className="landing__products">
        <h1 className="hero__title">Featured products</h1>

        <div className="products">
          {status === "loading" && <Loading />}

          {status === "succeeded" &&
            featuredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Landing;
