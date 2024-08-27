import Title from '../ingredients/Title';
import { List, ListItem } from './styles';
import ItemTitle from '../ItemTitle';

function Instructions({ instructions = [] }) {
  return (
    <section>
      <Title>Instructions</Title>
      <List>
        {instructions.map((instruction, index) => (
          <ListItem key={index}>
            <span>
              <ItemTitle>{instruction[0]}:</ItemTitle> {instruction[1]}
            </span>
          </ListItem>
        ))}
      </List>
    </section>
  );
}

export default Instructions;
