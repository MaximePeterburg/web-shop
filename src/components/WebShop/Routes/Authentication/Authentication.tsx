import SignInForm from '../../SignInForm/SignInForm';
import SignUpForm from '../../SignUpForm/SignUpForm';
import { AuthenticationContainer } from './Authentication.styles';

function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}

export default Authentication;
