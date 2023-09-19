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

export function AddWater() {
  //     const [isModalOpen, setModalOpen] = useState(false);

  //   const openModal = () => {
  //     setModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setModalOpen(false);
  //   };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

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
            <Label htmlFor="water">How much water</Label>
            <Input name="water" type="text" />
            <ErrorMes name="water" component="div" />

            <Button type="submit">Confirm</Button>
            <ButtonTwo type="button">Cancel</ButtonTwo>
          </Form>
        </Formik>
      </Modal>
    </Backdrop>
  );
}
