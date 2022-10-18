import styled from "styled-components";

import ListItem from "./ListItem";

export default function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items
          .filter((item) => !item.checked)
          .map(({ id, name, checked }) => (
            <ListItem key={id} name={name} checked={checked} />
          ))}
      </ul>
      <ol>
        {items
          .filter((item) => item.checked)
          .map(({ id, name, checked }) => (
            <ListItem key={id} name={name} checked={checked} />
          ))}
      </ol>
    </div>
  );
}
