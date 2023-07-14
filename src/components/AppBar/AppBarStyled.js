import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { AddBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-radius: 10px;
  /* border: 1px solid #2ebf91; */
  /* transition: box-shadow 500ms linear 0ms, -webkit-box-shadow 500ms linear 0ms,
    -moz-box-shadow 500ms linear 0ms; */
  /* clip-path: polygon(2% 0%, 98% 0%, 100% 50%, 98% 100%, 2% 100%, 0% 50%); */
  /* &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) translateX(-110%) skew(20deg);
    pointer-events: none;
    width: 120%;
    height: 120%;
    background-image: linear-gradient(310deg, rgba(131, 96, 195, 0.3), rgb(46, 191, 145, 0.3));

    transition: 500ms;
  }
  &:hover::after {
    transform: translateY(-50%) translateX(-8%) skew(-20deg);
  } */
`;
export const NavigationMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;
export const LogInMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
export const StyledNavLink = styled(NavLink)`
  padding: 20px 25px;
  border-radius: 10px;
  transition: background 500ms linear 0ms, color 500ms linear 0ms, box-shadow 500ms linear 0ms;
  text-decoration: none;
  border: 1px solid rgb(46, 191, 145);
  color: black;
  &:hover {
    color: white;
    background: rgba(131, 96, 195, 0.74);
    box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
  }
  &.active {
    background: rgba(131, 96, 195, 0.74);
  }
`;
export const StyledUserLink = styled(StyledNavLink)`
  &:hover {
    background: ${props => (props.nav ? 'rgba(131, 96, 195, 0.75)' : 'rgba(46, 191, 145, 0.75)')};
    box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
  }
  &.active {
    background: ${props => (props.nav ? 'rgba(131, 96, 195, 0.75)' : 'rgba(46, 191, 145, 0.75)')};
  }
`;
export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const LogOutBtn = styled(AddBtn)`
  padding: 20px 25px;
  border-radius: 10px;
  transition: background 500ms linear 0ms, color 500ms linear 0ms, box-shadow 500ms linear 0ms;

  border: 1px solid rgb(46, 191, 145);
  &:hover {
    background: rgba(46, 191, 145, 0.75);
    box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
  }
`;
