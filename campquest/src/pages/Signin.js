import React, {useState} from "react";
import "/Signin.css";
import {useNavigate} from "react-router-dom"


function Sign (){

    const [FullName, setFullName] = useState('')
    const [SchoolName, setSchoolName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    function  enter () {
    }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();

        function handclick(event){
            //this will navigate to the events page when the user puts the information in
            navigate('/target-route');

            }

    const handleSumbit = async (e) => {
        e.preventDefault()

        console.log(FullName, SchoolName, Email, Password)
        }

    return (
        <div>
            <center><h1>CampQuest</h1></center>
            <center>
                <div className="signin">
                    <form className="signin" onSubmit={handleSumbit}>
                        <b /><p><b>Already have an account?</b> <a href="#"> Login Here</a>
                        <br /><br />
                        <label><b>Full Name</b></label>
                        <input type="text" name="Uname" id="Uname" placeholder="Personal Name" onChange={(e) => setFullName(e.target.value)} value={FullName} />
                        <br /><br />
                        <label><b>School Name</b></label>
                        <input type="text" name="School" id="School" placeholder="School Name" onChange={(e) => setSchoolName(e.target.value)} value={SchoolName} />
                        <br /><br />
                        <label><b>Email Address
                        </b>
                        </label>
                        <input type="text" name="Uname" id="Uname" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={Email} />
                        <br /><br />
                        <label><b>Password
                        </b>
                        </label>
                        <input type="Password" name="Pass" id="Pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={Password} />
                        <br /><br />
                        <input type="checkbox" id="check" name="check" defaultValue="check" /><br />
                        <b /></p><p><b>By signing up, you agree to our terms and regulations</b></p>
                        <center><input type="button" name="sign" id="sign" defaultValue="Sign In" onSubmit={handclick}/></center>
                    </form>
                </div>
            </center>
            <br /><br />
        </div>
    )
}

export default Sign;