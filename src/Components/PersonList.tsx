interface NameList {
    name: string,
    age: number,
}
interface personListProps {
    nameList: NameList[]
}

const PersonList = (props: personListProps) => {
   

    return (
        <>
            {
                props.nameList.map((ele) => (
                <div key={ele.name}>
                    <h2>{ele.name}</h2>
                    <h2>{ele.age}</h2>
                </div>
                ))
            }
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
        </>
    )
}

export default PersonList;
