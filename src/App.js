import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import Banner from "./components/Banner";
import PostsHead from "./components/PostsHead";
import Post from "./components/Post";
import SideNav from "./components/SideNav";
import SignUpModal from "./components/SignUpModal";

import { useState } from "react";
function App() {
  const [show, handleShow] = useState(false);
  return (
    <div classNameName="App">
      <NavigationBar openModal={handleShow} />
      <Banner />
      <Container fluid style={{ backgroundColor: "white" }}>
        <PostsHead />
        <Container fluid>
          <Col>
            <Row style={{ marginTop: 15 }}>
              <Post />
            </Row>
            <Row style={{ marginTop: 15 }}>
              <Post />
            </Row>
            <Row style={{ marginTop: 15 }}>
              <Post />
            </Row>
          </Col>
          <Col>
            <SideNav />
          </Col>
        </Container>
      </Container>
      <SignUpModal show={show} onHide={() => handleShow(false)} />
    </div>
  );
}

export default App;
