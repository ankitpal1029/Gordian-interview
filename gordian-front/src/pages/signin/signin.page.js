import {useState} from 'react';
import './signin.page.css';
import {useHistory} from 'react-router';
import axios from 'axios';


const SignIn = () => {
    const [ password, setPassword] = useState("")
    const [ username, setUsername] = useState("")
    const [ loginfail, setLoginFail ] = useState(false);
    const history = useHistory();



    function submitHandler (e){
        e.preventDefault();
        //axios.post('http://localhost:4000/login',{
        axios.post('https://gordianinterview.herokuapp.com/login',{
            username: username,
            password: password

        }).then((response) => {
            console.log(response.loggedin);
        window.localStorage.setItem('loggedin', true);

        history.push('/forum');
        },(error) => {
            console.log(error.response.status)
            if( error.response.status === 401 ){
                console.log('login error');
                setLoginFail(true);

            }
        })




    }


    return (
            <div className="border-black center">
                <div className="container">
                    <form  className="white" onSubmit={submitHandler}>
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <div className="input-field">
                            <input placeholder="username" type="text" id="name" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="password" type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="input-field">
                            <button className="stack-button lighten-1 z-depth-0" >Sign In</button>
                            <div className="red-text center">
                                { loginfail &&
                                <p> Please check your login details</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    )
}

export default SignIn;
