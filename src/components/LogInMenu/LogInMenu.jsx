import { LogInMenuStyled } from './LogInMenuStyled';
import { StyledUserLink } from 'components/SharedLayout/AppBarStyled';
function LogInMenu() {
  return (
    <>
      <LogInMenuStyled>
        <StyledUserLink to="/register" nav="nav">
          Register
        </StyledUserLink>
        <StyledUserLink to="/login/" nav="">
          LogIn
        </StyledUserLink>
      </LogInMenuStyled>
    </>
  );
}

export default LogInMenu;
