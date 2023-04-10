import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
             <Navbar.Brand>Netflix Clone</Navbar.Brand>
             <Nav className="me-auto">
             <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/Fav">Favorite list</Nav.Link>
             </Nav>
            </Container>
        </Navbar>
        </>
    )


} 