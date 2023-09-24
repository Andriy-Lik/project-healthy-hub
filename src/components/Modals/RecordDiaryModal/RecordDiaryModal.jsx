import PropTypes from "prop-types";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { FieldArray, Formik } from 'formik';
import * as yup from 'yup';

import {
  Backdrop,
  Modal,
  ModalTitle,
  WrapperFormTitle,
  Image,
  Title,
  FormFormic,
  ContentWrapper,
  ProductList,
  Product,
  Input,
  BtnAddNewProduct,
  
  ErrorMes,
  ContainerForBtns,
  BtnConfirm,
  BtnCancel
} from './RecordDiaryModal.styled';

// написати схему
const schema = yup.object({
  // productName: yup.string().required(),
  // carbonohidrates: yup.number().required(),
  // protein: yup.number().required(),
  // fat: yup.number().required(),
  // calories: yup.number().required(),
});

const initialValues = {
  productList: [
    {
      productName: '',
      carbonohidrates: '',
      protein: '',
      fat: '',
      calories: ''
    }
  ],  
};

const modalRoot = document.querySelector('#modal-root');

const RecordDiaryModal = ({ onClose, image, title }) => {
  
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
        <ModalTitle>Record your meal</ModalTitle>
        <WrapperFormTitle>
          <Image src={image} alt="Plate" />
          <Title>{title}</Title>
        </WrapperFormTitle>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ errors, touched, values }) => (

            <FormFormic autoComplete="off">

              <FieldArray name="productList" render={({ insert }) => {
                  
                return (
                  <ContentWrapper>
                    <ProductList>{values.productList.map((product, index) => {

                      return (
                        <Product key={index}>
                          <Input
                            type="text"
                            id={`productList.${index}.productName`}
                            name={`productList.${index}.productName`}
                            placeholder="The name of the product or dish"
                          />
                          <ErrorMes name={`productList.${index}.productName`} component="div" />

                          <Input
                            type="text"
                            id={`productList.${index}.carbonohidrates`}
                            name={`productList.${index}.carbonohidrates`}
                            placeholder="Carbonoh."
                          />

                          <Input
                            type="text"
                            id={`productList.${index}.protein`}
                            name={`productList.${index}.protein`}
                            placeholder="Protein"
                          />

                          <Input
                            type="text"
                            id={`productList.${index}.fat`}
                            name={`productList.${index}.fat`}
                            placeholder="Fat"
                          />

                          <Input
                            type="text"
                            id={`productList.${index}.calories`}
                            name={`productList.${index}.calories`}
                            placeholder="Calories"
                          />
                        </Product>
                      )

                    })}
                    </ProductList>

                    <BtnAddNewProduct
                      type="button"
                      onClick={() => {
                        insert(
                          values.productList.length + 1,
                          {
                            productName: '',
                            carbonohidrates: '',
                            protein: '',
                            fat: '',
                            calories: ''
                          }
                        )
                      }}
                    >
                      + Add more
                    </BtnAddNewProduct>

                  </ContentWrapper>
                )
                  
              }} />


              <ContainerForBtns>
                <BtnConfirm type="submit">Confirm</BtnConfirm>
                <BtnCancel type="button" onClick={onClose}>Cancel</BtnCancel>
              </ContainerForBtns>
            </FormFormic>
          )}
        </Formik>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

RecordDiaryModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default RecordDiaryModal;