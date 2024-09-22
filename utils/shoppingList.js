function toggleItemChecked(id, listItemSetter) {
  listItemSetter((previousItems) =>
    previousItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
  );
}

async function createListItem(item_id) {
  const data = {
    item: item_id,
    checked: false,
  };
  await fetch("api/shoppingItems", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export { toggleItemChecked, createListItem };
