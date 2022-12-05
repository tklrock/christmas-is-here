export const SongCard = ({song}) => {

    return (
        <>
        <div className="border border-dark border-2 rounded-5 m-3 container songCard">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="font-weight-boldest">{song.title}</h2>                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-4 text-center">
                        <h4>{song.artist}</h4>
                    </div>
                    <div className="col-6 text-center">
                        <h4>&quot;{song.album}&quot;</h4>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 text-center">
                        <img src={song.image} style={{width:'90%', margin:'5%'}} />
                    </div>                    
                    <div className="col-1"></div>                    
                </div>
                <div className="row text-center vertical-align-center">
                    <div className="col-4">
                        <h5>{song.year}</h5>
                    </div>
                    <div className="col-4 text-center">
                        
                        <a href={song.link} className="spotify" target="_blank" rel="noreferrer">
                            <img className="spotifyImg" src="https://pnggrid.com/wp-content/uploads/2021/05/Spotify-PNG-Logo.png"  />
                        </a>
                    </div>
                    <div className="col-4">
                        <h5>{song.Duration}</h5>
                    </div>
                </div>
        </div>
    </>
    )
}