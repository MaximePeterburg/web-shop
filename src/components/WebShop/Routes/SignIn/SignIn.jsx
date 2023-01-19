import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../../../utils/Firebase/Firebase.utils';
import SignUpForm from '../../SignUpForm/SignUpForm';

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
