// for individual movie data
export interface IindividualMovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

// for api movie data
export interface ImovieData {
  page: number;
  results: IindividualMovieData[];
  total_pages: number;
  total_results: number;
}
