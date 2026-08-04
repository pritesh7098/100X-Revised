import { useState } from "react";

function Contact(){

    const [form,setForm]=useState({

        name:"",
        email:"",
        message:""

    });

    function handleChange(e){

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    }

    function handleSubmit(e){

        e.preventDefault();

        console.log(form);

        alert("Message Sent Successfully");

    }

    return(

        <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-4 py-10">

            <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="border w-full p-3"/>

            <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border w-full p-3"/>

            <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="border w-full p-3"/>

            <button className="bg-black text-white px-5 py-2 rounded">

                Submit

            </button>

        </form>

    );

}

export default Contact;