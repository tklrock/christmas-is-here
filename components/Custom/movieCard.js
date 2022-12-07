import { Progress } from "reactstrap";
export const MovieCard = ({movie}) => {

    return (
        <>
        <div className="border border-dark border-2 rounded-5 bg-image hover-overlay bg-white p-1 m-3 container cardHover">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="font-weight-bolder">{movie.name}</h2>                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <h4>{movie.year}</h4>
                        <p>{movie.description}</p>
                    </div>
                    <div className="col-5">
                        <img src={movie.image} className="w-100 m-1 rounded-2"/>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 text-center">
                        <h3>
                        <Progress style= {{height: '25px', fontSize:'14pt'}}striped color="danger" value={movie.rating * 10} >{movie.rating}</Progress>
                        </h3>
                    </div>
                    <div className="col-1"></div>                    
                </div>
                <div className="row"></div>
        </div>
    </>
    )
}