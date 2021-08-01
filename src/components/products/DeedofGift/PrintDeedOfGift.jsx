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

const PrintDeedOfGift = () => {

    const [deed, setDeed] = useState();

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_URL + '/managewill/get_deed_of_gift', {
            deedID: parseURLParams(window.location.href).deed_id[0]
        })
        .then((response) => {
          setDeed(response.data.deed);
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
            
            {deed &&
                <div>

                    {/* Step 1 */}
                    <div>
                        <h2>Step 1</h2>
                        <p>Country of Gift: {deed.countryOfGift}</p>
                        <p>State of Gift: {deed.stateOfGift}</p>
                        <p>Do you want to be able to revoke this gift?: {deed.revokeThisGift}</p>
                        <p>Date of Transfer: {deed.dateOfTransfer}</p>
                    </div>

                    {/* Step 2 */}
                    <div>
                        <h2>Step 2</h2>
                        <p>Type of Donor: {deed.typeOfDonor}</p>
                        {deed.typeOfDonor === "Individual" &&
                            <div>
                                <p>Full Name of Donor: {deed.donorFullName}</p>
                                <p>Address of Donor: {deed.donorAddress}</p>
                            </div>
                        }                
                        {deed.typeOfDonor === "Company" &&
                            <div>
                                <p>Full Name of Company: {deed.donorFullName}</p>
                                <p>Address of Company: {deed.donorAddress}</p>
                            </div>
                        }
                    </div>

                    {/* Step 3 */}
                    <div>
                        <h2>Step 3</h2>
                        <p>Type of Donee: {deed.typeOfDonee}</p>
                        {deed.typeOfDonee === "Individual" &&
                            <div>
                                <p>Full Name of Donee: {deed.doneeFullName}</p>
                                <p>Address of Donee: {deed.doneeAddress}</p>
                                <p>Relationship between Donor and Donee: {deed.relationshipDonorDonee}</p>
                            </div>
                        }
                        {deed.typeOfDonee === "Company" &&
                            <div>
                                <p>Full Name of Company: {deed.doneeFullName}</p>
                                <p>Address of Company: {deed.doneeAddress}</p>
                                <p>Is Donee a Minor?: {deed.isDoneeMinor}</p>
                                {deed.isDoneeMinor === "Yes" &&
                                <div>
                                    <p>Full Name of Guardian: {deed.doneeGuardianName}</p>
                                    <p>Address of Guardian: {deed.doneeGuardianAddress}</p>
                                </div>
                                }
                            </div>
                        }
                    </div>

                    {/* Step 4 */}
                    <div>
                        <h2>Step 4</h2>
                        <p>Type of Gift: {deed.typeOfGift}</p>
                        {(deed.typeOfGift === "Real Property" || deed.typeOfGift === "Personal Property") &&
                        <div>
                            <p>Description of Gift: {deed.descriptionOfGift}</p>
                            <p>Purpose and Usage of Gift: {deed.purposeOfGift}</p>
                            <p>When Donee take possession: {deed.giftPossessionTime}</p>
                            {deed.giftPossessionTime === "Specific Date" &&
                            <p>Date: {deed.specificDate}</p>
                            }
                        </div>
                        }
                        {deed.typeOfGift === "Monetary Gift" &&
                        <div>
                            <p>Monetary Value: {deed.monetaryValue}</p>
                            <p>Purpose and Usage of Gift: {deed.purposeOfGift}</p>
                            <p>When Donee take possession: {deed.giftPossessionTime}</p>
                            {deed.giftPossessionTime === "Specific Date" &&
                            <p>Date: {deed.specificDate}</p>
                            }
                        </div>
                        }

                    </div>

                    {/* Step 5 */}
                    <div>
                        <h2>Step 5</h2>
                        {deed.additionalClauses.map((clause, index) => {
                            return(
                                <p key={index}>Additional Cluase: {clause}</p>
                            );
                        })}
                    </div>             

                    {/* Step 6 */}
                    <div>
                        <h2>Step 6</h2>
                        <p>Agent FUll Name: {deed.agentFullName}</p>
                        <p>Agent Address: {deed.agentAddress}</p>
                        <p>Add Alternate Agent: {deed.addAlternateAgent}</p>
                        {deed.addAlternateAgent === "Yes" &&
                        <div>
                            <p>Alternate Agent Full Name: {deed.alternateAgentFullName}</p>
                            <p>Alternate Agent Address: {deed.alternateAgentAddress}</p>
                        </div>
                        }
                    </div>
                    
                    {/* Step 7 */}
                    <div>
                        <h2>Step 7</h2>
                        <p>Signature</p>
                        <img style={{display: "block", width: 500, height: 200}} src={process.env.REACT_APP_API_URL + "/uploads/" + deed.signature}></img>
                        {/* <p>Selfie</p>
                        <img src={process.env.REACT_APP_API_URL + "/uploads/" + deed.selfie}></img> */}
                    </div>

                </div>
            }                                         

        </div>
    )
}

export default PrintDeedOfGift
