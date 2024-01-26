import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { AddBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';
export const Container = styled.div`
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
`;
export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-radius: 10px;
`;
export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 20px 25px;
  width: ${props => (props.width ? `${props.width}` : '')};
  margin-left: ${props => (props.marginleft ? 'auto' : '0rem')};
  margin-right: ${props => (props.marginright ? 'auto' : '0rem')};
  transition: background 500ms linear 0ms, color 500ms linear 0ms, box-shadow 500ms linear 0ms;
  text-decoration: none;
  border: 1px solid rgb(46, 191, 145);
  border-radius: 10px;
  color: inherit;
  &:hover {
    color: white;
    background: rgba(131, 96, 195, 0.74);
    box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
  }
  &.active {
    box-shadow: 0px 0px 7px 0px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 7px 0px rgba(255, 255, 255, 0.75);
  }
`;
export const StyledUserLink = styled(StyledNavLink)`
  &:hover {
    background: ${props => (props.nav ? 'rgba(131, 96, 195, 0.75)' : 'rgba(46, 191, 145, 0.75)')};
    box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
  }
  /* &.active {
    background: ${props => (props.nav ? 'rgba(131, 96, 195, 0.75)' : 'rgba(46, 191, 145, 0.75)')};
  } */
`;
export const LogOutBtn = styled(AddBtn)`
  padding: 20px 25px;
  border-radius: 10px;
  transition: background 500ms linear 0ms, color 500ms linear 0ms, box-shadow 500ms linear 0ms;
  color: inherit;
  border: 1px solid rgb(46, 191, 145);
  &:hover {
    background: rgba(46, 191, 145, 0.75);
    box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -webkit-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
    -moz-box-shadow: 0px 0px 3px 2px rgba(131, 96, 195, 0.75);
  }
`;
