import PropTypes from "prop-types";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { createPortal } from 'react-dom';

import { addWater } from "redux/Water/waterOperations";
import { getStats } from "redux/Statistics/statisticsOperations";

import { Formik } from 'formik';
import * as yup from 'yup';

import {
  Backdrop,
  Modal,
  Title,
  FormFormic,
  Label,
  Button,
  ButtonCancel,
  Input,
  ErrorMes,
} from './addWater.styled';

const schema = yup.object({
  water: yup.number()
    .required("Required")
    .typeError("Must be a number")
    .positive("Must be a positive number")
    .max(1500, "The maximum allowable value is 1500")
    .integer("Must be an integer"),
});

const initialValues = {
  water: '',
};

const modalRoot = document.querySelector('#modal-root');

const AddWater = ({ onClose }) => {

  const dispatch = useDispatch(); 
  
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {      
      onClose();      
    };
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    };
  };
  
  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(addWater(values));
    await dispatch(getStats('today'));
    resetForm();
    onClose();
  };
  
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    }

  });

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <Title>Add water intake</Title>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <FormFormic autoComplete="off">
            <Label htmlFor="water">How much water</Label>
            <Input name="water" type="number" placeholder="Enter milliliters"/>
            <ErrorMes name="water" component="div" />

            <Button type="submit">Confirm</Button>
            <ButtonCancel type="button" onClick={onClose}>Cancel</ButtonCancel>
          </FormFormic>
        </Formik>
      </Modal>
    </Backdrop>,
    modalRoot    
  );
};

AddWater.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default AddWater;
