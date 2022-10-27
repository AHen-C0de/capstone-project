import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingList from "./ShoppingList";

const shoppingListItems = [
  {
    id: "a",
    item_id: "1",
    name: "Brot",
    checked: false,
  },
  {
    id: "b",
    item_id: "2",
    name: "Butter",
    checked: true,
  },
  {
    id: "c",
    item_id: "3",
    name: "Nudeln",
    checked: false,
  },
];

describe("ShoppingList", () => {
  it("renders all items from current shopping list", () => {
    render(<ShoppingList items={shoppingListItems} />);

    const shoppingItems = screen.getAllByRole("listitem");
    const itemBrot = screen.getByText(/Brot/i);

    expect(shoppingItems).toHaveLength(3);
    expect(itemBrot).toBeInTheDocument();
  });

  it("calls callback, when clicking item checkbox", async () => {
    const checkBoxCallback = jest.fn();
    render(
      <ShoppingList
        items={shoppingListItems}
        onToggleItemChecked={checkBoxCallback}
      />
    );

    const itemCheckBox = screen.getAllByRole("checkbox")[0];

    await userEvent.click(itemCheckBox);

    expect(checkBoxCallback).toHaveBeenCalledTimes(1);
  });
});
