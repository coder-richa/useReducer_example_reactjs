import React from "react";
import classes from "./Product.module.css";
import propTypes from "prop-types";
import Card from "../ui/layout/Card";
import { formatCurrency } from "../../utility/numberFunctions";
import { formatDate } from "../../utility/dateFunctions";
const Product = (props) => {
  return (
    <div className={classes["product-container"]}>
      <div className={classes["product-grid"]}>
        <h2 className={classes["center"]}>{props.title}</h2>
        <p className={classes["center"]}>{formatCurrency(props.price)}</p>
        <p className={classes["center"]}>{formatDate(props.date)}</p>
        <p className={classes["center"]}>{props.description}</p>
      </div>
    </div>
  );
};

// PropTypes define the types of values that are passed to the components
Product.propTypes = {
  title: propTypes.string,
  price: propTypes.number,
  date: propTypes.string,
  description: propTypes.string,
};

// Default Props of the component
Product.defaultProps = {
  title: "Product",
  price: 1,
  date: new Date().toString(),
  description: "Some dummy description",
};

// Export the component
export default Product;
