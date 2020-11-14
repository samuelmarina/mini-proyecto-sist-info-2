export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Origin,
    location: Location,
    episode: Array<string>,
    imageUrl: string,
    created: string,
    haveLike?: boolean,
    likes: number
}

export interface Origin {
    name: string,
    url: string,
}

export interface Location {
    name: string,
    url: string,
}