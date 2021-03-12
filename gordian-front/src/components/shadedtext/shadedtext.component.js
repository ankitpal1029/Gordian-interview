import NormalText from '../normaltext/normaltext.component'
import './shadedtext.component.css'


const ShadedText= () => {





    return (
                    <div className="shadedgray addMargin">
                        <NormalText text={'set colorscheme=wombat256'}/>
                        <NormalText text={'override_background(black)'}/>

                    </div>

    )
}

export default ShadedText;
