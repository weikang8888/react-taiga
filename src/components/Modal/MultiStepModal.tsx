import React, { useState } from "react";
import "./modal.css";
import Step1 from "./TyreServiceModal";
import Step2 from "./ChooseDate";
import Step3 from "./CustomerInformation";
interface FormData {
  name: string;
  email: string;
  phone_number: string;
  date: string; // Update the type if date has a different type in your application
  servicesType: string; // Assuming servicesType is an array of strings
}
const MultiStepModal = ({ handleCloseModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    date: "",
    servicesType: [],
  });
  const formSteps = [
    {
      id: 1,
      fields: [{ label: "Tyre Service", type: "text" }],
    },
    {
      id: 2,
      fields: [{ label: "Choose Date", type: "text" }],
    },
    {
      id: 3,
      fields: [{ label: "Customer Information", type: "text" }],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "servicesType") {
      setFormData((prevData) => {
        if (checked) {
          return { ...prevData, [name]: [...prevData[name], value] };
        } else {
          return {
            ...prevData,
            [name]: prevData[name].filter((service) => service !== value),
          };
        }
      });
      setErrors((prevErrors) => ({
        ...prevErrors,
        servicesType: "",
      }));
    } else {
      // For other input fields, handle them normally
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  const handleDateChange = (newDate) => {
    setFormData((prevData) => ({ ...prevData, date: newDate }));
  };
  const validateStep1 = () => {
    const step1Errors: Partial<FormData> = {}; // Use Partial<> to allow setting partial errors
    if (formData.servicesType.length === 0) {
      step1Errors.servicesType = "Please select at least one service type.";
    }
    // Add more validation rules for other fields in Step 1 if needed

    setErrors(step1Errors);
    return Object.keys(step1Errors).length === 0;
  };

  const validateStep2 = () => {
    const step2Errors: Partial<FormData> = {}; // Use Partial<> to allow setting partial errors
    if (!formData.date) {
      step2Errors.date = "Please choose a date.";
    }
    // Add more validation rules for other fields in Step 2 if needed

    setErrors(step2Errors);
    return Object.keys(step2Errors).length === 0;
  };

  const validateStep3 = () => {
    const step3Errors: Partial<FormData> = {}; // Use Partial<> to allow setting partial errors
    {
    }
    if (!formData.name) {
      step3Errors.name = "Please enter your name.";
    }
    if (!formData.email) {
      step3Errors.email = "Please enter your email.";
    }
    if (!formData.phone_number) {
      step3Errors.phone_number = "Please enter your phone number.";
    }

    setErrors(step3Errors);
    return Object.keys(step3Errors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!validateStep1()) {
        return;
      }
    } else if (currentStep === 2) {
      if (!validateStep2()) {
        return;
      }
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (currentStep === 3) {
      if (!validateStep3()) {
        return;
      }
      console.log(formData);
    }
  };

  const renderProgressSteps = () => {
    return formSteps.map((step) => {
      const isActive = currentStep >= step.id;
      return (
        <li key={step.id} className={isActive ? "active" : ""}>
          {step.fields[0].label}
        </li>
      );
    });
  };
  return (
    <div className="modal-content-overlay">
      <div className="modal-content-form">
        <button className="close-button" onClick={handleCloseModal}>
          &times;
        </button>
        <div className="progressbar-wrapper">
          <ul className="progressbar">{renderProgressSteps()}</ul>
        </div>
        {currentStep === 1 && (
          <>
            <Step1
              data={formData}
              handleChange={handleInputChange}
              errors={errors}
            />
            {errors.servicesType && (
              <div className="error-message">{errors.servicesType}</div>
            )}
          </>
        )}
        {currentStep === 2 && (
          <>
            <Step2 data={formData} handleChange={handleDateChange} />
            {errors.date && (
              <div className="error-message">{errors.date}</div>
            )}
          </>
        )}
        {currentStep === 3 && (
          <>
            <Step3
              data={formData}
              handleChange={handleInputChange}
              errors={errors}
            />
          </>
        )}
        <div className="modal-buttons">
          {currentStep > 1 && (
            <div className="cmn-btn">
              <button onClick={handlePrevStep}>Previous</button>
            </div>
          )}
          {currentStep < formSteps.length ? (
            <div className="cmn-btn button-wrapper-right">
              <button onClick={handleNextStep}>Next</button>
            </div>
          ) : (
            <div className="cmn-btn">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepModal;
