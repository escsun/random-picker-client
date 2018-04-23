// Custom Split Func like in python, java, etc
// split('-','a-b-c-d-e-f',3)
// => ["a", "b", "c-d-e-f"]
const split = (string, delimiter, n) => {
  const parts = string.split(delimiter);
  return parts.slice(0, n - 1).concat([parts.slice(n - 1).join(delimiter)]);
};

export default split;
