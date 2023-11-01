import PropTypes from "prop-types";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from "react-redux";

import { addFood } from 'redux/Foods/foodsOperations';
import { getStats } from "redux/Statistics/statisticsOperations";


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

const modalRoot = document.querySelector('#modal-root');

const RecordDiaryModal = ({ onClose, image, mealType, item }) => {

  const initialValues = {
    productList: [
      { 
        mealType: mealType,
        mealName: item.mealName ?? '',
        carbonohidrates: item.carbohydrate ?? '',
        protein: item.protein ?? '',
        fat: item.fat ?? '',
        calories: item.calories ?? ''
      }
    ],
  };

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
    await values.productList.forEach(({
      mealType,
      mealName,
      carbonohidrates,
      protein,
      fat,
      calories
    }) => {
      const data = {
        mealType: mealType.toString(),
        mealName: mealName.toString(),
        carbohydrate: carbonohidrates.toString(),
        protein: protein.toString(),
        fat: fat.toString(),
        calories: calories.toString(),      
      }
      dispatch(addFood(data));
    });
    dispatch(getStats('today'));
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
        <ModalTitle>Record your meal</ModalTitle>
        <WrapperFormTitle>
          <Image src={image} alt="Plate" />
          <Title>{mealType}</Title>
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
                            mealType: mealType,
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
  mealType: PropTypes.string.isRequired
}

export default RecordDiaryModal;