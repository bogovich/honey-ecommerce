import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const ProductPage = () => {
    const products = useSelector((state) => state.productReducer.products);
    const { id } = useParams();
    const thisProduct = products.filter((product) => product.id === id)[0];
    return (
        <div>
            <div>
                <h1>{thisProduct.title.en}</h1>
                <img src={thisProduct.images[1]} alt={thisProduct.name} />
                <p>{thisProduct.description.en}</p>
                <p>{thisProduct.price}€</p>
            </div>
        </div>
    );
}

export default ProductPage;