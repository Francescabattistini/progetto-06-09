import { Col, Container, Nav, Navbar } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import SpotifySearch from "./SpotifySearch";

const SpotifySideBar = () => {
  return (
    <aside>
      <Col xs="12">
        <Navbar expand="lg" className="navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <Container className="flex-column align-items-start">
            <Navbar.Brand href="#home">
              <img src="assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
            </Navbar.Brand>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <Nav.Link className="nav-item nav-link d-flex align-items-center" href="#">
                      <HouseDoorFill />
                      &nbsp; Home
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="nav-item nav-link d-flex align-items-center" href="#">
                      <BookFill />
                      &nbsp; Your Library
                    </Nav.Link>
                  </li>
                  <li>
                    <SpotifySearch />
                  </li>
                </ul>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </Container>
          <Container fluid>
            <div className="nav-btn mt-auto">
              <button className="btn signup-btn" type="button">
                Sign Up
              </button>
              <button className="btn login-btn" type="button">
                Login
              </button>
              <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
            </div>
          </Container>
        </Navbar>
      </Col>
    </aside>
  );
};

export default SpotifySideBar;
