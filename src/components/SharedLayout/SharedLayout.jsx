import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  NavigationMenu,
  LogInMenu,
  StyledNavLink,
  StyledUserLink,
  UserMenu,
  LogOutBtn,
  Container,
} from './AppBarStyled';

function SharedLayout() {
  return (
    <Container>
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
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}

export default SharedLayout;
