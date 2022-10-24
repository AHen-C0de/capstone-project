export default function InputDropDown({ optionElements }) {
  return (
    <ul>
      {optionElements.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
