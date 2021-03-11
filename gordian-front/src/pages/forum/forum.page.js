import {useState} from 'react';
import './forum.page.css';
import {useHistory} from 'react-router';


const Forum= () => {
    const [ password, setPassword] = useState("")
    const [ email, setEmail] = useState("")
    const [ loginfail, setLoginFail ] = useState(false);
    const history = useHistory();



    function submitHandler (e){
        e.preventDefault();


    }


    return (
            <div className="border-black center">
            </div>

    )
}

export default Forum;
