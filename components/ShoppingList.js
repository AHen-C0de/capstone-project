import styled from "styled-components";

import ListItem from "./ListItem";

export default function ShoppingList({ items, onToggle }) {
  return (
    <div>
      <ul>
        {items
          .filter((item) => !item.checked)
          .map(({ id, name, checked }) => (
            <ListItem
              key={id}
              id={id}
              text={name}
              isChecked={checked}
              onToggle={onToggle}
            />
          ))}
      </ul>
      <ul>
        {items
          .filter((item) => item.checked)
          .map(({ id, name, checked }) => (
            <ListItem
              key={id}
              id={id}
              text={name}
              isChecked={checked}
              onToggle={onToggle}
            />
          ))}
      </ul>
    </div>
  );
}
