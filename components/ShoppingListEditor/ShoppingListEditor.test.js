import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingListEditor from "./ShoppingListEditor";

const shoppingListItems = [
  {
    id: "a",
    name: "Brot",
  },
  {
    id: "b",
    name: "Bananen",
  },
  {
    id: "c",
    name: "Milch",
  },
];

describe("ShoppingListEditor", () => {
  it("renders all items from current shopping list and their delete button", () => {
    render(<ShoppingListEditor listItems={shoppingListItems} />);

    const shoppingItems = screen.getAllByRole("listitem");
    const deleteButtons = screen.getAllByLabelText("lösche Item");
    const itemBrot = screen.getByText("Brot");

    expect(shoppingItems).toHaveLength(3);
    expect(deleteButtons).toHaveLength(3);
    expect(itemBrot).toBeInTheDocument();
  });

  it("calls callback, when clicking delete button of an item", async () => {
    const deleteCallback = jest.fn();
    render(
      <ShoppingListEditor
        listItems={shoppingListItems}
        onDelete={deleteCallback}
      />
    );

    const deleteButton = screen.getAllByLabelText("lösche Item")[0];

    await userEvent.click(deleteButton);

    expect(deleteCallback).toHaveBeenCalledTimes(1);
  });
});
