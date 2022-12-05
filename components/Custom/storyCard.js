import { Progress } from "reactstrap";
export const StoryCard = ({story}) => {

    return (
        <>
        <div className="border border-dark border-2 rounded-5 bg-image hover-overlay bg-white p-1 m-3 container cardHover">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="font-weight-bolder m-1">{story.title}</h2>                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 m-1 text-center">
                        <h3>{story.author}</h3>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 storyDescription m-1">
                        <p>{story.description}</p>
                    </div>
                    <div className="col-5">
                        <img src={story.image} className="w-100 rounded-2 m-2"/>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row m-1">
                    <div className="col-1"></div>
                    <div className="col-10 text-center">
                        <h3>
                        <Progress style= {{height: '25px', fontSize:'14pt'}}striped color="danger" value={story.rating * 20} >{story.rating}</Progress>
                        </h3>
                    </div>
                    <div className="col-1"></div>                    
                </div>
        </div>
    </>
    )
}