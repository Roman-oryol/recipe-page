import Title from './Title';
import { IngradientsList } from './styles';
import ListItemUl from '../ListItemUl';

function Ingredients({ ingredients = [] }) {
  return (
    <section>
      <Title>Ingredients</Title>
      <IngradientsList>
        {ingredients.map((ingredient, index) => (
          <ListItemUl key={index}>{ingredient}</ListItemUl>
        ))}
      </IngradientsList>
    </section>
  );
}

export default Ingredients;
