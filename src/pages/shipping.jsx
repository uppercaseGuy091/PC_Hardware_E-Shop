import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styling/ShippingPage.css";

function ShippingBillingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    street: "",
    number: "",
    town: "",
    municipality: "",
    zipCode: "",
    radioButton: "",
    dropdownValue: "",
    termsAgreement: false
  });

  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();
  const [extraAmount, setExtraAmount] = useState(0);
  const queryParams = new URLSearchParams(location.search);
  const cartItems = JSON.parse(queryParams.get("cartItems")) || [];
  const totalSum = queryParams.get("totalSum") || 0;
  const isCartEmpty = cartItems.length === 0;
  const [checkboxClicked, setCheckboxClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let fieldValue = value;
    let newExtraAmount = extraAmount;

    if (name === "dropdownValue" && formData.radioButton === "option2") {
      if (value === "option1") {
        newExtraAmount = 5;
      } else if (value === "option2") {
        newExtraAmount = 8;
      }

      setFormData((prevData) => ({
        ...prevData,
        dropdownValue: value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: fieldValue
      }));
    }

    if (name === "radioButton") {
      if (fieldValue === "option1") {
        newExtraAmount = 0;
        setFormData((prevData) => ({
          ...prevData,
          radioButton: fieldValue,
          dropdownValue: ""
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          radioButton: fieldValue
        }));
      }
    }

    setExtraAmount(newExtraAmount);

    if (name === "lastName") {
      validateLastName(fieldValue);
    } else if (name === "email") {
      validateEmail(fieldValue);
    } else if (name === "phoneNumber") {
      validatePhoneNumber(fieldValue);
    } else if (name === "number") {
      validateNumber(fieldValue);
    } else if (name === "zipCode") {
      validateZipCode(fieldValue);
    }
  };

  const validateLastName = (lastName) => {
    const lastNameRegex = /^[A-Za-z]+$/;
    const isValidLastName = lastNameRegex.test(lastName);

    if (!isValidLastName) {
      setLastNameError("Please enter a valid last name.");
    } else {
      setLastNameError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^[0-9]{10}$/;
    const isValidPhoneNumber = phoneNumberRegex.test(phoneNumber);

    if (!isValidPhoneNumber) {
      setPhoneNumberError("Please enter a valid 10-digit phone number.");
    } else {
      setPhoneNumberError("");
    }
  };

  const validateNumber = (number) => {
    const numberRegex = /^\d+(?:-\d+)?$/;
    const isValidNumber = numberRegex.test(number);

    if (!isValidNumber) {
      setNumberError("Please enter a valid number.");
    } else {
      setNumberError("");
    }
  };

  const validateZipCode = (zipCode) => {
    const zipCodeRegex = /^\d{5}$/;
    const isValidZipCode = zipCodeRegex.test(zipCode);

    if (!isValidZipCode) {
      setZipCodeError("Please enter a valid 5-digit zip code.");
    } else {
      setZipCodeError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formData);

    window.location.href = "/Final";
  };

  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      termsAgreement: !formData.termsAgreement
    }));
    setCheckboxClicked(!checkboxClicked);
  };

  return (
    <div className="container">
      <h1>Shipping & Billing Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              pattern="[A-Za-z]+"
              title="Please enter only letters for the last name."
              required
            />
            {lastNameError && (
              <p style={{ color: "red" }} className="error-message">
                {lastNameError}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              placeholder="ex. jon@doe.com"
              required
            />
            {emailError && (
              <p style={{ color: "red" }} className="error-message">
                {emailError}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number."
              required
            />
            {phoneNumberError && (
              <p style={{ color: "red" }} className="error-message">
                {phoneNumberError}
              </p>
            )}
          </div>

          <div className="only-gr">
            <p>
              Currently, we only ship in Greece. Stay tuned for international
              shippings!
            </p>
          </div>

          <div>
            <label htmlFor="street">Street:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              pattern="\d+(?:-\d+)?"
              required
            />
            {numberError && (
              <p style={{ color: "red" }} className="error-message">
                {numberError}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="town">Town:</label>
            <input
              type="text"
              id="town"
              name="town"
              value={formData.town}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="municipality">Municipality:</label>
            <input
              type="text"
              id="municipality"
              name="municipality"
              value={formData.municipality}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="zipCode">ZIP Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              pattern="^\d{5}$"
              required
            />
            {zipCodeError && (
              <p style={{ color: "red" }} className="error-message">
                {zipCodeError}
              </p>
            )}
          </div>
        </div>
        <div className="radio-dropdown">
          <div className="radio-group">
            <label>Select pickup method:</label>
            <div>
              <label htmlFor="radioOption1">
                <input
                  type="radio"
                  id="radioOption1"
                  name="radioButton"
                  value="option1"
                  checked={formData.radioButton === "option1"}
                  onChange={handleChange}
                  required
                />
                In-store pickup
              </label>
            </div>
            <div>
              <label htmlFor="radioOption2">
                <input
                  type="radio"
                  id="radioOption2"
                  name="radioButton"
                  value="option2"
                  checked={formData.radioButton === "option2"}
                  onChange={handleChange}
                  required
                />
                Delivery at your home
              </label>
            </div>
          </div>
          {formData.radioButton === "option2" && (
            <div className="dropdown-menu">
              <label htmlFor="dropdown">Select place of residence:</label>
              <select
                id="dropdown"
                name="dropdownValue"
                value={formData.dropdownValue}
                onChange={handleChange}
                required={formData.radioButton === "option2"}
              >
                <option value="">Select an option</option>
                <option value="option1">Mainland Greece (+5€)</option>
                <option value="option2">Greek Islands (+8€)</option>
              </select>
              {formData.radioButton === "option2" && !formData.dropdownValue && (
                <p style={{ color: "red" }} className="error-message">
                  Please select a place of residence.
                </p>
              )}
            </div>
          )}
        </div>
        <div className="total-sum">
          {isCartEmpty ? (
            <p>Cart empty</p>
          ) : (
            <p>Total Sum: €{parseFloat(totalSum) + extraAmount}</p>
          )}
        </div>

        <div>
          <label htmlFor="termsAgreement">
            <input
              type="checkbox"
              id="termsAgreement"
              name="termsAgreement"
              checked={formData.termsAgreement}
              onChange={handleCheckboxChange}
              required
            />
            I agree to the terms and conditions
          </label>
          {isSubmitted && !formData.termsAgreement && (
            <p style={{ color: "red" }} className="error-message">
              Please agree to the terms and conditions.
            </p>
          )}
        </div>
        <Link to="/cart" className="previous-button">
          Back to my cart
        </Link>
        <button className="submitOrder-btn" type="submit">
          Submit order
        </button>
      </form>
    </div>
  );
}

export default ShippingBillingPage;
