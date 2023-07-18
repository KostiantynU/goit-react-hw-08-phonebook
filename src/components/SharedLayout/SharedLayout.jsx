import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  Header,
  NavigationMenu,
  LogInMenu,
  StyledNavLink,
  StyledUserLink,
  UserMenu,
  LogOutBtn,
  Container,
  UserSpan,
} from './AppBarStyled';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

function SharedLayout() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userObj = useSelector(selectUser);

  return (
    <Container>
      <Header>
        {isLoggedIn && (
          <NavigationMenu>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          </NavigationMenu>
        )}
        {!isLoggedIn && (
          <LogInMenu>
            <StyledUserLink to="/register" nav="nav">
              Register
            </StyledUserLink>
            <StyledUserLink to="/login/" nav="">
              LogIn
            </StyledUserLink>
          </LogInMenu>
        )}
        {isLoggedIn && (
          <UserMenu>
            {isLoggedIn ? (
              <p>
                Greetings <UserSpan>{userObj.name}</UserSpan>!
              </p>
            ) : (
              <p>Greetings!</p>
            )}
            <LogOutBtn type="button" onClick={() => dispatch(logOut())} disabled={!isLoggedIn}>
              LogOut
            </LogOutBtn>
          </UserMenu>
        )}
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
