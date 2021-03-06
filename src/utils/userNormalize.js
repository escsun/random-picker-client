import split from './split';

// Normalize user data
const userNormalize = (user) => {
  const data = split(user, ',', 3);
  return {
    icon: data[0],
    username: data[1],
    text: data[2]
  }
};

export default userNormalize;
