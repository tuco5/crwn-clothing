import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import './sign-up-form.scss';

const defaultFormState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormState);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(response.user, { displayName });

      resetForm();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Can´t create user, email already in use.');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <div className="sign-up">
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          label="Email"
          required
        />

        <FormInput
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          label="Password"
          required
        />

        <FormInput
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
        />

        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
}
