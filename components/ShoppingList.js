import styled from "styled-components";

import ListItem from "./ListItem";

export default function ShoppingList({ items }) {
  console.log(items);

  return (
    <div>
      <ul>
        {items
          .filter((item) => !item.checked)
          .map(({ id, name }) => (
            <ListItem key={id} name={name} />
          ))}
      </ul>
      <ol>
        {items
          .filter((item) => item.checked)
          .map(({ id, name }) => (
            <ListItem key={id} name={name} />
          ))}
      </ol>
    </div>
  );
}
