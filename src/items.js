function Car() {
    return <h2>I am a  Car!</h2>;
}


function Garage() {
    return (
        <>
            <h2>I am a  Garage!</h2>;
            < Car/>
        </>)
}

export  default Garage