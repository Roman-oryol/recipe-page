import styled, { css } from 'styled-components';

const Figure = styled.figure`
  max-width: 656px;
  margin: 0;
`;

const Image = styled.img.attrs(({ src }) => {
  src: src;
})`
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
      <Image src={src} />
    </Figure>
  );
}

export default DishImage;
