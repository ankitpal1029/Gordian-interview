import Response from '../../components/response/response.component';
import './forum.page.css';


const Forum= () => {





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

            <Response/>



        </div>
    )
}


export default Forum;
