import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header, Container } from './AppBarStyled';
import LogInMenu from 'components/LogInMenu/LogInMenu';
import NavigationMenu from 'components/NavigationMenu/NavigationMenu';
import UserMenu from 'components/UserMenu/UserMenu';

function SharedLayout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Header>
        {isLoggedIn && <NavigationMenu />}
        {!isLoggedIn && <LogInMenu />}
        {isLoggedIn && <UserMenu />}
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
