import React, { useState } from "react";
import "./modal.css";
import Step1 from "./TyreServiceModal";
import Step2 from "./ChooseDate";
import Step3 from "./CustomerInformation";

const MultiStepModal = () => {
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

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    servicesType: [],
  });

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "servicesType") {
      // If the input is a serviceType checkbox, handle it as an array
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
    } else {
      // For other input fields, handle them normally
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    console.log(formData);
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
      {/* Modal Content */}

      <div className="modal-content-form">
        <div className="progressbar-wrapper">
          <ul className="progressbar">{renderProgressSteps()}</ul>
        </div>
        {currentStep === 1 && (
          <Step1 data={formData} handleChange={handleInputChange} />
        )}
        {currentStep === 2 && (
          <Step2 data={formData} handleChange={handleInputChange} />
        )}
        {currentStep === 3 && (
          <Step3 data={formData} handleChange={handleInputChange} />
        )}
        <div className="modal-buttons">
          {currentStep > 1 && (
            <button onClick={handlePrevStep}>Previous</button>
          )}
          {currentStep < formSteps.length ? (
            <button onClick={handleNextStep}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepModal;
