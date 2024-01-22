import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const User = () => {
  const initialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (values) => {
    // Handle the form data (e.g., send it to a server)
    console.log("Form data submitted:", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default User;
