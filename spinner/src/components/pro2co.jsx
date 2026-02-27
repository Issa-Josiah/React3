function Student(props) {
    return(
        <>
        <h1>Students Register</h1>
        <p>{props.find}</p>
        </>
    );
}

function Calm(props) {
    return(
        <>
        <Student find = "Dedan Kimathi University Of Technology" />
        <table>
            <tr><th>Name of student</th><th>Level</th></tr>
            <tr><td>{props.name}</td><td>{props.level}</td></tr>
        </table>
        </>
     
    );
}

export default Calm; 