export interface Point extends Array<number> {
}
export default function linearEstimateFromArray(array1: Point[], array2?: Point[]): (value: number) => number;
