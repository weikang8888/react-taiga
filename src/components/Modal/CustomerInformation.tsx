import React from "react";
import "../../pages/Contact/contact.css";

const CustomerInformation = ({ data, handleChange }) => {
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
                  className="form-control"
                  placeholder="Name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  className="form-control"
                  placeholder="Phone"
                  value={data.phone_number}
                  onChange={handleChange}
                  required
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerInformation;
