import styled, { css } from 'styled-components';

const Figure = styled.figure`
  max-width: 656px;
  margin: 0;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;

  @media (min-width: 657px) {
    border-radius: 12px;
  }
`;

function DishImage({ src }) {
  return (
    <Figure>
      <Image src={src} alt="Dish image" />
    </Figure>
  );
}

export default DishImage;
