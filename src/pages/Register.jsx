import RegisterFormStyled from 'components/RegisterForm/RegisterForm';
import { StyledNavLink } from 'components/SharedLayout/AppBarStyled';

const RegisterPage = () => {
  return (
    <>
      <RegisterFormStyled />
      <StyledNavLink to="/login" marginleft="auto" marginright="auto" width="120px">
        Or logIn!
      </StyledNavLink>
    </>
  );
};
export default RegisterPage;
