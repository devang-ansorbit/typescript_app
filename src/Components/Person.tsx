import { type } from "@testing-library/user-event/dist/type"

type PersonList = {
    name : {
        Person_name : string
    }
}

 const Person = (props:PersonList) => {
  return (
    <>
    <h1>{props.name.Person_name}</h1>
    </>
  )
 }

 export default Person