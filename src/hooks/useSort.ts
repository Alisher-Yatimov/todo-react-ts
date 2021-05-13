import { Order } from '../types/Order';

function sortNumbers(arr: number[], order: Order): Array<number>;
function sortNumbers<T>(arr: Array<T>, order: Order, field: keyof T): Array<T>;
function sortNumbers(arr: Array<any>, order: Order, field?: any): Array<number> {
    if (typeof arr[0] == 'object') {
        if (order === Order.ASC) {
            return arr.slice().sort((a, b) => a[field] - b[field]);
        }

        if (order === Order.DESC) {
            return arr.slice().sort((a, b) => b[field] - a[field]);
        }
    }
    if (order === Order.ASC) {
        return arr.slice().sort((a, b) => a - b);
    }

    if (order === Order.DESC) {
        return arr.slice().sort((a, b) => b - a);
    }

    return arr;
}

function sortString(arr: string[], order: Order): Array<string>;
function sortString<T>(arr: T[], order: Order, field: string): Array<T>;
function sortString(arr: Array<any>, order: Order, field?: any): Array<string> {
    if (typeof arr[0] == 'object') {
        if (order === Order.ASC) {
            return arr.slice().sort((a, b) => (a[field] > b[field] ? 1 : -1));
        }

        if (order === Order.DESC) {
            return arr.slice().sort((a, b) => (a[field] > b[field] ? -1 : 1));
        }
    }
    if (order === Order.ASC) {
        return arr.slice().sort();
    }

    if (order === Order.DESC) {
        return arr.slice().sort().reverse();
    }

    return arr;
}

export function useSort(arr: number[], order: Order): Array<number>;
export function useSort(arr: string[], order: Order): Array<string>;
export function useSort<T>(arr: Array<T>, order: Order, field: keyof T): Array<T>;
export function useSort<T>(arr: Array<T>, order: Order, field: keyof T, isDate: boolean): Array<T>;
export function useSort(arr: Array<any>, order: Order, field?: any, isDate?: boolean): Array<any> {
    if (!arr.length || arr.length === 1) return arr;

    if (typeof arr[0] == 'number') {
        return sortNumbers(arr, order);
    }

    if (typeof arr[0] == 'string') {
        return sortString(arr, order);
    }

    if (typeof arr[0] == 'object') {
        if (typeof arr[0][field] == 'string') {
            return sortString(arr, order, field);
        }

        if (typeof arr[0][field] == 'number') {
            return sortNumbers(arr, order, field);
        }

        if (isDate) {
            if (order === Order.ASC) {
                return arr
                    .slice()
                    .sort((a, b) => Number(new Date(String(a[field]))) - Number(new Date(String(b[field]))));
            }

            if (order === Order.DESC) {
                return arr
                    .slice()
                    .sort((a, b) => Number(new Date(String(b[field]))) - Number(new Date(String(a[field]))));
            }
        }
    }
    return arr;
}
