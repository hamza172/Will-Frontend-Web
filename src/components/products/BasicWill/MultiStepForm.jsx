import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import ReqDetails from "./requester";
import WillOwnerDetails from "./willowner";
import ExecutoerDetails from "./executoerDetails";
import AdditionalInfo from "./AddInfo";
import Checkout from "./payment";

const steps = [
  { id: "requester" },
  { id: "will" },
  { id: "Executor" },
  { id: "additional" },
  { id: "review" },
];

const defaultData = {
  requesterTitle: "",
  requesterFname: "",
  requesterMname: "",
  requesterLname: "",
  requesterAdd: "",
  requesterEmail: "",
  requesterPhNo: "",
  requesterAddLine1: "",
  requesterAddLine2: "",
  requesterTown: "",
  requesterCountry: "",
  requesterPostCode: "",
  promotionCode: "",
  willOwnerTitle: "",
  willOwnerFname: "",
  willOwnerSurname: "",
  willOwnerEmail: "",
  willOwnerMname: "",
  willOwnerDob: "",
  willOwnerGender: "",
  willOwnerAddLine1: "",
  willOwnerAddLine2: "",
  willOwnerCity: "",
  willOwnerCountry: "",
  willOwnerUK: "",
  willOwnerPostcode: "",
  willOwnerPhNo: "",
  dateOfWill: "",
  storedWillAdd: "",
  additionalIns: "",
  willReminderFr: "",
  willSource: "",
  createdBy: "",
  willRefNo: 0,
  willStorageRefNo: 0,
};

const MultiStepForm = ({ images, user }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "requester":
      return <ReqDetails {...props} user={user} />;
    case "will":
      return <WillOwnerDetails {...props} />;
    case "Executor":
    return <ExecutoerDetails {...props} />;
    case "additional":
      return <AdditionalInfo {...props} user={user} />;
    case "review":
      return <Checkout {...props} />;

    default:
      return null;
  }
};

export default MultiStepForm;
