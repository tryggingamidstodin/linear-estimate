export interface Point extends Array<number> {
}
export default function linearEstimateFromArray(array: Point[]): (value: number) => number;
export declare function linearEstimateFromArrays(array1: Point[], array2: Point[]): (value: number) => number;
