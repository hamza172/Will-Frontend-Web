import React from 'react'
import { Form } from 'react-bootstrap';

const Step4 = ({ nextStep, prevStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div  style={{padding: 30}}>
            <h1>Step 4</h1>

            <Form>

                {/* Type of Gift */}
                <Form.Group>
                    <Form.Label>Type of Gift</Form.Label>
                    <select className="form-control" value={values.typeOfGift} onChange={(e) => {handleChange("typeOfGift", e)}} >
                        <option value="Real Property">Real Property</option>
                        <option value="Personal Property">Personal Property</option>
                        <option value="Monetary Gift">Monetary Gift</option>
                    </select>
                </Form.Group>     

                {(values.typeOfGift === "Real Property" || values.typeOfGift === "Personal Property") &&                
                <div>
                    {/* Description of Gift */}
                    <Form.Group>
                        <Form.Label>Description of Gift</Form.Label>
                        <Form.Control value={values.descriptionOfGift} as="textarea" rows={3} onChange={(e) => {handleChange("descriptionOfGift", e)}} />
                    </Form.Group>           
                </div>
                }                

                {/* Monetary Value */}
                {values.typeOfGift === "Monetary Gift" &&
                    <Form.Group>
                        <Form.Label>Monetary Value</Form.Label>
                        <Form.Control value={values.monetaryValue} type="number" onChange={(e) => {handleChange("monetaryValue", e)}}></Form.Control>
                    </Form.Group>
                }
                

                

                {/* Purpose and Usage of Gift */}
                <Form.Group>
                    <Form.Label>Purpose and Usage of Gift</Form.Label>
                    <Form.Control value={values.purposeOfGift} as="textarea" rows={3} onChange={(e) => {handleChange("purposeOfGift", e)}} />
                </Form.Group>   

                {/* Possession Time */}
                <Form.Group>
                    <Form.Label>When Donee take possession</Form.Label>
                    <select className="form-control" value={values.giftPossessionTime} onChange={(e) => {handleChange("giftPossessionTime", e)}}>
                        <option value="Immediate">Immediate</option>
                        <option value="Specific Date">Specific Date</option>
                    </select>
                </Form.Group>

                {/* If Date is Selected */}
                {values.giftPossessionTime === "Specific Date" &&
                    <div>
                        {/* Date */}
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control value={values.specificDate} type="date" onChange={(e) => {handleChange("specificDate", e)}} />
                        </Form.Group>                                    
                    </div>
                }                
            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>      
        </div>
    )
}

export default Step4
