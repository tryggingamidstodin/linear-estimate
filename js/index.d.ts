export interface Point extends Array<number> {
}
export default function linearEstimateFromArray(array: Point[]): (value: number) => number;
