import { PropTypes } from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Product = ({image,title, category, packaging, description, price}) => {

      

    return (
        <Card sx={{ width: 250, maxWidth: 250 }}>
            <CardMedia
              sx={{ height: 180, backgroundSize: 'contain'}}
              image={image}
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
              <Button size="small">Add to Cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
Product.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.shape({
        en: PropTypes.string.isRequired,
        hr: PropTypes.string.isRequired
    }).isRequired,
    category: PropTypes.shape({
        en: PropTypes.string.isRequired,
        hr: PropTypes.string.isRequired
    }).isRequired,
    packaging: PropTypes.shape({
        en: PropTypes.string.isRequired,
        hr: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.shape({
        en: PropTypes.string.isRequired,
        hr: PropTypes.string.isRequired
    }).isRequired
}

export default Product;