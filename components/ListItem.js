export default function ListItem({ name }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {name}
      </label>
    </li>
  );
}
