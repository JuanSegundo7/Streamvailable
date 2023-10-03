export interface Values {
    keyword: string;
    country: string;
}


export interface Seasons {
    title: string;
    episodes: Episode[]
}


export interface Episode {
    title: string;
}

export interface Platform {
    link: string;
    service: string;
}