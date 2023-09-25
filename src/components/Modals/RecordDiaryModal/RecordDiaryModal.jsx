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
  WrapperInput,
  Input,
  BtnAddNewProduct,  
  ErrorMsg,
  ContainerForBtns,
  BtnConfirm,
  BtnCancel
} from './RecordDiaryModal.styled';

const schema = yup.object({
  productList: yup.array().of(yup.object().shape({
    mealName:
      yup.string()
        .required("Name is a required field")
        .trim('Name cannot include leading and trailing spaces')
        .strict(true),
    carbonohidrates:
      yup.number()
        .required("Carbonohidrates is a required field")
        .typeError('Carbonohidrates must be a number')
        .min(0, "Carbonohidrates must a positive number")
        .integer("Carbonohidrates must be an integer"),
    protein:
      yup.number()
        .required("Protein is a required field")
        .typeError('Protein must be a number')        
        .min(0, "Protein must a positive number"),
    fat:
      yup.number()
        .required("Fat is a required field")
        .typeError('Fat must be a number')
        .min(0, "Protein must a positive number"),
    calories:
      yup.number()
        .required("Calories is a required field")
        .typeError('Calories must be a number')
        .min(0, "Calories must a positive number")
        .integer("Calories must be an integer"),
  })),
});

const initialValues = {
  productList: [
    {
      mealName: '',
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

              <FieldArray name="productList" render={({ insert, remove }) => {
                  
                return (
                  <ContentWrapper>
                    <ProductList>
                      {values.productList.map((product, index) => {

                        return (
                          <Product key={index}>
                            <WrapperInput>
                              <Input
                                type="text"
                                id={`productList.${index}.mealName`}
                                name={`productList.${index}.mealName`}
                                placeholder="The name of the product or dish"
                              />
                              <ErrorMsg name={`productList.${index}.mealName`} component="div" />
                            </WrapperInput>

                            <WrapperInput>
                              <Input
                                type="number"
                                id={`productList.${index}.carbonohidrates`}
                                name={`productList.${index}.carbonohidrates`}
                                placeholder="Carbonoh."
                              />
                              <ErrorMsg name={`productList.${index}.carbonohidrates`} component="div" />
                            </WrapperInput>
                          
                            <WrapperInput>
                              <Input
                                type="number"
                                id={`productList.${index}.protein`}
                                name={`productList.${index}.protein`}
                                placeholder="Protein"
                              />
                              <ErrorMsg name={`productList.${index}.protein`} component="div" />
                            </WrapperInput>
                          
                            <WrapperInput>
                              <Input
                                type="number"
                                id={`productList.${index}.fat`}
                                name={`productList.${index}.fat`}
                                placeholder="Fat"
                              />
                              <ErrorMsg name={`productList.${index}.fat`} component="div" />
                            </WrapperInput>
                          
                            <WrapperInput>
                              <Input
                                type="number"
                                id={`productList.${index}.calories`}
                                name={`productList.${index}.calories`}
                                placeholder="Calories"
                              />
                              <ErrorMsg name={`productList.${index}.calories`} component="div" />
                            </WrapperInput>

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
                            mealName: '',
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