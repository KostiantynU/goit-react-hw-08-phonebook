import { NavigationMenuStyled } from './NavigationMenuStyled';
import { StyledNavLink } from 'components/SharedLayout/AppBarStyled';
function NavigationMenu() {
  return (
    <NavigationMenuStyled>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </NavigationMenuStyled>
  );
}
export default NavigationMenu;
