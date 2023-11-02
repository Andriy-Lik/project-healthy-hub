import PropTypes from "prop-types";
import {
  Value,
  ProductName,
  ProductDescription,
  Img,
  ImgThumb,
  ProductCard
} from "./CardRecommendedProduct.styled";

const CardRecommendedProduct = ({ id, img, name, amount, calories }) => {
  
  return (
    <ProductCard key={id}>
      <ImgThumb>
        <Img src={img} alt={name} />
      </ImgThumb>

      <ProductDescription>
        <ProductName>{name}</ProductName>
        <Value>
          {amount} <span>{calories} calories</span>
        </Value>
      </ProductDescription>
    </ProductCard>
  );
};

CardRecommendedProduct.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
}

export default CardRecommendedProduct;