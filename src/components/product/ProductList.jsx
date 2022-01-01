import React from "react";
import Card from "../ui/layout/Card";
import Product from "./Product";
import propTypes from "prop-types";
import classes from "./ProductList.module.css";
const ProductList = (props) => {
  return (
    <Card className='container' classes={classes}>
      {props.products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Card>
  );
};
// PropTypes define the types of values that are passed to the components
ProductList.propTypes = {
  products: propTypes.array,
};

// Default Props of the component
ProductList.defaultProps = {
  products: [],
};

// Export the component
export default ProductList;
