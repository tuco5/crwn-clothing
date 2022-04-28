import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase';

import SignUpForm from '../../components/sign-up-form/sign-up-form';

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
}
