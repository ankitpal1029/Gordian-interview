import NormalText from '../normaltext/normaltext.component'
import './shadedtext.component.css'


const ShadedText= (props) => {




    return (
                    <div className="shadedgray addMargin">
                        { props.text.map((t,index) => {

                                return <NormalText key={index} text={t}/>
                        }
                        ) }

                    </div>

    )
}

export default ShadedText;
