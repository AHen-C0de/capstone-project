function toggleItemChecked(id, listItemSetter) {
  listItemSetter((previousItems) =>
    previousItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
  );
}

export { toggleItemChecked };
