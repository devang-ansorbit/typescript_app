import Containor from "./Child";

// interface User {
//     name : string ,
//     contactNo : string
// }

const Parent = () => {

    return (
        <div>
            {/* <Child name="Devang"/> */}
            <Containor updatedInformation={{ name: 'Devang', contactNo : '8987654790' }}/>
        </div>
    )

}

export default Parent;