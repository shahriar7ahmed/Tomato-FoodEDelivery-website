import React, { useState } from "react";
import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems, food_list } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const cartItemsList = food_list.filter((item) => cartItems[item._id] > 0);
    if (cartItemsList.length === 0) {
      alert("Your cart is empty. Please add items to your cart first.");
      navigate("/");
      return;
    }

    if (validateForm()) {
      // Here you would typically send the order to your backend
      alert("Order placed successfully! Your order will be delivered soon.");
      // Reset form and navigate
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phoneNumber: ""
      });
      navigate("/");
    }
  };

  const cartItemsList = food_list.filter((item) => cartItems[item._id] > 0);
  const totalAmount = getTotalCartAmount();
  const deliveryFee = totalAmount === 0 ? 0 : 2;
  const finalTotal = totalAmount === 0 ? 0 : totalAmount + deliveryFee;

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <div>
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>
          <div>
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>
        </div>
        <div>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div>
          <input 
            type="text" 
            name="address"
            placeholder="Address" 
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? "error" : ""}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>
        <div className="multi-fields">
          <div>
            <input 
              type="text" 
              name="city"
              placeholder="City" 
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? "error" : ""}
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>
          <div>
            <input 
              type="text" 
              name="state"
              placeholder="State" 
              value={formData.state}
              onChange={handleChange}
              className={errors.state ? "error" : ""}
            />
            {errors.state && <span className="error-message">{errors.state}</span>}
          </div>
        </div>
        <div className="multi-fields">
          <div>
            <input 
              type="text" 
              name="zipCode"
              placeholder="Zip Code" 
              value={formData.zipCode}
              onChange={handleChange}
              className={errors.zipCode ? "error" : ""}
            />
            {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
          </div>
          <div>
            <input 
              type="text" 
              name="country"
              placeholder="Country" 
              value={formData.country}
              onChange={handleChange}
              className={errors.country ? "error" : ""}
            />
            {errors.country && <span className="error-message">{errors.country}</span>}
          </div>
        </div>
        <div>
          <input 
            type="text" 
            name="phoneNumber"
            placeholder="Phone Number" 
            value={formData.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? "error" : ""}
          />
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${finalTotal}</b>
            </div>
          </div>
          <button type="submit" disabled={cartItemsList.length === 0}>
            Proceed to payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
