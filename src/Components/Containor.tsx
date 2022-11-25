import { useState } from "react";
import List from "./List";



const Containor = () => {

    interface User {
        firstName : string ,
        lastName : string,
        contactNo : string 
    }

    const [ value, setValue ] = useState<User>({
        firstName:"",
        lastName:"",
        contactNo: ""
    })

    const [ data, setData ] = useState<User[]>([]);


    return ( 
        <div>
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                setData([...data,value]) 
                console.log(data)
            }}>
                <tr>
                    <td>
                        <label htmlFor="">First Name :</label>
                    </td>
                </tr>

                <tr>
                    <td>
                        <input type="text"  placeholder="enter your first name" onChange={(e)=>{
                            setValue({...value,firstName : e.target.value})
                        }} />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label>Last Name :</label>
                    </td>
                </tr>

                <tr>
                    <td>
                        <input type="text" placeholder="enter your last name" onChange={(e)=>{
                            setValue({...value,lastName : e.target.value})
                        }} />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label htmlFor="">Mobile Name :</label >
                    </td>
                </tr>

                <tr>
                    <td>
                        <input type="number" placeholder="enter yout contact number" onChange={(e)=>{
                            setValue({...value,contactNo : (e.target.value)})
                        }}/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <input type="submit" />
                    </td>
                </tr>
            </form>
         
         <List userList={data}/>
        </div>
    )
}
export default Containor ;