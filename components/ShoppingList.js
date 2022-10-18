import styled from "styled-components";

import ListItem from "./ListItem";

export default function ShoppingList() {
  return (
    <div>
      <ul>
        {" "}
        {/*unchecked items */}
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
      <ol>
        {" "}
        {/*checked items */}
        <ListItem />
        <ListItem />
      </ol>
    </div>
  );
}
