//toggle checked state of listed shopping item via DB
async function toggleItemChecked(id, checkedStatus, listItemsSetter) {
  const toggeledCheckStatus = { checked: !checkedStatus };

  const response = await fetch("/api/shoppingItems", {
    method: "PATCH",
    body: JSON.stringify({ id: id, data: toggeledCheckStatus }),
  });
  const fetchedData = await response.json();
  const updatedCheckedStatus = fetchedData.updatedShoppingItem.checked;

  listItemsSetter((previousItems) =>
    previousItems.map((item) =>
      item.id === id ? { ...item, checked: updatedCheckedStatus } : item
    )
  );
}

export { toggleItemChecked };
