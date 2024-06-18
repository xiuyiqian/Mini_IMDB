import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Hero = ({movies}) => {

    const navigate = useNavigate();
    function reviews(movieID){
        navigate(`/Reviews/${movieID}`)
    }
    function videoPlayers(movie){
        let ytTrailerId = movie.trailerLink.substring(movie.trailerLink.length - 11)
        navigate(`/Trailer/${ytTrailerId}`)
    }

  return (
    <div className="movies-carousel-container">
        <Carousel>
            {
                movies && movies.map((movie)=>{
                    return(
                        <Paper>
                            <div className= "movie-card-container">
                                <div className="one-movie" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className="movie-poster">
                                            <img src={movie.poster} alt="" />
                                        </div>
                                        <div className="movie-buttons-container">
                                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button">
                                                <FontAwesomeIcon className="play-button-icon"
                                                icon = {faCirclePlay}
                                                />
                                            </div>
                                            </Link>
                                        </div>
                                        <div className="movie-review-button-container">
                                                <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero
