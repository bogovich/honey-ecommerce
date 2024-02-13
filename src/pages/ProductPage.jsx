import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductsWCategories } from "../redux/selectors";

const ProductPage = () => {
    const products = useSelector(selectProductsWCategories);
    const status = useSelector((state) => state.productReducer.status);
    const { productSlugAndId } = useParams();
    const parts = productSlugAndId.split('-');
    const id = parts.pop();
    const thisProduct = products.filter((product) => product.id === id)[0];

    if (status === 'pending' || !thisProduct) {
        return <h1> Loading </h1>; // Replace with your loading spinner component
    }
    
    return (
        <div>
            <h1>{thisProduct.title.en}</h1>
            <img src={thisProduct.images[1]} alt={thisProduct.name} />
            <p>{thisProduct.description.en}</p>
            <p>{thisProduct.price}€</p>
        </div>
    );
}

export default ProductPage;