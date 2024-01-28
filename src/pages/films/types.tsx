export interface IFilm {
  filmUrl: string;
  categoryId?: string;
  category?: ICategory;
}

export interface IGetFilm extends IFilm {
  id: string;
}

export interface ICreateFilm extends IFilm {}
export interface IUpdateFilm extends Partial<ICreateFilm> {}

export interface ICategory {
  _id: string;
  name?: string;
  description: string;
  image: string | null;
  films: IGetFilm[];
}
