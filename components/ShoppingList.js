import styled from "styled-components";

export default function ShoppingList() {
  return (
    <div>
      <ul>
        {" "}
        {/*unchecked items */}
        <li>Bananen</li>
        <li>Brot</li>
        <li>Marmelade</li>
      </ul>
      <ol>
        {" "}
        {/*checked items */}
        <li>Milch</li>
        <li>Tomaten</li>
      </ol>
    </div>
  );
}
