import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/authOperations';
import { UserMenuStyled, UserSpan } from './UserMenuStyled';
import { LogOutBtn } from 'components/SharedLayout/AppBarStyled';

function UserMenu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const userObj = useSelector(selectUser);
  return (
    <UserMenuStyled>
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
    </UserMenuStyled>
  );
}
export default UserMenu;
