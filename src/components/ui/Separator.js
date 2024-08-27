import styled from 'styled-components';

const Separator = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  background-color: ${({ theme }) => theme.color.whiteCoffee};
  border: none;
`;

export default Separator;
