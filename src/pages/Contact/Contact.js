import React from "react";
import Navbar from '../../components/Navbar'

function Contact() {
  return (
    <>
      <form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">I'm an...</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Employer</option>
      <option>Instructor</option>
      <option>Contractor</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message:</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
    </>
  );
}

export default Contact;