import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

export default function ModalMovie(props) {
  const commentRef= useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let image = props.movie.poster_path;

  function submitHandler(e){
    e.preventDefault();
    let userComment=commentRef.current.value;
    let newMovies={...props.movie,userComment};
    props.commentHandler(newMovies,newMovies.id)
  }

  async function addToFavHandler(e){
    e.preventDefault();
    let url=`${process.env.REACT_APP_MY_URL}/addMovie`
    let data={
      name:props.movie.title,
      comment:props.movie.comment,
      // photo:props.movie.poster_path
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    const reciveData= await response.json();
    if(response.status===201){
      alert("Successfully added")
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Show details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt={props.movie.title} />
        <Modal.Body>
          {props.movie.release_date}
          <br/>
          <br/>
          {props.movie.comment?props.movie.comment: "No comment"}
          <br/>
          <br/>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
              <Form.Text className="text-muted">
                enter your comment
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e)=>submitHandler(e)}>
              Submit
            </Button>
            <Button variant="primary" type="submit" onClick={(e)=>addToFavHandler(e)}>
              Add to favorite
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


