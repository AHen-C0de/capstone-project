export default function ListItem({ name, checked }) {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={checked} />
        {name}
      </label>
    </li>
  );
}
