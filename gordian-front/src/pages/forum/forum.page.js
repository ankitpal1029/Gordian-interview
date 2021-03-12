import Response from '../../components/response/response.component';
import './forum.page.css';


const Forum= () => {


    const tags = [
            `vim`,
            `colorscheme`
    ]
        

    const info = [
        [
        `Is there any way, in my vimrc,
        to override the background setting of my colorscheme 
        and force it to black? I'm looking for something like`,
        [
        'set colorscheme=wombat256',
        'override_background(black)'

        ],

        `so that whatever scheme I select, 
        the background gets forced to black.`

        ],[
            `This is what worked for me:`,
            [`colorscheme wombat256`,
            `hi Normal ctermbg=16 guibg=#000000`,
            `hi LineNr ctermbg=16 guibg=#000000`
            ]
    ]
]

const upvotes = [
    29,
    5
]



    return (

        <div className="container ">
            <div className="flexcontaier">
                  <ul className="left ">
                      <li><h5>force vim background to black</h5></li>
                  </ul>
                  <ul className="right">
                    <li ><button  className="btn blue" href="">Ask Question</button></li>
                  </ul>

            </div>
            <div className="textcontainer highlight">
                    <p className="underText">Asked 9 years,5months ago Active: 11 months ago</p>
            </div>

            { info.map((i,index) => {
                    if(index === 0){
                    return <Response info={i} shadedIndice={1} tags={tags} mainQuestion={true} upvotes={upvotes[index]}/>
                } else{
                    return <Response info={i} shadedIndice={1} tags={tags} mainQuestion={false} upvotes={upvotes[index]}/>
                }
            }) }



        </div>
    )
}


export default Forum;
