import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import auth from "../../services/adminService";
import Form from "react-bootstrap/Form";
import{Row, Col, Container} from 'react-bootstrap'
import { toast } from "react-toastify";
toast.configure();

const EditDiscount = ({match}) => {
   
  const [type, setType] = React.useState();
  const [fromNoQty, setfromNoQty] = React.useState(null);
  const [toNoQty, settoNoQty] = React.useState(null);
  const [discountPercentage, setDisPercentage] = React.useState();
  const [commissionPercentage, setComPercentage] = React.useState();
  const [showFields, setShowField] = React.useState(false);
  const [amount, setAmount] = React.useState(null);
    const [discount, setDiscount] = useState()
    const getData = () => {
        auth
          .getDiscounts()
          .then((res) => {
            setDiscount(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      //getData();
      React.useEffect(getData, []);

     
      if (!discount || discount.length === 0) return <p></p>;
      const filter = discount.data.filter((discounts) => discounts.discountCode === match.params.id);

      const handleUpdate=async()=>{
        const code = match.params.id
        if (type === undefined) {
          setType(filter[0].type);
        }
        if (fromNoQty == null) {
          setfromNoQty(filter[0].fromNoQty);
        }
        if (toNoQty === null) {
          settoNoQty(filter[0].toNoQty);
        }
        if (discountPercentage === undefined) {
          setDisPercentage(filter[0].discountPercentage);
        }
        if (commissionPercentage === undefined) {
          setComPercentage(filter[0].commissionPercentage);
        }
        if (amount === null) {
          setAmount(filter[0].amount);
        }
        const discountCode=code
        const updatedBy=auth.getCurrentUser().name
         const response = await auth.editDiscount(code,type,fromNoQty,toNoQty,discountPercentage,
        commissionPercentage,amount,discountCode,updatedBy);
         if (response.status === 200) {
           toast.success("Discount Updated");
         }
      }
     
      return (
        <Container>
          <h5 className="mb-5">Edit Discount</h5>
          <Form>
          <Row>
        <Col md={6}>
          <Form.Label>Type</Form.Label>
        </Col>
        <Col>
          <select selected={filter[0].type} onChange={(e)=>{
            setType(e.target.value)
          }}>
          
            <option >Please Select One</option>
            <option value="type" selected>{filter[0].type}</option>
            <option value="Yes">Employee Voucher</option>
            <option value="Will Ambassador">Will Ambassador</option>
            <option value="Will Ambassador B2B Discount">
              Will Ambassador B2B Discount
            </option>
            <option value="Organisation User B2B Discount">
              Organisation User B2B Discount
            </option>
          </select>
        </Col>
      </Row>
      {filter[0].type==="Employee Voucher" && (
        <div>
          <Row>
            <Col md={6}>
              <Form.Label>From No Quantity</Form.Label>
            </Col>

            <input
              name="fromNoQty"
              defaultValue={filter[0].fromNoQty}
              onChange={(e) => {
                setfromNoQty(e.target.value);
              }}
            />
          </Row>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>To No Quantity</label>
            </div>

            <input
              name="toNoQty"
              defaultValue={filter[0].toNoQty}
              onChange={(e) => {
                settoNoQty(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Amount</label>
            </div>

            <input
              name="amount"
              defaultValue={filter[0].amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
        </div>
      )}
      {filter[0].type!=="Employee Voucher" && (
         <>
         <div className="row">
           <div className="col-md-6">
             <label>Discount Percentage</label>
           </div>
           <input
             type="number"
             defaultValue={filter[0].discountPercentage}
             onChange={(e) => {
               setDisPercentage(e.target.value);
             }}
           />
         </div>
         <br />
         <br />
         <div className="row">
           <div className="col-md-6">
             <label>Commission Percentage</label>
           </div>
           <input
             type="number"
             defaultValue={filter[0].commissionPercentage}
             onChange={(e) => {
               setComPercentage(e.target.value);
             }}
           />
         </div>
       </>
      )}
      <br />
             </Form>
             <Button variant="contained" color="primary" onClick={handleUpdate}>Update Discount</Button>
        </Container>
      );
};

export default EditDiscount;
