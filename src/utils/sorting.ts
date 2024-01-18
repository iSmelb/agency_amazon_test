export function sortByProperty<T>(array: T[], sortBy: keyof T): T[] {
  const compareFunction = (a: T, b: T): number => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return valueA - valueB;
    }

    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB);
    }

    if (valueA instanceof Date && valueB instanceof Date) {
      return valueA.getTime() - valueB.getTime();
    }

    throw new Error("Invalid property type for sorting");
  };

  return array.slice().sort(compareFunction);
}
