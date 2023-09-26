import PropTypes from "prop-types";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from 'react-dom';

import { addWater } from "../../../redux/Water/waterOperations";

import { Formik } from 'formik';
import * as yup from 'yup';

import {
  Backdrop,
  Modal,
  Title,
  FormFormic,
  Label,
  Button,
  ButtonTwo,
  Input,
  ErrorMes,
} from './addWater.styled';

const schema = yup.object({
  water: yup.number().required().positive().integer(),
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
  
  const handleSubmit = ({water}, { resetForm }) => {
    dispatch(addWater(water));
    console.log(water)
    resetForm();
  };
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
            <Input name="water" type="text" placeholder="Enter milliliters"/>
            <ErrorMes name="water" component="div" />

            <Button type="submit">Confirm</Button>
            <ButtonTwo type="button" onClick={onClose}>Cancel</ButtonTwo>
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
