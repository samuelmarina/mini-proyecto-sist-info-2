import { Character } from './character';

export interface APIresponse {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string
    },
    results: Array<Character>
}