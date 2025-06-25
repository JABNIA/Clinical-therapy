import { useEffect, useState } from "react"
import supabase from "../config/supabaseClient"
import { AdminWrapper } from "../styles/admin-styled";


type patientData = {
  id: number;
  created_at:string;
  patient_name: string;
  patient_email: string;
  patient_problem: string;
  telephone_number: string;
  visit_date: string;
  visit_hour: string;
};



function Admin() {
  const [error, setError] = useState<boolean | null>(null) 
  const [patients, setPatients] = useState<null | patientData[]>(null)
  console.log(error);
  useEffect(() => {
    const fetchPatientData = async () => {
      const {data, error} = await supabase.from("Clinic_patient_visit_data").select("*")

      if(error){
        setError(true)
        setPatients(null)
        console.error("something went Wrong")
      }
      
      if(data){
        setError(null);
        setPatients(data)   
      }
    }

    fetchPatientData()
  }, [])
  console.log(patients)
  return (
    <AdminWrapper>
      <h2>Upcoming visits</h2>
      <IncomingVisits />
      <h2>Previous Passed visits</h2>
      <PassedVisits />
      <h2>Terminated Visits</h2>
      <TerminatedVisits /> 
    </AdminWrapper>
  )
}

export default Admin


function IncomingVisits() {
  const [patients, setPatients] = useState<null | patientData[]>(null)
  const handleVisitPassed = async (id: number) => {
    const selectedVisit = await supabase.from("Clinic_patient_visit_data").select().eq("id", id)
    if (selectedVisit.data === null) return;
    const visitObj = selectedVisit.data[0]
    console.log(visitObj)
    await supabase.from("Visited").insert([{
      id: visitObj.id,
      created_at: visitObj.created_at,
      patient_name: visitObj.patient_name,
      patient_email: visitObj.patient_email,
      patient_problem: visitObj.patient_problem,
      telephone_number: visitObj.telephone_number,
      visit_date: visitObj.visit_date,
      visit_hour: visitObj.visit_hour,
    }])
    await supabase.from("Clinic_patient_visit_data").delete().eq("id", id );
    const {data} = await supabase.from("Clinic_patient_visit_data").select("*")

    setPatients(data)
  }

  const handleTerminateVisit = async (id: number) => {
    const selectedVisit = await supabase.from("Clinic_patient_visit_data").select().eq("id", id);
    if (selectedVisit.data === null) return;
    const visitObj = selectedVisit.data[0]
    console.log(visitObj)
    await supabase.from("terminated").insert([{
      id: visitObj.id,
      created_at: visitObj.created_at,
      patient_name: visitObj.patient_name,
      patient_email: visitObj.patient_email,
      patient_problem: visitObj.patient_problem,
      telephone_number: visitObj.telephone_number,
      visit_date: visitObj.visit_date,
      visit_hour: visitObj.visit_time,
    }])
    await supabase.from("Clinic_patient_visit_data").delete().eq("id", id );
    const {data} = await supabase.from("Clinic_patient_visit_data").select("*")

    setPatients(data)

  }
  useEffect(() => {
    const fetchPatientData = async () => {
      const {data, error} = await supabase.from("Clinic_patient_visit_data").select("*")

      if(error){
        setPatients(null)
        console.error("something went Wrong")
      }
      
      if(data){
        setPatients(data)   
      }
    }

    fetchPatientData()
  }, [])
  return (
    <div className="table-container">
     <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Problem</th>
            <th>Mobile Phone</th>
            <th>Visit date</th>
            <th>Visit Hour</th>
            <th>Delete</th>     
            <th>Pass</th>
          </tr>
        </thead>
        <tbody>
          {patients?.map(patient => { 
          return (
            <tr key={patient.id}>
              <td className="table-data">{patient.id}</td>
              <td className="table-data">{patient.patient_name}</td>
              <td className="table-data">{patient.patient_email}</td>
              <td className="table-data">{patient.patient_problem}</td>
              <td className="table-data">{patient.telephone_number}</td>
              <td className="table-data">{patient.visit_date}</td>
              <td className="table-data">{patient.visit_hour}</td>
              <td className="visit-passed" onClick={() => handleVisitPassed(patient.id)}>Visisted</td>
              <td className="terminate" onClick={() => handleTerminateVisit(patient.id)}>Terminate</td>
            </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  )
}


function PassedVisits() {
  const [patients, setPatients] = useState<null | patientData[]>(null)

  useEffect(() => {
    const fetchPatientData = async () => {
      const {data, error} = await supabase.from("Visited").select("*")

      if(error){
        setPatients(null)
        console.error("something went Wrong")
      }
      
      if(data){
        setPatients(data)   
      }
    }

    fetchPatientData()
  }, [])
  return (
    <div  className="table-container">
     <table className="visited">
        <thead>
          <tr>
            <th className="visited-th">Id</th>
            <th className="visited-th">Name</th>
            <th className="visited-th">Email</th>
            <th className="visited-th">Problem</th>
            <th className="visited-th">Mobile Phone</th>
            <th className="visited-th">Visit date</th>
            <th className="visited-th">Visit Hour</th>
          </tr>
        </thead>
        <tbody>
          {patients?.map(patient => { 
            return (
              <tr key={patient.id}>
              <td className="visited-td">{patient.id}</td>
              <td className="visited-td">{patient.patient_name}</td>
              <td className="visited-td">{patient.patient_email}</td>
              <td className="visited-td">{patient.patient_problem}</td>
              <td className="visited-td">{patient.telephone_number}</td>
              <td className="visited-td">{patient.visit_date.substring(0, 10)}</td>
              <td className="visited-td">{patient.visit_hour}</td>
            </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  )
}



function TerminatedVisits() {
  const [patients, setPatients] = useState<null | patientData[]>(null)

  useEffect(() => {
    const fetchPatientData = async () => {
      const {data, error} = await supabase.from("terminated").select("*")

      if(error){
        setPatients(null)
        console.error("something went Wrong")
      }
      
      if(data){
        setPatients(data)   
      }
    }

    fetchPatientData()
  }, [])
  return (
    <div  className="table-container">
     <table className="terminated">
        <thead>
          <tr>
            <th className="terminated-th">Id</th>
            <th className="terminated-th">Name</th>
            <th className="terminated-th">Email</th>
            <th className="terminated-th">Problem</th>
            <th className="terminated-th">Mobile Phone</th>
            <th className="terminated-th">Visit date</th>
            <th className="terminated-th">Visit Hour</th>
          </tr>
        </thead>
        <tbody>
          {patients?.map(patient => { 
            return (
              <tr key={patient.id}>
              <td className="terminated-td">{patient.id}</td>
              <td className="terminated-td">{patient.patient_name}</td>
              <td className="terminated-td">{patient.patient_email}</td>
              <td className="terminated-td">{patient.patient_problem}</td>
              <td className="terminated-td">{patient.telephone_number}</td>
              <td className="terminated-td">{patient.visit_date.substring(0, 10)}</td>
              <td className="terminated-td">{patient.visit_hour}</td>
            </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  )
}