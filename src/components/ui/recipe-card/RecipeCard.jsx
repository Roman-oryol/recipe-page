import { Article, TextContent } from './styles';
import DishImage from '../dish-image/DishImage';
import image from '../../../assets/images/image-omelette.jpeg';
import Header from '../header/Header';
import Preparation from '../preparation/Preparation';
import Ingredients from '../ingredients/Ingredients';
import Separator from '../Separator';
import Instructions from '../instructions/Instructions';
import Nutrition from '../nutrition/Nutrition';

function RecipeCard({ recipe }) {
  return (
    <Article>
      <DishImage src={image} />
      <TextContent>
        <Header title={recipe.title} description={recipe.description} />
        <Preparation preparation={recipe.preparation} />
        <Ingredients ingredients={recipe.ingredients} />
        <Separator />
        <Instructions instructions={recipe.instructions} />
        <Separator />
        <Nutrition nutrition={recipe.nutrition} />
      </TextContent>
    </Article>
  );
}

export default RecipeCard;
