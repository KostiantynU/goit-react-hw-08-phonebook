import {
  Header,
  NavigationMenu,
  LogInMenu,
  StyledNavLink,
  StyledUserLink,
  UserMenu,
  LogOutBtn,
} from './AppBarStyled';

export function AppBar() {
  return (
    <Header>
      <NavigationMenu>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </NavigationMenu>
      <LogInMenu>
        <StyledUserLink to="/register" nav="nav">
          Register
        </StyledUserLink>
        <StyledUserLink to="/login/" nav="">
          LogIn
        </StyledUserLink>
      </LogInMenu>
      <UserMenu>
        <p>Greetings User!</p>
        <LogOutBtn type="button">LogOut</LogOutBtn>
      </UserMenu>
    </Header>
  );
}
