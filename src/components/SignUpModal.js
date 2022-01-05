import { Modal, Button } from "react-bootstrap";
import "./style.css";

export default function SignUpModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Account
        </Modal.Title>
        <link rel="stylesheet" href="style.css"></link>
      </Modal.Header>
      <Modal.Body>
        <div className="Container">
          <h2>Sign Up</h2>
          <form action=" ">
            <div className="form-item-username">
              <input type="text" name="firstName" id="firstName" placeholder="First Name"></input>
              <input type="text" name="lastname" id="lastname" placeholder="Last Name"></input>
            </div>
            <div className="form-item">
              <input type="email" name="email" id="email" placeholder="Email"></input>
            </div>
            <div className="form-item">
              <span className="pwd-format">
                8-15 AlphaNumeric Characters
              </span>
              <input type="password" name="password" id="password" placeholder="Enter Password"></input>
              <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"></input>
            </div>
            <div className="form-btns">
              <button className="signup" type="submit" disabled>Sign Up</button>
            
            <div className="Options">Already have an account?<a href="#">Login Here</a>
            </div>
            </div>
          
          </form>

        </div>
       </Modal.Body>
          <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
     </Modal>
            );
}
