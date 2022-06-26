import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as yup from "yup";

const Input = styled(Field)`
  color: red;
  font-size: 24px;
`;

const signupSchema = yup.object().shape({
  login: yup
    .string()
    .min(2, "Too Short")
    .max(20, "Too Long")
    .email()
    .required("Required"),
  password: yup.string().min(6).max(10).required(),
});

const initialValues = {
  login: "",
  password: "",
};

const FormikForm = () => {
  const handleSubmit = (values, actions) => {
    console.log("handleSubmit ~ actions", actions);
    console.log("handleSubmit ~ values", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>

        <label>
          Password
          <Input type="password" name="password" autoComplete="off" />
          <ErrorMessage name="password" component="span" />
        </label>

        <button type="submit"> Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
