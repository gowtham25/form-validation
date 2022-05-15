import { useState } from 'react';
import { Input } from './Components/Input';
import * as Styled from './styles';
import './App.css';

export const App = () => {
  const [formValues, setFormValues] = useState({ name: '', age: '', email: '', phone: '' });
  const [formErrors, setFormErrors] = useState({ name: '', age: '', email: '', phone: '' });
  const [finalFormValue, setFinalFormValue] = useState();

  // validate fields when submit
  const validateFormOnSubmit = () => {
    const { name, age, email, phone } = formValues;
    const currentError = {}
    let isValid = true;

    if (!name) {
      currentError.name = 'Name is required'
      isValid = false;
    }
    if (name && (name.length < 3 || name.length > 50)) {
      currentError.name = 'Name must contain between 3 and 50 characters'
      isValid = false;
    }

    if (!email) {
      currentError.email = 'Email is required'
      isValid = false;
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      currentError.email = 'Email format must be as example@mail.com'
      isValid = false;
    }

    if (!age) {
      currentError.age = 'Age is required'
      isValid = false;
    }
    if (age && (isNaN(age) || age < 1 || age > 100)) {
      currentError.age = 'Enter the valid age';
      isValid = false;
    }

    if (!phone) {
      currentError.phone = 'Phone number is required';
      isValid = false;
    }
    if (phone && isNaN(phone) && !/^[0]?[789]\d{9}$/.test(phone)) {
      currentError.phone = 'Enter the valid phone number';
      isValid = false;
    }
    setFormErrors(currentError);
    return isValid;
  }

  // validate the field on form filling time
  const handleOnInputChange = (event, key) => {
    const fieldValue = event.target.value;
    let errorMessage;

    if (fieldValue && key === 'name' && (fieldValue.length < 3 || fieldValue.length > 50)) {
      errorMessage = 'Name must contain between 3 and 50 characters'
    }

    if (fieldValue && key === 'email' && !/\S+@\S+\.\S+/.test(fieldValue)) {
      errorMessage = 'Email format must be as example@mail.com'
    }
    
    if (fieldValue && key === 'age' && (isNaN(fieldValue) || fieldValue < 1 || fieldValue > 100)) {
      errorMessage = 'Enter the valid age';
    }

    if (fieldValue && key === 'phone' && isNaN(fieldValue) && !/^[0]?[789]\d{9}$/.test(fieldValue)) {
      errorMessage = 'Enter the valid phone number';
    }

    setFormErrors({...formErrors, [key]: errorMessage});
    setFormValues({ ...formValues, [key]: fieldValue })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFormOnSubmit();
    if (!isValid) {
      setFinalFormValue();
      return false;
    }
    setFinalFormValue(formValues);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Styled.FormContainer>
          <Input
            type='text'
            value={formValues.name}
            onChange={(e) => handleOnInputChange(e, 'name')}
            title='Name'
            errorMessage={formErrors.name}
            isMandatory={true}
          />
          <Input
            type='text'
            value={formValues.age}
            onChange={(e) => handleOnInputChange(e, 'age')}
            title='Age'
            errorMessage={formErrors.age}
            isMandatory={true}
          />
          <Input
            type='text'
            value={formValues.email}
            onChange={(e) => handleOnInputChange(e, 'email')}
            title='Email'
            errorMessage={formErrors.email}
            isMandatory={true}
          />
          <Input
            type='text'
            value={formValues.phone}
            onChange={(e) => handleOnInputChange(e, 'phone')}
            title='Phone'
            errorMessage={formErrors.phone}
            isMandatory={true}
          />
        </Styled.FormContainer>
        <Styled.Button type='submit'>Submit</Styled.Button>
      </form>
      <Styled.LabelContainer>
        <Styled.Title>Form Values</Styled.Title>
        <Styled.CodePrint>{JSON.stringify(finalFormValue, null, '\t')}</Styled.CodePrint>
      </Styled.LabelContainer>
    </div>
  );
}