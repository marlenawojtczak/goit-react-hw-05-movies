import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  align-items: center;

  input[type='text'] {
    margin-left: 20px;
    flex: 0.3;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button[type='submit'] {
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
