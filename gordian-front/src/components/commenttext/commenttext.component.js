import NormalText from '../normaltext/normaltext.component'
import './commenttext.component.css'


const CommentText= () => {





    return (
        <div>
                    <div className="lowtext">
                        <NormalText text={`What if the foreground text in the 
                        theme is black as well? – Marc B Sep 30 '11 at 21:31`}/>

                    </div>
                    <div className="lowtext">
                        <NormalText text={`What if the foreground text in the 
                        theme is black as well? – Marc B Sep 30 '11 at 21:31`}/>

                    </div>
                    <div className="grey-text text-size">
                        <input placeholder="Add a comment" type="text" ></input>
                    </div>
        </div>

    )
}

export default CommentText;
