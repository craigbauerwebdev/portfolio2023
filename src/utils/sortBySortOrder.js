export const sortBySortOrder = (array, order = "asc") => {
  return array.sort((a, b) => {
    const aValue = a.sort_order ?? 0; // Default to 0 if undefined
    const bValue = b.sort_order ?? 0;
    return order === "asc" ? aValue - bValue : bValue - aValue;
  });
};
