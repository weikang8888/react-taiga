import React from "react";
import "./modal.css";

const TyreService = ({ data, handleChange, errors }) => {
  return (
    <>
      <div className="contact-area">
        <div className="contact-item contact-right">
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div
                className={`form-group form-control border ${
                  data.servicesType.includes("Pressure Check") ? "checked" : ""
                }${errors.servicesType ? "error-border" : ""}`}>
                <input
                  type="checkbox"
                  name="servicesType"
                  id="pressureCheckCheckbox"
                  value="Pressure Check"
                  checked={data.servicesType.includes("Pressure Check")}
                  onChange={handleChange}
                />
                <label
                  htmlFor="pressureCheckCheckbox"
                  className="form-check-label">
                  Pressure Check
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div
                className={`form-group form-control border ${
                  data.servicesType.includes("Suspension Service")
                    ? "checked"
                    : ""
                }${errors.servicesType ? "error-border" : ""}`}>
                <input
                  type="checkbox"
                  name="servicesType"
                  id="suspensionServiceCheckbox"
                  className=""
                  value="Suspension Service"
                  checked={data.servicesType.includes("Suspension Service")}
                  onChange={handleChange}
                />
                <label
                  htmlFor="suspensionServiceCheckbox"
                  className="form-check-label">
                  Suspension Service
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div
                className={`form-group form-control border ${
                  data.servicesType.includes("Wheel Alignment") ? "checked" : ""
                }${errors.servicesType ? "error-border" : ""}`}>
                <input
                  type="checkbox"
                  name="servicesType"
                  id="wheelAlignmentCheckbox"
                  value="Wheel Alignment"
                  checked={data.servicesType.includes("Wheel Alignment")}
                  onChange={handleChange}
                />
                <label
                  htmlFor="wheelAlignmentCheckbox"
                  className="form-check-label">
                  Wheel Alignment
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div
                className={`form-group form-control border ${
                  data.servicesType.includes("Brake Service") ? "checked" : ""
                }${errors.servicesType ? "error-border" : ""}`}>
                <input
                  type="checkbox"
                  name="servicesType"
                  id="brakeServiceCheckbox"
                  value="Brake Service"
                  checked={data.servicesType.includes("Brake Service")}
                  onChange={handleChange}
                />
                <label
                  htmlFor="brakeServiceCheckbox"
                  className="form-check-label">
                  Brake Service
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div
                className={`form-group form-control border ${
                  data.servicesType.includes("Tyre Balancing") ? "checked" : ""
                }${errors.servicesType ? "error-border" : ""}`}>
                <input
                  type="checkbox"
                  name="servicesType"
                  id="tyreBalancingCheckbox"
                  value="Tyre Balancing"
                  checked={data.servicesType.includes("Tyre Balancing")}
                  onChange={handleChange}
                />
                <label
                  htmlFor="tyreBalancingCheckbox"
                  className="form-check-label">
                  Tyre Balancing
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div
                className={`form-group form-control border ${
                  data.servicesType.includes("Engine Oil Service")
                    ? "checked"
                    : ""
                }${errors.servicesType ? "error-border" : ""}`}>
                <input
                  type="checkbox"
                  name="servicesType"
                  id="engineOilServiceCheckbox"
                  value="Engine Oil Service"
                  checked={data.servicesType.includes("Engine Oil Service")}
                  onChange={handleChange}
                />
                <label
                  htmlFor="engineOilServiceCheckbox"
                  className="form-check-label">
                  Engine Oil Service
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TyreService;
