import { Photo } from './photo';

export interface User {

    id: number;
    username: string;
    profilId: string;
    age: number;
    Country: string;
    photos?: Photo[];
}
