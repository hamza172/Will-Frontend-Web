import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const Step7 = ({ nextStep, prevStep, handleChange, changeState, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const [objs, setObjs] = useState([]);

    useEffect(() => {
        let allGifts = [];
        for(let i = 0; i < values.step4Gifts.length; i++) {
            allGifts.push(values.step4Gifts[i].giftID);
        }
        let selectedGifts = [];
        for(let i = 0; i < values.step6State.length; i++) {
            for(let j = 0; j < values.step6State[i].assets.length; j++) {
                selectedGifts.push(values.step6State[i].assets[j].giftID);
            }            
        }
        
        let leftGifts = allGifts.filter(x => !selectedGifts.includes(x));
        
        let objs = []
        for(let i = 0; i < leftGifts.length; i++) {
            for(let j = 0; j < values.step4Gifts.length; j++) {
                if(leftGifts[i] === values.step4Gifts[j].giftID) {
                    objs.push(values.step4Gifts[j]);
                }
            }
        }

        setObjs(objs);

        // let foo = objs.map((gift => <option data-id={gift.giftID}>{gift.assetType}</option>))
        // console.log(foo);
    }, [])

    return (
        <div style={{padding: 30}}>

            <h1>Step 7</h1>
            <h1>Charity</h1>

            <Form>
                {[...Array(values.step5CharityCount)].map((e, i) => <div>
                    <Form.Group>
                        <Form.Label>Name of Charity</Form.Label>
                        <Form.Control value={values.step5Charities[i].nameOfCharity} type="text" onChange={(e) => {
                            values.step5Charities[i].nameOfCharity = e.target.value;
                            changeState(values.step5Charities[i].nameOfCharity);
                        }}></Form.Control>                        
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Gift</Form.Label>
                        <select className="form-control" value={values.step5Charities[i].gift.assetType} onChange={(e) => {
                            var index = e.target.selectedIndex;
                            var optionElement = e.target.childNodes[index]
                            var giftID =  optionElement.getAttribute('data-id');
                            for(let k = 0; k < values.step4Gifts.length; k++) {
                                if(giftID === values.step4Gifts[k].giftID) {
                                    values.step5Charities[i].gift = values.step4Gifts[k];
                                    changeState("step6State", [...values.step6State]);
                                }
                            }
                        }}>                            
                            {objs.map((gift) => {
                                return(
                                    <option data-id={gift.giftID}>{gift.assetType}</option>
                                )
                            })}
                        </select>
                    </Form.Group>

                </div>)}
                
            </Form>
            
            <button className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    changeState("step5CharityCount", values.step5CharityCount + 1);
                    values.step5Charities.push({
                        nameOfCharity: "",
                        gift: {},
                    });
                    changeState("step5Charities", values.step5Charities);
                }}>Add Another</button>

                <button className="btn btn-primary ml-4" onClick={(e) => {
                    e.preventDefault();
                    changeState("step5CharityCount", values.step5CharityCount - 1);
                    values.step5Charities.splice(-1,1);
                    changeState("step5Charities", values.step5Charities);
                }}>Delete</button>

                <br></br>
            <button className="btn btn-primary mt-4" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4 mt-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step7
