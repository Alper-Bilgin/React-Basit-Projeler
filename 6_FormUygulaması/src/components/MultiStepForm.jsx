import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    birthDate: "",
    school: "",
    department: "",
    graduationYear: "",
  });

  // Adım değiştirme fonksiyonları
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Formik ile gelen verileri birleştir
  const handleFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div>
      <h2>Çok Adımlı Form - Adım {step}</h2>
      {step === 1 && <Step1 formData={formData} nextStep={nextStep} handleFormData={handleFormData} />}
      {step === 2 && <Step2 formData={formData} nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />}
      {step === 3 && <Step3 formData={formData} nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />}
      {step === 4 && <Result formData={formData} />}
    </div>
  );
};

export default MultiStepForm;
