interface IFilm {
  filmUrl: string;
  categoryId?: string;
}

export interface IGetFilm extends IFilm {
  id: string;
}

export interface ICreateFilm extends IFilm {}

export interface ICategory {
  _id: string;
  name?: string;
  description: string;
  image: string | null;
  films: IGetFilm[];
}
