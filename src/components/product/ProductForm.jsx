import React from "react";
import propTypes from "prop-types";
import Form from "../ui/form/Form";
import Input from "../ui/form/Input";
import Button from "../ui/form/Button";
import Textarea from "../ui/form/Textarea";
import Row from "../ui/layout/Row";
import Column from "../ui/layout/Column";
import Card from "../ui/layout/Card";
import Label from "../ui/form/Label";
import { getISOString } from "../../utility/dateFunctions";
// This component is responsible for adding/editing the products
const ProductForm = (props) => {
  return (
    <Card>
      <Form isEditOperation={props.isEditOperation}>
        <Row>
          <Column className='is-one-half'>
            <Label htmlFor='title'>{props.titleLabel}</Label>
            <Input type='text' name='title' id='title' value={props.title} />
          </Column>
          <Column className='is-one-half'>
            <Label htmlFor='price'>{props.priceLabel}</Label>
            <Input
              type='text'
              name='price'
              id='price'
              value={`${props.price}`}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label htmlFor='description'>{props.descriptionLabel}</Label>
            <Textarea
              name='description'
              id='description'
              value={props.description}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label htmlFor='date'>{props.dateLabel}</Label>
            <Input type='date' name='date' id='date' value={props.date} />
          </Column>
        </Row>
        <Row>
          <Column className='center'>
            <Button type='submit'>{props.submitButtonText}</Button>
          </Column>
        </Row>
      </Form>
    </Card>
  );
};

// PropTypes define the types of values that are passed to the components
ProductForm.propTypes = {
  title: propTypes.string,
  price: propTypes.number,
  date: propTypes.string,
  description: propTypes.string,
  id: propTypes.string,
  titleLabel: propTypes.string,
  priceLabel: propTypes.string,
  dateLabel: propTypes.string,
  descriptionLabel: propTypes.string,
  isEditOperation: propTypes.bool,
  submitButtonText: propTypes.string,
};

// Default Props of the component
ProductForm.defaultProps = {
  title: "",
  price: 0,
  date: getISOString(new Date()),
  description: "",
  id: new Date().getTime().toString(),
  titleLabel: "Product Name",
  priceLabel: "Price",
  dateLabel: "Date",
  descriptionLabel: "Description",
  isEditOperation: false,
  submitButtonText: "Save",
};

// Export the component

export default ProductForm;
