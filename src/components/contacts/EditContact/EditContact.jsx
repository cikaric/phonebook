import React from "react";
import {Link} from 'react-router-dom';

let EditContact = () => {
    return (
      <React.Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit Contact</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Photo URL"/>
                </div>
                <div className="mb-2">
                  <input type="number" className="form-control" placeholder="Mobile"/>
                </div>
                <div className="mb-2">
                  <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="mb-2">
                  <input type="submit" className="btn btn-primary" value="Update"/>
                  <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="user" className="contact-img"/>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>  
    )
};

export default EditContact;