import styled from "styled-components";
export const ModernButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
export const FormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const FormField = styled.div`
  margin-bottom: 20px;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
  }

  input,
  select {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s, box-shadow 0.3s;
    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 10px rgba(0, 123, 255, 0.2);
      outline: none;
    }
  }

  .other-service-input {
    display: ${(props) => (props.showOtherInput ? "block" : "none")};
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #ff5757;
  font-size: 14px;
  margin-top: 10px;
`;
