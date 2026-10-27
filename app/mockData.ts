export interface mockDataProps {
    id: number;
    name: string;
    tag: 'HOME' | 'RECENT';
    address: string;
}


export const MOCKDATA: mockDataProps[] = [
    {
        id: 1,
        name: 'Home',
        tag: 'HOME',
        address: 'Villa 12, Street 840, Zone 61 · West Bay',
    },
    {
        id: 2,
        name: 'Marina Office Tower',
        tag: 'HOME',
        address: 'Office 23, Street 840, Zone 61 · West Bay',
    },
    {
        id: 3,
        name: 'Corniche Ferry Terminal',
        tag: 'RECENT',
        address: 'Gate 3, Corniche Promenade',
    },
    {
        id: 4,
        name: 'Msheireb Metro Station',
        tag: 'RECENT',
        address: 'Al Kinana St · Msheireb Downtown',
    },
    {
        id: 5,
        name: 'Hamad International Airport',
        tag: 'RECENT',
        address: 'Airport Road · Doha',
    }

]

