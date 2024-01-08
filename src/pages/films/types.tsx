interface IFilm {
  id: string;
  filmUrl: string;
}

export interface ICategory {
  _id: string;
  name?: string;
  description: string;
  image: string | null;
  films: IFilm[];
}
