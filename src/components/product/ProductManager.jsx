import React from "react";
import propTypes from "prop-types";
import classes from "./ProductManager.module.css";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import { products } from "../../data/products";
// This Component is responsible for managing the products
// It has a form and a list of products
const ProductManager = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{props.title}</h1>
      <ProductForm></ProductForm>
      <ProductList products={products} />
    </div>
  );
};

// PropTypes define the types of values that are passed to the components
ProductManager.propTypes = {
  title: propTypes.string,
};

// Default Props of the component
ProductManager.defaultProps = {
  title: "Manage Product(s)",
};

// Export the component
export default ProductManager;
