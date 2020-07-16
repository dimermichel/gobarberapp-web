import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => (
  <Container>
    <Toast hasDescription>
      <FiAlertCircle size={20} />
      <div>
        <strong>There was an error</strong>
        <p>There is no connection with the server</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="success" hasDescription={false}>
      <FiAlertCircle size={20} />
      <div>
        <strong>There was an error</strong>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="error" hasDescription>
      <FiAlertCircle size={20} />
      <div>
        <strong>There was an error</strong>
        <p>There is no connection with the server</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  </Container>
);

export default ToastContainer;
