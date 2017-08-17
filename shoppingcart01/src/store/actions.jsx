import { BUY, DELETE } from './constants';

export const buyFruit = (content) => ({
  type: BUY,
  content
});

export const deleteFruit = (content) => ({
  type: DELETE,
  content
});
