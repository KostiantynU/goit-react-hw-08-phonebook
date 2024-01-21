import styled from 'styled-components';
export const PhoneBookListItem = styled.li`
  position: relative;

  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-columns: 3.5fr 1fr 0.1fr 1.7fr 0.25fr 0.5fr 0.5fr;
  grid-gap: 5px;
  align-items: center;
  padding: 0.2rem;
  margin: 0.2rem;
  border: 1px solid rgb(46, 191, 145);
  border-radius: 8px;

  &:hover {
    background-image: linear-gradient(155deg, rgba(131, 96, 195, 0.2), rgba(46, 191, 145, 0.3));
  }
  /* overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) translateX(-110%) skew(-30deg);
    width: 120%;
    height: 120%;
    background-image: linear-gradient(155deg, rgba(131, 96, 195, 0.2), rgba(46, 191, 145, 0.3));
    transition: 500ms;
    pointer-events: none;
  }
  &:hover::after {
    transform: translateY(-50%) translateX(-8%) skew(-30deg);
  } */
`;
export const NameSpan = styled.span`
  font-weight: 600;
`;
export const TelSpan = styled(NameSpan)`
  font-weight: 500;
`;
export const DoubleDotSpan = styled.span`
  font-weight: 600;
  justify-self: center;
  align-self: center;
`;
