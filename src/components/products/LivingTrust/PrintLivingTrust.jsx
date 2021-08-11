import React , { useEffect, useState }from'react';
import axios from 'axios';

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

const PrintLivingTrust = () => {

    const [lt, setLt] = useState();

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_URL + '/managewill/get_living_trust', {
            ltID: parseURLParams(window.location.href).lt_id[0]
        })
        .then((response) => {
            setLt(response.data.lt);
            console.log(response.data.lt);
        setTimeout(() => {
            window.print();
        }, 1000)
        })
        .catch((error) => {
            console.log(error);
        });
      }, []);


    return (
        <div>                           
            {lt &&
            <div>

                {/* Step 1 */}
                <div>
                    <h2>Step 1</h2>
                    <p>Are you Over 18: {lt.areYouOver18}</p>
                    <p>Are you of Sane Mind: {lt.areYouOfSaneMind}</p>
                    <p>Do you own the property to be vested in the trust: {lt.doYouOwnThePropertyVested}</p>
                    <p>Are you creating a revocable or irrevocable trust: {lt.areYouCreatingARevocableOrIrrevocable}</p>
                </div>

                {/* Step 2 */}
                <div>
                    <h2>Step 2</h2>
                    <h5>Personal Details</h5>
                    <p>Name: {lt.name}</p>
                    <p>City: {lt.city}</p>
                    <p>Zip Code: {lt.zipCode}</p>
                    <p>State: {lt.state}</p>
                    <p>Address: {lt.address}</p>
                    <p>Phone: {lt.phone}</p>
                    <p>Email: {lt.email}</p>
                </div>

                {/* Step 3 */}
                <div>
                    <h2>Step 3</h2>
                    <h5>Trustee Details</h5>
                    <p>Is the Grantor not the Trustee: {lt.isTheGrantorNotTheTrustee}</p>
                    {lt.isTheGrantorNotTheTrustee === "Yes" &&
                    <div>
                        <p>Trustee Name: {lt.trusteeName}</p>
                        <p>City: {lt.trusteeCity}</p>
                        <p>Zip Code: {lt.trusteeZipCode}</p>
                        <p>State: {lt.trusteeState}</p>
                        <p>Address: {lt.trusteeAddress}</p>
                    </div>
                    }
                    {lt.isTheGrantorNotTheTrustee === "No" &&
                    <div>
                        <p>Trustee Type: {lt.trusteeType}</p>
                        {lt.trusteeType === "Individual" && <p>Confirm that the right to act as a trustee has been written in the article ofr association. Then, Name and Address, Role: {lt.individuaConfirmation}</p>}
                        {lt.trusteeType === "Organisation" && <p>Confirm that individual is of sound mind, over 18 and can own a property. Then Name and Address of Trustee: {lt.organisationConfirmation}</p>}
                    </div>
                    }
                    <p>Do you want Co-Trustee: {lt.doYouWantCotrustee}</p> 
                    {lt.doYouWantCotrustee === "Yes" &&
                    <div>
                        <p>{lt.CotrusteeName}</p>
                        <p>City: {lt.CotrusteeCity}</p>
                        <p>Zip Code: {lt.CotrusteeZipCode}</p>
                        <p>State: {lt.CotrusteeState}</p>
                        <p>Address: {lt.CotrusteeAddress}</p>
                    </div>
                    }
                    <p>Would you like to Name the Trust (Our Preference is The [Grantor Name] Living Trust): {lt.wouldYouLikeToNameTheTrust}</p> 
                    {lt.wouldYouLikeToNameTheTrust === "Yes" && <p>Trust Name: {lt.trustName}</p>}                  

                </div>

                {/* Step 4 */}
                <div>
                    <h2>Step 4</h2>
                    <h5>Gift and Asset</h5>

                    {lt.step4Gifts.map((gift, index) => {
                        return(
                            <div key={index}>

                                <p>What type of Asset: {gift.assetType}</p>
                                {gift.assetType === "Real Estate" &&
                                <div>
                                    <p>Address: {gift.realEstateAddress}</p>
                                    <p>Type: {gift.realEstateType}</p>
                                </div>
                                }

                                {gift.assetType === "Financial Account" &&
                                <div>
                                    <p>Name: {gift.financialAccountName}</p>
                                    <p>Type of Account: {gift.financialAccountType}</p>
                                    <p>Account Number: {gift.financialAccountNumber}</p>
                                </div>
                                }                                                    

                                {gift.assetType === "Stock and Bond Certificate" &&
                                <div>
                                    <p>Stock-Name of Issuer: {gift.stockAndBondStockName}</p>
                                    <p>Stock-Number of Shares: {gift.stockAndBondStockNumberOfShares}</p>
                                    <p>Stock-Certificate Number: {gift.stockAndBondStockCertificateNumber}</p>
                                    <p>Stock-Description: {gift.stockAndBondStockDescription}</p>
                                    <p>Bond-Name of Issuer: {gift.stockAndBondBondName}</p>
                                    <p>Bond-Face Value of Bond: {gift.stockAndBondBondValue}</p>                        
                                    <p>Bond-Certificate Number: {gift.stockAndBondBondCertificateNumber}</p>
                                    <p>Bond-Description: {gift.stockAndBondBondDescription}</p>                        
                                </div>
                                }

                                {gift.assetType === "Business Interest" &&
                                <div>
                                    <p>Business Name: {gift.businessName}</p>
                                    <p>Description of Interest: {gift.businessDescription}</p>
                                </div>
                                }

                                {gift.assetType === "Contractual Interest" &&
                                <div>
                                    <p>Title of Contract: {gift.titleOfContract}</p>
                                    <p>Name of Other Party: {gift.nameOfOtherParty}</p>
                                    <p>Date of Contract: {gift.dateOfContract}</p>
                                    <p>Description: {gift.contarctDescription}</p>
                                </div>
                                }
                                
                                {gift.assetType === "Life Assurance Proceed" &&
                                <div>
                                    <p>Name of Issuer: {gift.lifeAssuranceName}</p>
                                    <p>Description of Policy: {gift.lifeAssuranceDescription}</p>
                                    <p>Policy Number: {gift.lifeAssuranceNumber}</p>
                                </div>
                                }

                                {gift.assetType === "Personal Property" &&
                                <div>
                                    <p>Name of Issuer: {gift.retirementProceedName}</p>
                                    <p>Description of Policy: {gift.retirementProceedDescription}</p>
                                    <p>Policy Number: {gift.retirementProceedNumber}</p>
                                </div>
                                }

                                {gift.assetType === "Retirement Proceed" &&
                                <div>
                                    <p>Do you want to place all your personal property in the Trust: {gift.personalPropertyQuestion}</p>
                                    {gift.personalPropertyQuestion === "No" && <p>Description of Property: {gift.personalPropertyDescription}</p>}
                                </div>
                                }                                 

                            </div>
                        );
                    })}                   
                    
                </div>

                {/* Step 5 */}
                <div>
                    <h2>Step 5</h2>
                    <h5>Beneficiaries</h5>                    
                    
                    <p>Beneficiaries Names: {lt.beneficiariesNames.map((name, index) => {
                        return(
                            <p key={index}>{name}</p>
                        )
                    })}</p>

                    {lt.giveToAlt.map((g, index) => {
                        return(
                            <div key={index}>
                                {index !== 0 &&
                                <div>
                                    <p>Name Specific Gift you will like to make from the trust:</p>
                                    <p>Item: {g.giveTheFollowingItems}</p>
                                    <p>To: {g.to}</p>
                                    <p>Alternate Recipient: {g.alternateRecipient}</p>
                                    <hr></hr>
                                </div>
                                }
                            </div>
                        );
                    })}
                    {/* <p>Name Specific Gift you will like to make from the trust:</p>
                    <p>Items: {lt.giveTheFollowingItems}</p>
                    <p>To: {lt.to}</p>
                    <p>Alternate Recipient: {lt.alternateRecipient}</p> */}
                </div>                                                                

                {/* Step 6 */}
                <div>
                    <h2>Step 6</h2>
                    <h5>Charity</h5>

                    {lt.step5Charities.map((charity, index) => {
                        return(
                        <div>
                            <p>Name of Charity: {charity.nameOfCharity}</p>
                            <p>Gift: {charity.gift}</p>
                            <hr></hr>
                        </div>
                    );})}
                    {/* <p>Name of Charity: {lt.nameOfCharity}</p>
                    <p>Gift: {lt.gift}</p> */}
                </div>

                {/* Step 7 */}
                <div>
                    <h2>Step 7</h2>
                    <h5>Subtrust</h5>

                    <p>Do you want to create Subtrust for Beneficiaries that are young or cannot handle the gift: {lt.subtrustQuestion}</p>
                    {lt.subtrustQuestion === "No" &&
                    <div>
                        <p>Name of Person: {lt.subtrustName}</p>
                        <p>Age Limit: {lt.subtrustAge}</p>
                    </div>
                    }
                </div>

                {/* Step 8 */}
                <div>
                    <h2>Step 8</h2>
                    <h5>Pour Over Will</h5>
                    <p>Do You Want Pour- Over Will (Do you want to include Pour-Over Will): {lt.pourOverWillQuestion}</p>
                    {/* {lt.pourOverWillQuestion === "Yes" &&
                    <a>{lt.pourOverWillFile}</a>
                    } */}
                </div>

                {/* Step 9 */}
                <div>
                    <h2>Step 9</h2>
                    <h5>Additional Instruction</h5>

                    <p>Any additional instruction for the Trust that you will like to be add for the time you are alive: {lt.additionalInstructionOne}</p>
                    <p>Any additional instruction for the Trust that you will like to add following you demise or the time you are incapacitated: {lt.additionalInstructionTwo}</p>
                </div>

                {/* Step 10 */}
                <div>
                    <h2>Step 10</h2>
                    <h5>Trustee Remuneration</h5>  

                    <p>Should the Trustee be renumirated for taking on the trust: {lt.remunerationQuestion}</p>
                    {lt.remunerationQuestion === "Yes" &&
                    <div>
                        <p>Instruction of renumiration: {lt.remunerationInstruction}</p>
                        <p>Amount: {lt.remunerationAmount}</p>
                        <p>Period: {lt.remunerationPeriod}</p>
                    </div>
                    }                  
                </div>                

                {/* Step 11 */}
                <div>
                    <h2>Step 11</h2>

                    <h5>Signature and Selfie</h5>
                    <img style={{display: "block", width: 300, height: 100}} src={process.env.REACT_APP_API_URL + "/uploads/" + lt.signature}></img>

                    {/* <h5>Grantor Signature</h5> */}
                    {/* <img style={{display: "block", width: 300, height: 100}} src={process.env.REACT_APP_API_URL + "/uploads/" + lt.signatureGrantor}></img> */}

                    {/* <h5>Trustee Signature</h5> */}
                    {/* <img style={{display: "block", width: 300, height: 100}} src={process.env.REACT_APP_API_URL + "/uploads/" + lt.signatureTrustee}></img> */}

                    {/* <h5>Successor Signature</h5> */}
                    {/* <img style={{display: "block", width: 300, height: 100}} src={process.env.REACT_APP_API_URL + "/uploads/" + lt.signatureSuccessor}></img> */}

                    {/* <h5>Afidavit from Notary Public</h5>
                    <a href={process.env.REACT_APP_API_URL + "/uploads/" + lt.affidavit}>{process.env.REACT_APP_API_URL + "/uploads/" + lt.affidavit}</a> */}

                    <p>Date: {lt.date}</p>
                    <p>Place: {lt.place}</p>
                    <p>Time: {lt.time}</p>
                                        
                </div>     

            </div>
            }
        </div>
    )
}

export default PrintLivingTrust
