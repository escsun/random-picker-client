import RandomOrg from 'random-org';
import * as RandomConstants from '../constants/random';


export const getRandomNumberApi = (min, max) => {
  const random = new RandomOrg({apiKey: RandomConstants.RANDOM_API_KEY});
  return random.generateIntegers({min, max, n: 1})
    .then(result => {
      console.log(result);
      return result.random.data[0]
    });
};

export default getRandomNumberApi;
