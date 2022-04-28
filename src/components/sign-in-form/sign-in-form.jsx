import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase';

import { useState } from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import './sign-in-form.scss';

const defaultFormState = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormState);
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password or email.');
          break;
        case 'auth/user-not-found':
          alert('User not found.');
          break;
        default:
          console.log(error.message);
      }
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          onChange={handleChange}
          name="email"
          label="email"
          value={email}
          required
        />

        <FormInput
          type="password"
          onChange={handleChange}
          name="password"
          label="password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
