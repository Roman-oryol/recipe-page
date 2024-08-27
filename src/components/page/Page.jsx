import CardWrapper from '../wrapper/CardWrapper';
import RecipeCard from '../ui/recipe-card/RecipeCard';
import recipe from '../../mocks/recipe';

function Page() {
  return (
    <main>
      <CardWrapper>
        <RecipeCard recipe={recipe} />
      </CardWrapper>
    </main>
  );
}

export default Page;
