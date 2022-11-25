export interface User {
    name: string,
    contactNo: string
}

type updatedInfo = Pick<User, "name" | "contactNo">;


interface updatedProps {
    updatedInformation: updatedInfo;
}

const Child = (props: updatedProps) => {
    const {updatedInformation} = props
    return (
        <div>
            <h1>{updatedInformation.name}</h1>
            <h1>{updatedInformation.contactNo}</h1>
        </div>
    )
}

export default Child