import React from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className="error-message">Error: {message}</p>; // Display the error message
};


export default ErrorMessage;