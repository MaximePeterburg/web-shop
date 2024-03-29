import { AuthError, AuthErrorCodes } from 'firebase/auth';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../../store/user/user.action';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { SignUpFormContainer } from './SignUpForm.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};
function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpFormContainer>
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
        <FormInput
          type='email'
          onChange={handleChange}
          required
          label='Email'
          name='email'
          value={email}
        />
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
    </SignUpFormContainer>
  );
}
export default SignUpForm;
