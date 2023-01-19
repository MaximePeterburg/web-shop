import React, { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../../utils/Firebase/Firebase.utils';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignUpForm.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='SignUpForm-container'>
      <h2>Don't have an account? </h2>
      <span>Sign UP with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          onChange={handleChange}
          required
          name='displayName'
          label='Display Name'
          value={displayName}
        />

        <FormInput type='email' onChange={handleChange} required label='Email' name='email' value={email} />

        <FormInput
          type='password'
          label='Password'
          onChange={handleChange}
          required
          name='password'
          value={password}
        />

        <FormInput
          type='password'
          onChange={handleChange}
          required
          label='Confirm Password'
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
