import { PropTypes } from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';



const Product = ({product}) => {
    const { images, title, packaging, description, price } = product;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart);

    const handleAdd = () => {
        dispatch(addToCart(product));
        console.log(cart);
    }

    return (
        <Card sx={{ width: 250, maxWidth: 250 }}>
            <CardMedia
              sx={{ height: 180, backgroundSize: 'contain'}}
              image={images[1]}
              title="honey"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title.en}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {category}
              </Typography> */}
                <Typography variant="body2" color="text.secondary">
                    {packaging.en}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description.en}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {price}€
                </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleAdd}>Add to Cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;