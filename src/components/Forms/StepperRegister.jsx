import React, {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//component
import ClientRegisterForm from './ClientRegisterForm';
import GeneralInformationClientForm from './GeneralInformationClientForm';
import JobInformationForm from './JobInformationForm';
import ModalConfirm from "../Modals/ModalConfirm";
//context
import { ClientContext } from "../../context/ClientContext";
const steps = ['Informacion General', 'Informacion de interes', 'Datos laborales'];
//services
import { createClients } from '../../services/clients';

export default function StepperRegister() {
  const { clientsFields } = useContext(ClientContext);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [modalOpen, setModalOpen] = useState(false);


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAccept = () => {

    handleSubmitData(1);
    // Lógica para aceptar
    handleCloseModal();
  };
  const handleReject = () => {
    // Lógica para rechazar
    handleCloseModal();
  };


  const handleSubmitData = (cases) => {
    
    let objDataInformation = {
       "name": clientsFields.name,
        "last_name": clientsFields.lastName,
        "age": parseInt(clientsFields.age),
        "type_document":parseInt(clientsFields.typeDocument),
        "document_number":parseInt(clientsFields.documentNumber),
        "state_id":parseInt(clientsFields.stateId),
        "city_id":parseInt(clientsFields.cityId),
        "email":clientsFields.email,
        "phone":parseInt(clientsFields.phone),
        "moto_branch":parseInt(clientsFields.motoBranch),
        "know_us":parseInt(clientsFields.knowUs),
        "date_need_contact":clientsFields.dateNeedContact,
        "date_get_contact":clientsFields.dateGetContact,
        "date_creation":clientsFields.dateCreation,
        "moto_ref_id":parseInt(clientsFields.motoRefId),
        "got_savings":clientsFields.gotSavings,
        "savings":parseInt(clientsFields.savings),
        "born_date":clientsFields.bornDate,
        "born_site_id":clientsFields.bornSiteId,
        "expedition_document_date":clientsFields.expeditionDocumentDate,
        "site_expedition_id":parseInt(clientsFields.siteExpeditionId),
        "address":clientsFields.address,
        "civil_state_id":parseInt(clientsFields.civilStateId),
        "type_home_id":parseInt(clientsFields.typeHomeId),
        "report_id":parseInt(clientsFields.reportId),
        "education_level_id":parseInt(clientsFields.educationLevelId),
        "status_work_id":parseInt(clientsFields.statusWorkId),
        "deal_type_id":parseInt(clientsFields.dealTypeId),
        "social_security_id":parseInt(clientsFields.socialSecurityId),
        "cargo":clientsFields.cargo,
        "camera_comercial":clientsFields.cameraComercial,
        "month_income":parseInt(clientsFields.monthIncome),
        "aditional_income":parseInt(clientsFields.aditionalIncome),
        "company_name":clientsFields.companyName,
        "nit_company":clientsFields.nitCompany,
        "addres_company":clientsFields.addresCompany,
        "company_phone":parseInt(clientsFields.companyPhone),
        "time_working":clientsFields.timeWorking,
        "personal_referent":clientsFields.personalReferent,
        "family_referent":clientsFields.familyReferent,
        "status":parseInt(clientsFields.status),
    }

    switch (cases) { 
        case 0:
        setModalOpen(true);
          break;
        case 1: 
        async function addUser(datos) {
          try {
            const userResponse = await createClients(JSON.stringify(datos));
        
           /*  setTypeResponse(userResponse.status)
            setMessageResponse(userResponse.message) */
            
          } catch (error) {
            console.error('Error al realizar tu solicitud:', error);
          }
        }
        addUser(objDataInformation);          
   
          break;
    
    
       }
    console.log(objDataInformation);
  }

  return (
    <Box sx={{ width: '90%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            {activeStep === 0 ? (
                <ClientRegisterForm />
                ) : activeStep === 1 ? (
                <GeneralInformationClientForm />
                ) : (
               <JobInformationForm />
                )}
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Regresar
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Saltar
              </Button>
            )}

            <Button onClick={activeStep === steps.length - 1 ? () => handleSubmitData(0) : handleNext}>
              {activeStep === steps.length - 1 ? 'Enviar datos' : 'Siguiente'}
            </Button>
          </Box>
        </React.Fragment>
      )}
       <ModalConfirm
            open={modalOpen}
            onClose={handleCloseModal}
            title="¿Confirmaste los datos?"
            text="La información propocionada se almacenara en nuestras bases de datos."
            onAccept={handleAccept}
            onReject={handleReject}
          />
    </Box>
    
  );
}