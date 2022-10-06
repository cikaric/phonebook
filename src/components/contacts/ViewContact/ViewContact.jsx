import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import { ContactService } from "../../../services/ContactService";

let ViewContact = () => {

  let {contactId} = useParams();

  let [state, setState] = useState({
    loading : false,
    contact : {},
    errorMessage : ''
  });
  useEffect(() => {
    const fetchData = async () => {
      setState({...state, loading: true});
      let response = await ContactService.getContact(contactId);
      setState({
        ...state, 
        loading: false,
        contact: response.data
      });
    }
      fetchData()
      .catch(console.error);
  },
)

let {loading , contact , errorMessage} = state;



    return (
      <React.Fragment>
        <section className="view-contact-intro p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h4 text-warning fw-bold">View Contact</p>
              </div>
            </div>
          </div>
        </section>
        <section className="view-contact mt-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="user"className="contact-img"/>
              </div>
              <div className="col-md-8">
              <ul className="list-group">
                          <li className="list-group-item list-group-item-action">
                            Name : <span className="fw-bold">Dejana</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Mobile: <span className="fw-bold">1546548786</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Email : <span className="fw-bold">email@email.com</span>
                          </li>
                        </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>  
    )
};

export default ViewContact;