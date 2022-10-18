import styled from "styled-components";

import ListItem from "./ListItem";

export default function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items
          .filter((item) => !item.checked)
          .map(({ id, name, checked }) => (
            <ListItem key={id} text={name} isChecked={checked} />
          ))}
      </ul>
      <ol>
        {items
          .filter((item) => item.checked)
          .map(({ id, name, checked }) => (
            <ListItem key={id} text={name} isChecked={checked} />
          ))}
      </ol>
    </div>
  );
}
