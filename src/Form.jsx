import React, { useState } from "react";

function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (e) => {

        setName(e.target.value)
        
    }
    console.log(name);

    const handleEmail = (e) => {

        setEmail(e.target.value)
        console.log(email);
    }
    
    const handlePhone=(e)=>{

        setPhone(e.target.value)
        console.log(phone);
            }
            
            const handlePassword=(e)=>{

                setPassword(e.target.value)
                console.log(password);
                    }
                    

                    
    return (<div>
        <form>


            <input type="text" onChange={handleName} placeholder="Name" /> <br /><br />

            <input type="text"  onChange={handleEmail}  placeholder="EmailId" /> <br /><br />

            <input type="text"   onChange={handlePhone}   placeholder="Phone" />  <br /><br />

            <input type="text" onChange={handlePassword} placeholder="Password" /> <br /><br />

            <button type="submit" >Submit</button>



        </form>





    </div>)

}
export default Form