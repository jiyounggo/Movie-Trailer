import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();

  const httpClient = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/movie`,
    params: { api_key: process.env.REACT_APP_API_KEY },
  });

  const getMovieDetail = async () => {
    const response = await httpClient.get(`${id}`, {
      params: {
        language: 'en-US',
      },
    });
    return response.data;
  };

  const getMovieVideo = async () => {
    const response = await httpClient.get(`${id}/videos`);
    return response.data.results[0].key;
  };

  // const results = useQueries([
  //   { queryKey: 'movieDetail', queryFn: getMovieDetail },
  //   { queryKey: 'movieVideo', queryFn: getMovieVideo },
  // ]);

  const { status, data: movieDetail, error } = useQuery('movieDetail', getMovieDetail);
  const movieVideo = useQuery('movieVideo', getMovieVideo);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }
  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <img
        src={`${process.env.REACT_APP_IMG_URL}/w500/${movieDetail.poster_path}`}
        alt="poster_img"
      />
      <div>제목 : {movieDetail.original_title}</div>
      <div>별점 : {movieDetail.vote_average}</div>
      <div>제작연도 : {movieDetail.release_date.split('-')[0]}</div>
      <div>
        장르 :
        {movieDetail.genres.map(i => (
          <span key={i.name}> {i.name}</span>
        ))}
      </div>
      {movieVideo.data && (
        <iframe
          title={movieDetail.original_title}
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src={`https://www.youtube.com/embed/${movieVideo.data}?autoplay=1&mute=1`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

export default MovieDetail;
