import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Step1 = ({ formData, nextStep, handleFormData }) => {
  return (
    <Formik
      initialValues={{
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Ad zorunlu"),
        lastName: Yup.string().required("Soyad zorunlu"),
        gender: Yup.string().required("Cinsiyet zorunlu"),
      })}
      onSubmit={(values) => {
        handleFormData(values);
        nextStep();
      }}
    >
      <Form>
        <div>
          <label>Ad:</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" component="div" className="error" />
        </div>
        <div>
          <label>Soyad:</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" component="div" className="error" />
        </div>
        <div>
          <label>Cinsiyet:</label>
          <Field as="select" name="gender">
            <option value="">Seçiniz</option>
            <option value="Erkek">Erkek</option>
            <option value="Kadın">Kadın</option>
            <option value="Diğer">Diğer</option>
          </Field>
          <ErrorMessage name="gender" component="div" className="error" />
        </div>
        <button type="submit">İleri</button>
      </Form>
    </Formik>
  );
};

export default Step1;
