import './bluetags.component.css'


const BlueTags= (props) => {





    return (
                    <div className="row">
                        <a className="col s1 ">{props.tags[0]}</a>
                        <a className="col s1 ">{props.tags[1]}</a>
                    </div>

    )
}

export default BlueTags;
