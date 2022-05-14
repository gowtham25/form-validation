import styled from 'styled-components';

export const FormRow = styled.div`
    display: flex;
    align-items: baseline;
`;

export const Title = styled.label`
    margin-right: 20px;
    font-family: cursive;
`;

export const Input = styled.input`
    width: 200px;
    padding: 5px;
    border-radius: 5px;
    font-family: cursive;
`;

export const ErrorMessage = styled.span`
    font-size: 10px;
    font-family: fantasy;
    color: red;
    font-weight: 800;
`;

export const FieldCol = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;