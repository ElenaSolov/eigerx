import { successfulResponse, failedResponse } from "./constants";
export const getPrices = () => {
  return Promise.resolve(successfulResponse);
};

export const getPricesFail = () => {
  return Promise.resolve(failedResponse);
};
