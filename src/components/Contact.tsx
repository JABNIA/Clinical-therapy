import { useEffect, useState } from "react";
import { ContactWrapper } from "../styles/contacts-styled";
import supabase from "../config/supabaseClient";

const hours: string[] = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];
const today = new Date()

// const punctuationNumbersArray = ["0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","\\","|",";",":","'",'"',",","<",".",">","/","?","`","~"]

export type patientData = {
  patient_name: string;
  patient_email: string;
  patient_problem: string;
  telephone_number: string;
  visit_date: string;
  visit_hour: string;
};

function Contact() {
  const [success, setSucess] = useState<boolean>(false);
  const [date, setDate] = useState<string>(`${today.getFullYear()}-${today.getMonth() + 1 }-${today.getDate()}`)
  const [patientData, setPatientData] = useState({
    patient_name: "",
    patient_email: "",
    patient_problem: "",
    telephone_number: "",
    visit_date: date,
    visit_hour: "",
  });
  const [aveilableHours, setAveilableHours] = useState<string[]>([]);

    



  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault
    if(/^[a-zA-Z\s]+$/.test(patientData.patient_name) || isValidStrictEmail(patientData.patient_name) || isValidPhoneNumber(patientData.telephone_number)){
      setTimeout(() => setPatientData({
          patient_name: "",
          patient_email: "",
          patient_problem: "",
          telephone_number: "",
          visit_date: "",
          visit_hour: "",
      }), 2000)
      setSucess(true);
      console.log("done");
    }else{
      setSucess(false);
      console.log("problem");
      return;
    }

    const { error } = await supabase.from("Clinic_patient_visit_data").insert([{
          patient_name: patientData.patient_name,
          patient_email: patientData.patient_email,
          patient_problem: patientData.patient_problem,
          telephone_number: patientData.telephone_number,
          visit_date: patientData.visit_date,
          visit_hour: patientData.visit_hour,
          }])

    if(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getHours = async () => {
    const dateHours = await supabase.from("Clinic_patient_visit_data")
                      .select("visit_hour")
                      .eq("visit_date", date);
    const dayHours = dateHours.data?.map(date => date.visit_hour)
    const selectableHours = hours.filter(hour => {
      if (dayHours?.includes(hour)) return false;
      return true;
    }); 
    setAveilableHours(selectableHours);
    console.log(selectableHours);
  }

  getHours()
}, [date])

  return (
    <ContactWrapper>
      <h2 className="heading">Contact</h2>
      <div>
        <div></div>
        <div>
          <p>Email: example@email.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Therapy Lane, City, State, ZIP</p>
          <p>Avilable for in-person and virtual sessions</p>
          <p>appointments from Monday to Friday, 9 AM to 5 PM</p>
        </div>
      </div>
      <h2
        className="heading"
        style={{
          padding: "20px 0px",
          margin: "20px 0",
          textAlign: "center",
          borderTop: "2px solid var(--primary)",
        }}
      >
        For visit fill the form below
      </h2>
      <div className="visit-form">
        <form action="" method="POST">
          <NameInput patientData={patientData} setPatientData={setPatientData}/>
          <EmailInput patientData={patientData} setPatientData={setPatientData} />
          <div className="form-group">
            <label htmlFor="problem">Describe Your Issue</label>
            <textarea
              name="problem"
              value={patientData.patient_problem}
              placeholder="Describe your issue or reason for visit"
              onChange={(e) =>
                setPatientData((prev) => {
                  return { ...prev, patient_problem: e.target.value };
                })
              }
            />
            <p className="warning">
              ● Note if problem is deskribed as random gibberish visit record
              will be terminated!{" "}
            </p>
          </div>
          <InputNumber patientData={patientData} setPatientData={setPatientData}
          />
          <div className="form-group">
            <label htmlFor="date">Pick date of visit</label>
            <input
              type="date"
              name="date"
              value={date}
              placeholder="Select a date"
              onChange={(e) => {
                setDate(e.target.value)
                }}
            />
          </div>
          <HourInput patientData={patientData} setPatientData={setPatientData} visit={aveilableHours}/>
        </form>
      </div>
      <button
      className="submit-btn"
      onClick={(e) => handleSubmit(e)}
      >press here </button>
      <Message result={success}/>
    </ContactWrapper>
  );
}

export default Contact;

