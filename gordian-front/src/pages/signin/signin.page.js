import {useState} from 'react';
import './signin.page.css';
import {useHistory} from 'react-router';


const SignIn = () => {
    const [ password, setPassword] = useState("")
    const [ email, setEmail] = useState("")
    const [ loginfail, setLoginFail ] = useState(false);
    const history = useHistory();



    function submitHandler (e){
        e.preventDefault();


    }


    return (
            <div className="border-black center">
                <div className="container">
                    <form  className="white" onSubmit={submitHandler}>
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
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
