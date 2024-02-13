const getUniqueValues = (products, keyPath) => {
  const uniqueValues = Array.from(
    new Set(products.map((product) => product[keyPath].en))
  );
  const filters = uniqueValues.reduce((acc, curr) => {
    acc[curr] = false;
    return acc;
  }, {});
  return filters;
};

const getTruthyValuesFromObject = (obj) => {
  return Object.keys(obj).filter((key) => obj[key]);
};

const slugify = (str) => {
  return String(str)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export { getUniqueValues, getTruthyValuesFromObject, slugify };