function NameInput({
  patientData,
  setPatientData,
}: {
  patientData: patientData;
  setPatientData: React.Dispatch<React.SetStateAction<patientData>>;
}) {
  const [firstLoad, setFirstLoad] = useState(true);
  return (
    <div className="form-group">
      <label htmlFor="name">Enter Your Name</label>
      <input
        className={
          firstLoad ? "" : /^[a-zA-Z\s]+$/.test(patientData.patient_name) ? "" : "error"
        }
        type="text"
        name="name"
        value={patientData.patient_name}
        placeholder="Your full name"
        onChange={(e) => {
          setFirstLoad(false);
          setPatientData((prev) => {
            return { ...prev, patient_name: e.target.value };
          });
        }}
      />
      {firstLoad ? null : (
        <>
          {patientData.patient_name.length < 5 && (
            <p className="error-message">
              ● Name must be at least 5 characters long
            </p>
          )}
          {!/^[a-zA-Z\s]+$/.test(patientData.patient_name) && (
            <p className="error-message">● please enter only latin letters!</p>
          )}
        </>
      )}
    </div>
  );
}

function EmailInput({
  patientData,
  setPatientData,
}: {
  patientData: patientData;
  setPatientData: React.Dispatch<React.SetStateAction<patientData>>;
}) {
    const [firstLoad, setFirstLoad] = useState(true);

  return (
    <div className="form-group">
      <label htmlFor="e-mail">E-mail</label>
      <input
        className={firstLoad ? "" : isValidStrictEmail(patientData.patient_email) ? "" : "error"}
        type="text"
        name="e-mail"
        value={patientData.patient_email}
        placeholder="your@email.com"
        onChange={(e) =>{
            setFirstLoad(false);
            setPatientData((prev) => {
            return { ...prev, patient_email: e.target.value };
          })
        }}
      />
      {
        firstLoad ? null : patientData.patient_email.length < 5 ? (
            <p className="error-message">
                ● Invalid format, please enter a valid email address
            </p>
        ) : null}
    </div>
  );
}

function InputNumber({patientData, setPatientData}:{patientData: patientData, setPatientData: React.Dispatch<React.SetStateAction<patientData>>}) {
    const [firstLoad, setFirstLoad] = useState(true);
    
    return (
        <div className="form-group">
            <label htmlFor="tel">Telephone Number</label>
            <input
              className={firstLoad ? "" : isValidPhoneNumber(patientData.telephone_number) ? "" : "error"}
              type="tel"
              name="tel"
              maxLength={15}
              value={patientData.telephone_number}
              placeholder="(123) 456-7890"
              onChange={(e) => { 
                setFirstLoad(false);
                setPatientData((prev) => {
                  return { ...prev, telephone_number: e.target.value };
                })
              }}
            />
            {firstLoad ? null : 
            <>
            {patientData.telephone_number.length > 8 && isValidPhoneNumber(patientData.telephone_number) ? null : <p className="error-message">● Phone number must be at least 8 digits long</p> }
            {isValidPhoneNumber(patientData.telephone_number) ? null : <p className="error-message">● Please enter only numbers</p>}
            </>
            } 
        </div>
    )
}

function HourInput({patientData, setPatientData, visit}
  :
  {patientData: patientData, 
   setPatientData: React.Dispatch<React.SetStateAction<patientData>>,
   visit: string[] 
  }) {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
        <p>Select Hour</p>
        <div className="hours" onClick={() => setOpen(!open)}>{patientData.visit_hour}</div>
        {
            open &&
            <ul className="hours-list">
            {visit.map((hour, index) => 
            <li key={index} 
                className="hour-item" 
                onClick={() => {
                    setOpen(false);
                    setPatientData((prev) => {
                        return { ...prev, visit_hour: hour };
                    })}
                }>{hour}
            </li>)}
        </ul>
        }
        </>
    )
}

function Message({ result }: { result: boolean }) {
  return (
    <div>
      <p className={result ? "message pass" : "message message-error"}>
        {
          result ? 
          "Visit was arrangeed succesfuly. Have a good day"
          :
          "Please check form and make sure everything filled correctly" 
        }
      </p>
    </div>
  )
}


function isValidStrictEmail(email: string) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function isValidPhoneNumber(phone: string) {
  const regex = /^[\+]?[0-9][0-9\-\.\s\(\)]{0,14}[0-9]$/;
  return regex.test(phone);
}