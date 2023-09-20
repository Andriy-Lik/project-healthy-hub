import { useEffect } from 'react';

import { createPortal } from 'react-dom';

import { Form, Formik } from 'formik';
import * as yup from 'yup';

import {
  Backdrop,
  Modal,
  Title,
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
  
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
          <Form autoComplete="off">
            <Label htmlFor="water">How much water</Label>
            <Input name="water" type="text" />
            <ErrorMes name="water" component="div" />

            <Button type="submit">Confirm</Button>
            <ButtonTwo type="button" onClick={onClose}>Cancel</ButtonTwo>
          </Form>
        </Formik>
      </Modal>
    </Backdrop>,
    modalRoot    
  );
};

export default AddWater;
