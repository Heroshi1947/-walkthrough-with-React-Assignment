export function Person(props){
    return(
        <>
            <h3 style={{fontSize:'40px', color:'pink'}}>{props.name}</h3>  
            <h2>{props.age}</h2>
        </>
    )

}