import React from "react";
import './Support.css'


const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

function Support() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    return(
        <div className="container">
            <p>If you would like to contact Tech Brothers directly, please fill out the form below.</p>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={setFormData}>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={setFormData}>

                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" placeholder="Number" onChange={setFormData}>

                            <label htmlFor="subject1">Subject Topic</label>
                            <input type="text" id="subject1" name="phone" placeholder="Subject Topic" onChange={setFormData}>

                                <label htmlFor="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.."
                                          style="height:200px" onChange={setFormData}></textarea>

                                <input type="submit" value="Submit">
            </form>
        </div>
)
}

export default Support;