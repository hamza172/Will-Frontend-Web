import React from "react";
import Button from "@material-ui/core/Button";
import auth from "../services/authService";
import Form from "react-bootstrap/Form";
import Webcam from "react-webcam";

const RegisterWillAmbassador = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [selfie, setSelfie] = React.useState();
  const [phoneNo, setPhoneNo] = React.useState();
  const [add1, setAdd1] = React.useState();
  const [add2, setAdd2] = React.useState();
  const [town, setTown] = React.useState();
  const [country, setCountry] = React.useState();
  const [name, setName] = React.useState();
  const [camera, setCamera] = React.useState(false);
  const webcamRef = React.useRef(null);
  const [load, setLoad] = React.useState(false);
  const [image, setImage] = React.useState();

  const handleSubmit = async () => {
    console.log(selfie);
    var data = new FormData();

    data.append("email", email);
    data.append("password", password);
    data.append("selfie", selfie);
    data.append("add1", add1);
    data.append("add2", add2);
    data.append("phoneNo", phoneNo);
    data.append("town", town);
    data.append("country", country);
    data.append("name", name);

    const response = await auth.registerWillAmbassdor(data);
    console.log(response);
  };
  const handleCamera = (e) => {
    e.preventDefault();
    setCamera(true);
  };
  const capture = React.useCallback(
    async (e) => {
      e.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      const blob = await fetch(imageSrc).then((res) => res.blob());
      setSelfie(blob);
      const ur = URL.createObjectURL(blob);
      setImage(ur);
      setLoad(true);
    },
    [webcamRef]
  );
  return (
    <div className="container col-md-6">
      <Form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Password</label>
          <textarea
            type="password"
            class="form-control"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleCamera}>Take Selfie</button>
        {camera && (
          <>
            <Webcam
              audio={false}
              height={200}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={500}
            />
            <button onClick={capture}>Capture photo</button>
          </>
        )}
        {load && (
          <>
            <img src={image} alt="selfie" width="500" height="600" />
          </>
        )}
        <div class="form-group">
          <label for="exampleInputEmail1">Town</label>
          <input
            type="text"
            class="form-control"
            name="text"
            onChange={(e) => {
              setTown(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">AddressLine 1</label>
          <input
            type="text"
            class="form-control"
            name="add1"
            onChange={(e) => {
              setAdd1(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Address Line 2</label>
          <input
            type="text"
            class="form-control"
            name="add2"
            onChange={(e) => {
              setAdd2(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input
            type="number"
            class="form-control"
            name="phoneNo"
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Country</label>
          <input
            type="text"
            class="form-control"
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>

        <div>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterWillAmbassador;
