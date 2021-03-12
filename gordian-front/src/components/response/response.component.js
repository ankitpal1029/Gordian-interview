import BlueTags from '../bluetags/bluetags.component';
import NormalText from '../normaltext/normaltext.component';
import ShadedText from '../shadedtext/shadedtext.component';
import Tags from '../tags/tags.component';
import arrowUp from './images/arrowUp.png';
import './response.component.css'


const Response= () => {





    return (
                    <div className="row">
                        <div className="col s2">
                            <img width={50} src={arrowUp} className="center-align"></img>
                            <h5 className="left-align"> 5</h5>
                            <img width={50} src={arrowUp} className="rotate90 center-align"></img>
                        </div>

                        <div className="col s10 addPadding">
                            <NormalText text={`Is there any way, in my vimrc,
                            to override the background setting of my colorscheme 
                            and force it to black? I'm looking for something like`}/>
                            <ShadedText/>
                            <NormalText text={`so that whatever scheme I select, 
                                the background gets forced to black.`}/>
                            <BlueTags tags={[`vim`,`colorscheme`]}/>
                            <Tags/>
                        </div>
                    </div>

    )
}

export default Response;
