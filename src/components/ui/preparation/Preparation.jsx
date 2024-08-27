import { Section, Title, PreparationList } from './styles';
import ListItemUl from '../ListItemUl';
import ItemTitle from '../ItemTitle';

function Preparation({ preparation }) {
  const titles = Object.keys(preparation);

  return (
    <Section>
      <Title>Preparation time</Title>
      <PreparationList>
        {titles.map((title) => {
          return (
            <ListItemUl key={title}>
              <span>
                <ItemTitle>{title}:</ItemTitle> {preparation[title]}
              </span>
            </ListItemUl>
          );
        })}
      </PreparationList>
    </Section>
  );
}

export default Preparation;
