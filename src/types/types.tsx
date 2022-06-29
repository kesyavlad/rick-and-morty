export interface Charter{
    id:number,
    name:string,
    status:string,
    species:string,
    gender:string
    image:string
    episode:string[]
}

export interface ChartersResponse{
    info: any;
    results: Charter[]
}
