import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingList from "./ShoppingList";

const shoppingListItems = [
  {
    id: "a",
    name: "Brot",
    checked: false,
  },
  {
    id: "b",
    name: "Bananen",
    checked: false,
  },
  {
    id: "c",
    name: "Milch",
    checked: true,
  },
];

describe("ShoppingList", () => {
  it("renders all items from current shopping list", () => {
    render(<ShoppingList listItems={shoppingListItems} />);

    const shoppingItems = screen.getAllByRole("listitem");
    const itemBrot = screen.getByText("Brot");

    expect(shoppingItems).toHaveLength(3);
    expect(itemBrot).toBeInTheDocument();
  });

  it("calls callback, when clicking item checkbox", async () => {
    const checkBoxCallback = jest.fn();
    render(
      <ShoppingList
        listItems={shoppingListItems}
        onToggleItemChecked={checkBoxCallback}
      />
    );

    const itemCheckBox = screen.getAllByRole("button")[0];

    await userEvent.click(itemCheckBox);

    expect(checkBoxCallback).toHaveBeenCalledTimes(1);
  });
});
