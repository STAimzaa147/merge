import { merge } from './merge';

describe('merge function', () => {
  it('should merge three sorted arrays into one sorted array', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [6, 4, 2];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6]);
  });

  it('should handle empty arrays', () => {
    const collection_1: number[] = [];
    const collection_2 = [1, 2, 3];
    const collection_3 = [3, 2, 1];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('should handle arrays of different lengths', () => {
    const collection_1 = [1, 5];
    const collection_2 = [2, 4, 6, 8];
    const collection_3 = [9, 7, 3];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
