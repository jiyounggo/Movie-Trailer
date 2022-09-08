import React from 'react';
import { useQuery } from 'react-query';
import { getMovieNowPlaying } from '../../api/api';
import { Container } from './NowPlaying.style.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Loading from '../../common/utils/loading';

const NowPlaying = () => {
  const { data: Movies_data, status } = useQuery('nowPlayingMovieList', () => getMovieNowPlaying());

  if (status === 'loading') {
    return Loading;
  }

  if (status === 'error') {
    return alert('error');
  }

  return <Container>{Movies_data?.length > 0 && <MovieList movies={Movies_data} />}</Container>;
};

export default NowPlaying;
