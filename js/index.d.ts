export interface Point extends Array<number> {
}
export default function linearEstimateFromArray(array: Point[]): (value: number) => number;
export declare function linearEstimateFromAverageOfArrays(arrays: Point[][]): (value: number) => number;
export declare function linearEstimateFromSumOfArrays(arrays: Point[][]): (value: number) => number;
