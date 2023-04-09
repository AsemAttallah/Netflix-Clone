import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';

export default function Movie(props){
  let image=props.movie.poster_path;
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${image}`} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
            {props.movie.overview}
            </Card.Text>
            <Button variant="primary"><ModalMovie movie={props.movie}/></Button>
          </Card.Body>
        </Card>
      );
}



