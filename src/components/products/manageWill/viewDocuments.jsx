import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Popup from "./popup";

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

export default class ViewDocuments extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            documents: [],
			serverURL: null,
		};
	}

	componentDidMount() {
		axios.post('/managewill/getalldocuments', {
			willID: parseURLParams(window.location.href).will_id[0]
		})
		.then((response) => {
			this.setState({ documents: response.data.allDocuments});
            this.setState({ serverURL: response.data.serverURL });
		})
		.catch((error) => {
			console.log(error);
		});
	}

	render() {
	    return (
    		<div>
    			<h3>Will Documents</h3>
				<table className="table">

				{/* Header */}
				<tr>
					<th>#</th>
					<th>Date</th>
					<th>Reg No.</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Document</th>
				</tr>

				{/* Body */}
				{this.state.documents.map((doc, index) => {
                    return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{doc.createdAt}</td>
                            <td>{doc._id}</td>
                            <td>{doc.name}</td>
                            <td>{doc.type}</td>
                            <td>{doc.desc}</td>
                            <td>{doc.location}</td>
                            <td><a target="_blank" download={doc.originalDocumentName} className="btn btn-primary" href={this.state.serverURL + "uploads\\" + doc.newDocumentName}>Open</a></td>
                        </tr>
                    );
                })}
			</table>
    	</div>          
  	);
	};
}