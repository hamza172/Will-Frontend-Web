import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { savePersonalDetails, removeLatestWillFromLocalStorage } from "../../../actions/formActions";
import { useEffect } from "react";
import axios from "axios";

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

const AddDocuments = ({ history }) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [location, setLocation] = useState("");
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(); 	
        formData.append( "myFile", file, file.name);
        formData.append("willID",parseURLParams(window.location.href).will_id[0]);
        formData.append("name",name);
        formData.append("type",type);
        formData.append("desc",desc);
        formData.append("location",location);        
        await axios.post('/managewill/adddocument', formData);
        window.location.href = "/products/managewill";
    }


    return (
        <Form onSubmit={submitHandler} Validate>
            <Form.Group>
                <Form.Label>Document Name</Form.Label>
                <Form.Control type="text" placeholder="Document Name" onChange={(e) => {setName(e.target.value)}} value={name} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Document Type</Form.Label>
                <Form.Control type="text" placeholder="Document Type" onChange={(e) => {setType(e.target.value)}} value={type} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Document Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => {setDesc(e.target.value)}} value={desc} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Document Location</Form.Label>
                <Form.Control type="text" placeholder="Document Location" onChange={(e) => {setLocation(e.target.value)}} value={location} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Document File</Form.Label>
                <Form.Control type="file" onChange={(e) => {setFile(e.target.files[0])}} required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>    
    );
};

export default AddDocuments;
