import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./Navbar.css"
import Navbar from 'react-bootstrap/Navbar';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
function Navb({ changePage }) {
  const [cookie,setCookie,removeCookie] = useCookies();
  const navigate=useNavigate();
  function clickHandler(e) {
    changePage(e.target.name)
  }
  function logoutHandler(){
    removeCookie('user',null);
    removeCookie("token",null);
    navigate("/")
  }
  return (
    <>
      {cookie.user.userType === "student" ?
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" style={{ marginLeft: "-60px" }}>ITS Freelance</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className='nvbar-margin' name="profile" onClick={(e) => { clickHandler(e) }}>Profile</Nav.Link>
              <Nav.Link className='nvbar-margin' name="btasks" onClick={(e) => { clickHandler(e) }} >Browse Tasks</Nav.Link>
              <Nav.Link className='nvbar-margin' name="mtasks" onClick={(e) => { clickHandler(e) }} >My Tasks</Nav.Link>
              <Nav.Link className='nvbar-margin' name="feedback" onClick={(e) => { clickHandler(e) }} >Feedback</Nav.Link>
            </Nav>
            <Nav className="me">
              <Nav.Link onClick={logoutHandler} style={{ marginRight: "-80px" }}>Logout</Nav.Link>

            </Nav>
          </Container>
        </Navbar>
        : cookie.user.userType === "company" ?
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand onClick={logoutHandler}>ITS Freelance</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className='nvbar-margin' name="profile" onClick={(e) => { clickHandler(e) }}>Profile</Nav.Link>
                <Nav.Link className='nvbar-margin' name="mtasks" onClick={(e) => { clickHandler(e) }} >My Tasks</Nav.Link>
                <Nav.Link className='nvbar-margin' name="feedback" onClick={(e) => { clickHandler(e) }} >Feedback</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          : cookie.user.userType === "doctor" ?
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand onClick={logoutHandler} style={{ marginLeft: "-60px" }}>ITS Freelance</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link className='nvbar-margin' name="profile" onClick={(e) => { clickHandler(e) }}>Profile</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="btasks" onClick={(e) => { clickHandler(e) }} >Browse Tasks</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="companies" onClick={(e) => { clickHandler(e) }}>Companies</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="students" onClick={(e) => { clickHandler(e) }}>Students</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="feedback" onClick={(e) => { clickHandler(e) }} >Feedback</Nav.Link>

                </Nav>
                <Nav className="me">
                  <Nav.Link onClick={logoutHandler} style={{ marginRight: "-80px" }}>Logout</Nav.Link>

                </Nav>
              </Container>
            </Navbar> : <></>
      }
    </>
  );
}

export default Navb;