import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useState } from "react";
import * as yup from 'yup'
import {Backdrop, Modal, Title, Label, Button, ButtonTwo} from './addWater.styled'

 const schema = yup.object({
    water: yup.number().required().positive().integer(),
  });

  const initialValues= {
    water: ''
   }
  
export function AddWater() {
//     const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

 const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm();
 }

    return (
        <Backdrop>
            <Modal>
          <Title>Add water intake</Title>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            <Form autoComplete="off">
                <Label htmlFor="water">
                How much water</Label>
              <Field name="water" type="text"/>
              <ErrorMessage name='water' component='div'/>
              
              <Button type="submit">Confirm</Button>
              <ButtonTwo type="button">Cancel</ButtonTwo>
            </Form>
          </Formik>
          </Modal>
        </Backdrop>
      );
}