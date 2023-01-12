import { successfulResponse } from "./constants";
export const getPrices = () => {
  return Promise.resolve(successfulResponse);
};

console.log(getPrices());
