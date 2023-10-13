import React, { useState } from "react";
import {
    FormWrapper,
    FormField,
    ModernButton,
    ErrorMessage
} from "./Button.styles"; // Import your styled components file

const ServiceForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        vehicleType: "car",
        service: "carwash",
        otherService: ""
    });
    const [showOtherInput, setShowOtherInput] = useState(false);
    const [formError, setFormError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleServiceChange = (e) => {
        const selectedService = e.target.value;
        setShowOtherInput(selectedService === "other");
        setFormData({
            ...formData,
            service: selectedService
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Reset form data after successful submission
                setFormData({
                    name: "",
                    phoneNumber: "",
                    email: "",
                    vehicleType: "car",
                    service: "carwash",
                    otherService: ""
                });
                console.log('Form submitted successfully!');
            } else {
                console.error('Failed to submit form data.');
                setFormError("Failed to submit form data. Please try again later.");
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            setFormError("An error occurred while submitting the form. Please try again later.");
        }
    };

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                <FormField>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </FormField>
                <FormField>
                    <label>Phone Number:</label>
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
                </FormField>
                <FormField>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </FormField>
                <FormField>
                    <label>Vehicle Type:</label>
                    <select name="vehicleType" value={formData.vehicleType} onChange={handleInputChange} required>
                        <option value="car">Car</option>
                        <option value="scooter">Scooter</option>
                        <option value="bike">Bike</option>
                    </select>
                </FormField>
                <FormField>
                    <label>Choose Services:</label>
                    <select name="service" value={formData.service} onChange={handleServiceChange} required>
                        <option value="carwash">Carwash</option>
                        <option value="general">General</option>
                        <option value="oiling">Oiling</option>
                        <option value="suspension">Suspension</option>
                        <option value="battery">Battery</option>
                        <option value="tyre">Tyre</option>
                        <option value="other">Other</option>
                    </select>
                    {showOtherInput && (
                        <div className={`other-service-input`}>
                            <label>Type of Service:</label>
                            <input type="text" name="otherService" value={formData.otherService} onChange={handleInputChange} />
                        </div>
                    )}
                </FormField>
                <ModernButton type="submit">Submit</ModernButton>
            </form>
            {formError && <ErrorMessage>{formError}</ErrorMessage>}
        </FormWrapper>
    );
};

export default ServiceForm;
