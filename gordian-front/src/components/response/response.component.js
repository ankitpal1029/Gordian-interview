import BlueTags from '../bluetags/bluetags.component';
import Comments from '../comments/comments.component';
import NormalText from '../normaltext/normaltext.component';
import ShadedText from '../shadedtext/shadedtext.component';
import Tags from '../tags/tags.component';
import arrowUp from './images/arrowUp.png';
import './response.component.css'


const Response= (props) => {



    


    return (
                    <div className="row addBorder">
                        <div className="col s2">
                            <img width={50} src={arrowUp} className="center-align"></img>
                            <h5 className="left-align">{props.upvotes}</h5>
                            <img width={50} src={arrowUp} className="rotate90 center-align"></img>
                        </div>

                        <div className="col s10 addPadding">
                            { props.info.map((i,index) => {
                                    if(index === props.shadedIndice){
                                    return <ShadedText text={i}/>
                                } else{
                                    return <NormalText text={i}/>
                                }

                            }) 
                            }
                            {props.mainQuestion &&
                            <BlueTags tags={props.tags}/>
                            }
                            <Tags/>
                            <Comments/>
                            

                            
                        </div>
                    </div>

    )
}

export default Response;
