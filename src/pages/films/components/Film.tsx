import { IGetFilm } from '../types';

type FilmProps = {
  film: IGetFilm;
};

export const Film = ({ film }: FilmProps) => {
  return <div>{film.filmUrl}</div>;
};
