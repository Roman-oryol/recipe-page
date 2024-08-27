import { Description, Title } from './styles';

function Header({ title, description }) {
  return (
    <header>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </header>
  );
}

export default Header;
