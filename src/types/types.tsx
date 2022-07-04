export interface Charter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  episode: string[];
}

export interface ChartersResponse {
  info: any;
  results: Charter[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url: string;
}
