import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function FavList (){
    const [favMovies, setfavMovies] = useState([])

    async function getFavMovies() {
        let url = `${process.env.REACT_APP_MY_URL}/getMovies`;
        let response = await fetch(url,{
            method:'Get',
        });
        let recivedData = await response.json();
        setfavMovies(recivedData);

    }
    
    async function deleteHandler(id){
    let url = `${process.env.REACT_APP_MY_URL}/delete/${id}`;
    let response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
      getFavMovies();
    }

    // async function updateHandler(id){
    //     let url = `${process.env.REACT_APP_MY_URL}/updateMovie/${id}`;
    //     let data={
    //         comment:props.movie.comment
    //       }
    //     let response = await fetch(url, {
    //         method: "PUT",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data)
    //       })
    //       getFavMovies();
    //     }

        

    useEffect(() => {
        getFavMovies();
        // console.log(favMovies)

    }, []);

    return(
        <>
        <h1>Favorite list page</h1>
        <br/>
        <br/>
        {
            favMovies && favMovies.map(movies=>{
                return(
                <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movies.photo}`} /> */}
                  <Card.Body>
                    <Card.Title>{movies.name}</Card.Title>
                    <Card.Text>
                    {movies.comment}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>deleteHandler(movies.id)}>Delete</Button>
                    {/* <Button variant="primary" onClick={()=>updateHandler(movies.id)}>Update</Button> */}
                  </Card.Body>
                </Card>
                )
                
            })
        }
        </>
    );



}