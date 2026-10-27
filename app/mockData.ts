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



export const TRAVEL_MODES = ['Drive', 'Ride', 'Walk'] as const;
export type TravelMode = (typeof TRAVEL_MODES)[number];

export const ROUTE_SUMMARY = {
    duration: '24 min',
    distance: '9.6 km',
    arrival: '10:42',
    alert: 'Heavy traffic near the marina',
};

export interface routeStepProps {
    id: number;
    title: string;
    subtitle: string;
    distance: string;
}

export const ROUTE_STEPS: routeStepProps[] = [
    {
        id: 1,
        title: 'Head north on Street 840',
        subtitle: 'Keep right past the service road',
        distance: '450 m',
    },
    {
        id: 2,
        title: 'Turn right onto Al Istiqlal St',
        subtitle: 'Moderate traffic near the roundabout',
        distance: '1.8 km',
    },
];
