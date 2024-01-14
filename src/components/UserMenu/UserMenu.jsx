import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/authOperations';
import { UserMenuStyled, UserSpan } from './UserMenuStyled';
import { LogOutBtn } from 'components/SharedLayout/AppBarStyled';
import {
  selectIsLoggedInAuth,
  selectUserAuth,
} from 'redux/authAndContactsSlice/authAndContactsSelectors';

function UserMenu() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = useSelector(selectIsLoggedInAuth);
  const dispatch = useDispatch();
  // const userObj = useSelector(selectUser);
  const userObj = useSelector(selectUserAuth);
  return (
    <UserMenuStyled>
      {isLoggedIn ? (
        <p>
          Greetings <UserSpan>{userObj.userName}</UserSpan>!
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
