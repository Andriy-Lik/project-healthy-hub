import PropTypes from "prop-types";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from "react-redux";

import { updateFood } from 'redux/Foods/foodsOperations';
import { getStats } from "redux/Statistics/statisticsOperations";

import { FieldArray, Formik } from 'formik';
import * as yup from 'yup';

import {
  Backdrop,
  Modal,
  ModalTitle,  
  FormFormic,
  ContentWrapper,
  ProductList,
  Product,
  Label,
  Input,
  ErrorMsg,
  ContainerForBtns,
  BtnConfirm,
  BtnCancel
} from './UpdateMealModal.styled';

const schema = yup.object({
  productList: yup.array().of(yup.object().shape({
    mealName:
      yup.string()
        .required("Name is required")
        .trim('Name cannot include leading and trailing spaces')
        .strict(true),
    carbonohidrates:
      yup.number()
        .required("Carbonohidrates is required")
        .typeError("Must be a number")
        .min(0, "Must be a positive number")
        .max(100, "The maximum allowable value is 100")
        .test(
          "maxDigitsAfterDecimal",
          "Must have 1 digits after decimal",
          (number) => /^\d+(\.\d{1})?$/.test(number)
        ),
    protein:
      yup.number()
        .required("Protein is required")
        .typeError('Must be a number')
        .min(0, "Must be a positive number")
        .max(100, "The maximum allowable value is 100")
        .test(
          "maxDigitsAfterDecimal",
          "Must have 1 digits after decimal",
          (number) => /^\d+(\.\d{1})?$/.test(number)
        ),
    fat:
      yup.number()
        .required("Fat is required")
        .typeError('Must be a number')
        .min(0, "Must be a positive number")
        .max(100, "The maximum allowable value is 100")
        .test(
          "maxDigitsAfterDecimal",
          "Must have 1 digits after decimal",
          (number) => /^\d+(\.\d{1})?$/.test(number)
        ),
    calories:
      yup.number()
        .required("Calories is required")
        .typeError('Must be a number')
        .min(0, "Must a be positive number")
        .max(1000, "The maximum allowable value is 1000")
        .integer("Must be an integer"),
  })),
});

const modalRoot = document.querySelector('#modal-root');


const UpdateMealModal = ({ onClose, mealType, item }) => {

  const initialValues = {
    productList: [
      { 
        mealType: mealType,
        mealName: item?.mealName ?? '',
        carbonohidrates: item?.carbohydrate ?? '',
        protein: item?.protein ?? '',
        fat: item?.fat ?? '',
        calories: item?.calories ?? ''
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
        carbohydrate: carbonohidrates.toFixed(1).toString(),
        protein: protein.toFixed(1).toString(),
        fat: fat.toFixed(1).toString(),
        calories: calories.toString(),
      }
      dispatch(updateFood({ foodId: item._id, data }));
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
        <ModalTitle>Edit meal</ModalTitle>        

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ values }) => (

            <FormFormic autoComplete="off">

              <FieldArray name="productList" render={() => {
                  
                return (
                  <ContentWrapper>
                    <ProductList>
                      {values.productList.map((_, index) => {

                        return (
                          <Product key={index}>
                            <Label>
                              <span>Name</span>                              
                              <Input
                                type="text"
                                id={`productList.${index}.mealName`}
                                name={`productList.${index}.mealName`}
                                placeholder="The name of the product or dish"
                              />
                              <ErrorMsg name={`productList.${index}.mealName`} component="div" />
                            </Label>

                            <Label>
                              <span>Carbonoh.</span>                              
                              <Input
                                type="number"
                                id={`productList.${index}.carbonohidrates`}
                                name={`productList.${index}.carbonohidrates`}
                                placeholder="Carbonoh."
                              />
                              <ErrorMsg name={`productList.${index}.carbonohidrates`} component="div" />
                            </Label>
                          
                            <Label>                              
                              <span>Protein</span>
                              <Input
                                type="number"
                                id={`productList.${index}.protein`}
                                name={`productList.${index}.protein`}
                                placeholder="Protein"
                              />
                              <ErrorMsg name={`productList.${index}.protein`} component="div" />
                            </Label>
                          
                            <Label>
                              <span>Fat</span>
                              <Input
                                type="number"
                                id={`productList.${index}.fat`}
                                name={`productList.${index}.fat`}
                                placeholder="Fat"
                              />
                              <ErrorMsg name={`productList.${index}.fat`} component="div" />
                            </Label>
                          
                            <Label>
                              <span>Calories</span>                              
                              <Input
                                type="number"
                                id={`productList.${index}.calories`}
                                name={`productList.${index}.calories`}
                                placeholder="Calories"
                              />
                              <ErrorMsg name={`productList.${index}.calories`} component="div" />
                            </Label>                            
                          </Product>
                        );

                      })}                      
                    </ProductList>    

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

UpdateMealModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  mealType: PropTypes.string.isRequired
};

export default UpdateMealModal;



