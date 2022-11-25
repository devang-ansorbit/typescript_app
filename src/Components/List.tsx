
    interface User {
        firstName : string ,
        lastName : string,
        contactNo : string
    }

    interface Users {
        userList : User[]
    }

const List:React.FC<Users> = (props) => {

    

    return (
        <div>
            <ul>
            {
                props.userList.map((user)=>(
                    <>
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    <li>{user.contactNo}</li>
                    </>
                ))
            }
            </ul>
        </div>
    )
}

export default List