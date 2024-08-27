import Title from '../ingredients/Title';
import {
  Info,
  CharacteristicsTable,
  TableRow,
  Characteristic,
  Value,
} from './styles';

function Nutrition({ nutrition }) {
  const characteristics = Object.keys(nutrition);

  return (
    <section>
      <Title>Nutrition</Title>
      <Info>
        The table below shows nutritional values per serving without the
        additional fillings.
      </Info>
      <CharacteristicsTable>
        {characteristics.map((characteristic, index) => (
          <TableRow key={index}>
            <Characteristic>{characteristic}</Characteristic>
            <Value>{nutrition[characteristic]}</Value>
          </TableRow>
        ))}
      </CharacteristicsTable>
    </section>
  );
}

export default Nutrition;
