import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingListEditor from "./ShoppingListEditor";

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
    checked: false,
  },
  {
    id: "c",
    item_id: "3",
    name: "Nudeln",
    checked: false,
  },
];

describe("edit page", () => {
  it("renders all items from current shopping list and their delete button", () => {
    render(<ShoppingListEditor items={shoppingListItems} />);

    const shoppingItems = screen.getAllByRole("listitem");
    const deleteButtons = screen.getAllByText("Löschen");
    const itemBrot = screen.getByText(/Brot/i);

    expect(shoppingItems).toHaveLength(3);
    expect(deleteButtons).toHaveLength(3);
    expect(itemBrot).toBeInTheDocument();
  });

  it("calls callback, when clicking delete button of an item", async () => {
    const deleteCallback = jest.fn();
    render(
      <ShoppingListEditor items={shoppingListItems} onDelete={deleteCallback} />
    );

    const deleteButton = screen.getAllByText(/Löschen/i)[0];

    await userEvent.click(deleteButton);

    expect(deleteCallback).toHaveBeenCalledTimes(1);
  });
});
