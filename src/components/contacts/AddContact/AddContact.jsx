import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { ContactService } from "../../../services/ContactService";

let AddContact = () => {

    let navigate = useNavigate();

  let [state, setState] = useState({
    loading: false,
    contact: {
      name : '',
      photo : '',
      mobile : '',
      email : ''
    }
  });

let updateInput = (event) => {
  setState({
    ...state,
    contact: {
      ...state.contact, 
      [event.target.name] : event.target.value
    }
  });
};

let submitForm = async (event) => {
  event.preventDefault();
  try {
    let response = await ContactService.createContact(state.contact);
    if(response){
      navigate('/contacts/list', {replace: true});
    }
  }
  catch (error) {
    setState({...state , errorMessage: error.message});
    navigate('/contacts/add', {replace: false});
  }
};

let {loading, contact, errorMessage} = state;

    return (
      <React.Fragment>
        <section className="add-contact p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h4 text-success fw-bold">Create Contact</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form onSubmit={submitForm}>
                  <div className="mb-2">
                    <input 
                    required={true}
                    name="name"
                    value={contact.name}
                    onChange={updateInput}
                    type="text" className="form-control" placeholder="Name"/>
                  </div>
                  <div className="mb-2">
                    <input
                    required={true}
                    name="photo"
                    value={contact.photo}
                    onChange={updateInput}
                    type="text" className="form-control" placeholder="Photo URL"/>
                  </div>
                  <div className="mb-2">
                    <input 
                    required={true}
                    name="mobile"
                    value={contact.mobile}
                    onChange={updateInput}
                    type="number" className="form-control" placeholder="Mobile"/>
                  </div>
                  <div className="mb-2">
                    <input 
                    required={true}
                    name="email"
                    value={contact.email}
                    onChange={updateInput}
                    type="email" className="form-control" placeholder="Email"/>
                  </div>
                  <div className="mb-2">
                    <input type="submit" className="btn btn-success" value="Create"/>
                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>  
    )
};

export default AddContact;