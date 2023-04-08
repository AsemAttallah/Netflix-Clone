export default function Movie(props){
    return(
        <>
        <p>{props.movie.title}</p>
        <img  src={props.movie.poster_path} alt=" Movie Image"/>
        </>
    )
}