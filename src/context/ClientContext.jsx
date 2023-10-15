import jwt_decode from "jwt-decode";
import React, { createContext, useState } from "react";

export const ClientContext = createContext();

export function ClientContextProvider(props) {
  const [clients, setClients] = useState([]);
  const [clientsProcessHistory, setClientsProcessHistory] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [typeDocument, setTypeDocument] = useState(0);
  const [documentNumber, setDocumentNumber] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [cityId, setCityId] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [motoBranch, setMotoBranch] = useState(0);
  const [knowUs, setKnowUs] = useState(0);
  const [dateNeedContact, setDateNeedContact] = useState("");
  const [dateGetContact, setDateGetContact] = useState("");
  const [dateCreation, setDateCreation] = useState("");
  const [motoRefId, setMotoRefId] = useState(0);
  const [gotSavings, setGotSavings] = useState(false);
  const [savings, setSavings] = useState(0);
  const [bornDate, setBornDate] = useState("");
  const [bornSiteId, setBornSiteId] = useState(0);
  const [expeditionDocumentDate, setExpeditionDocumentDate] = useState("");
  const [siteExpeditionId, setSiteExpeditionId] = useState(0);
  const [address, setAddress] = useState("");
  const [civilStateId, setCivilStateId] = useState(0);
  const [typeHomeId, setTypeHomeId] = useState(0);
  const [reportId, setReportId] = useState(0);
  const [educationLevelId, setEducationLevelId] = useState(0);
  const [statusWorkId, setStatusWorkId] = useState(0);
  const [dealTypeId, setDealTypeId] = useState(0);
  const [socialSecurityId, setSocialSecurityId] = useState(0);
  const [cargo, setCargo] = useState("");
  const [cameraComercial, setCameraComercial] = useState("");
  const [monthIncome, setMonthIncome] = useState(0);
  const [aditionalIncome, setAditionalIncome] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [nitCompany, setNitCompany] = useState("");
  const [addresCompany, setAddresCompany] = useState("");
  const [companyPhone, setCompanyPhone] = useState(0);
  const [timeWorking, setTimeWorking] = useState("");
  const [personalReferent, setPersonalReferent] = useState("");
  const [familyReferent, setFamilyReferent] = useState("");
  const [status, setStatus] = useState(1);

  //code para guardar info de progreso
  const [creditResponseId, setCreditResponseId] = useState();
  const [statusProcessId, setStatusProcessId] = useState();
  const [optionAlternativeId, setOptionAlternativeId] = useState();
  const [detailsOperation, setDetailsOperation] = useState();
  const [clientIdProcess, setClientIdProcess] = useState();

  //code

  const clientProcessInfo = {
    creditResponseId,
    statusProcessId,
    optionAlternativeId,
    detailsOperation,
    clientIdProcess,
    setCreditResponseId,
    setStatusProcessId,
    setOptionAlternativeId,
    setDetailsOperation,
    setClientIdProcess,
  };

  const clientsFields = {
    name,
    lastName,
    age,
    typeDocument,
    documentNumber,
    stateId,
    cityId,
    email,
    phone,
    motoBranch,
    knowUs,
    dateNeedContact,
    dateGetContact,
    dateCreation,
    motoRefId,
    gotSavings,
    savings,
    bornDate,
    bornSiteId,
    expeditionDocumentDate,
    siteExpeditionId,
    address,
    civilStateId,
    typeHomeId,
    reportId,
    educationLevelId,
    statusWorkId,
    dealTypeId,
    socialSecurityId,
    cargo,
    cameraComercial,
    monthIncome,
    aditionalIncome,
    companyName,
    nitCompany,
    addresCompany,
    companyPhone,
    timeWorking,
    personalReferent,
    familyReferent,
    status,
    setName,
    setLastName,
    setAge,
    setTypeDocument,
    setDocumentNumber,
    setStateId,
    setCityId,
    setEmail,
    setPhone,
    setMotoBranch,
    setKnowUs,
    setDateNeedContact,
    setDateGetContact,
    setDateCreation,
    setMotoRefId,
    setGotSavings,
    setSavings,
    setBornDate,
    setBornSiteId,
    setExpeditionDocumentDate,
    setSiteExpeditionId,
    setAddress,
    setCivilStateId,
    setTypeHomeId,
    setReportId,
    setEducationLevelId,
    setStatusWorkId,
    setDealTypeId,
    setSocialSecurityId,
    setCargo,
    setCameraComercial,
    setMonthIncome,
    setAditionalIncome,
    setCompanyName,
    setNitCompany,
    setAddresCompany,
    setCompanyPhone,
    setTimeWorking,
    setPersonalReferent,
    setFamilyReferent,
    setStatus,
    clients,
    setClients,
    clientProcessInfo,
    clientsProcessHistory,
    setClientsProcessHistory, 
  };

  return (
    <ClientContext.Provider value={{ clientsFields }}>
      {props.children}
    </ClientContext.Provider>
  );
}
