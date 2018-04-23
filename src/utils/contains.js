// check for unique item in an array
const contains = (array, item) => {
  let doesContain = false;

  for (let i = 0, length = array.length; i < length; i++) {
    if (array[i] === item) {
      doesContain = true;
      break;
    }
  }

  return doesContain;
};

export default contains;
