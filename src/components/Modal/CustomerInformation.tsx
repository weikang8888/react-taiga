import React from "react";
import "../../pages/Contact/contact.css";

const CustomerInformation = ({ data, handleChange, errors }) => {
  return (
    <>
      <div className="contact-area">
        <div className="contact-item contact-right">
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`form-control ${
                    errors.name ? "error-border" : ""
                  }`}
                  placeholder="Name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`form-control ${
                    errors.email ? "error-border" : ""
                  }`}
                  placeholder="Email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  className={`form-control ${
                    errors.phone_number ? "error-border" : ""
                  }`}
                  placeholder="Phone"
                  value={data.phone_number}
                  onChange={handleChange}
                  required
                />
                {errors.phone_number && (
                  <div className="error-message">{errors.phone_number}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerInformation;
