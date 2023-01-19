import SignInForm from '../../SignInForm/SignInForm';
import SignUpForm from '../../SignUpForm/SignUpForm';
import './Authentication.scss';

function Authentication() {
  return (
    <div className='Authentication'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
