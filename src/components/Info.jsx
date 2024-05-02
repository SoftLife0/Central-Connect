// Info.jsx
import React from 'react';

const Info = ({ formData, onChange }) => {
  
  const genderOptions = [
    { value: '', label: 'Select an option...', disabled: true },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ];

  const othersOptions = [
    { value: '', label: 'Select an option...', disabled: true },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  const satisfactionOptions = [
    { value: '', label: 'Select an option...', disabled: true },
    { value: 'Very Satisfied', label: 'Very Satisfied' },
    { value: 'Satisfied', label: 'Satisfied' },
    { value: 'Unsatisfied', label: 'Unsatisfied' },
    { value: 'Very Unsatisfied', label: 'Very Unsatisfied' }
  ];

  return (
    <>

      <div className='headings'>
        <h2>Personal Information</h2>
      </div>

      <div className="form-control">
        <label htmlFor="gender" className="form-label">Gender</label>
        <select 
          className="answerCard" 
          id="gender" 
          name="gender" 
          required
          value={formData["Gender"]} // Assuming "Gender" is the key in your formData state object
          onChange={(event) => onChange("Gender", event.target.value)} // Assuming onChange is your change handler function
        >
          {genderOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="workAddress" className="form-label">Work Address</label>
        <input 
          className="answerCard" 
          id="workAddress" 
          name="workAddress" 
          placeholder="Work Address" 
          type="text" 
          value={formData["Work Address"]} // Assuming "Work Address" is the key in your formData state object
          onChange={(event) => onChange("Work Address", event.target.value)} // Assuming onChange is your change handler function
        />
      </div>

      <div className="form-control">
        <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
        <input 
          className="answerCard" 
          id="mobileNumber" 
          name="mobileNumber" 
          placeholder="Mobile Number" 
          type="text" 
          value={formData["Mobile Number"]}
          onChange={(event) => onChange("Mobile Number", event.target.value)} 
        />
      </div>

      <div className="form-control">
        <label htmlFor="residence" className="form-label">Country of Residence</label>
        <input 
          className="answerCard" 
          id="residence" 
          name="residence" 
          placeholder="Country of Residence" 
          type="text" 
          value={formData["Country of Residence"]} 
          onChange={(event) => onChange("Country of Residence", event.target.value)} 
        />
      </div>

      <div className="form-control">
        <label htmlFor="programmePursued" className="form-label">Programme Pursued</label>
        <input 
          className="answerCard" 
          id="programmePursued" 
          name="programmePursued" 
          placeholder="Programme Pursued" 
          type="text" 
          value={formData["Programme Pursued"]} 
          onChange={(event) => onChange("Programme Pursued", event.target.value)} 
        />
      </div>

      <div className="form-control">
        <label htmlFor="yearOfCompletion" className="form-label">Year of Completion</label>
        <input 
          className="answerCard" 
          id="yearOfCompletion" 
          name="yearOfCompletion" 
          placeholder="Year of Completion" 
          type="number" 
          value={formData["Year of Completion"]} 
          onChange={(event) => onChange("Year of Completion", event.target.value)} 
        />
      </div>

      <div className="form-control">
        <label htmlFor="others" className="form-label">Since your graduation have you gone on to take any other programme?</label>
        <select 
          className="answerCard" 
          id="others" 
          name="others" 
          value={formData["Since your graduation have you gone on to take any other programme?"]} 
          onChange={(event) => onChange("Since your graduation have you gone on to take any other programme?", event.target.value)}
        >
          {othersOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {formData["Since your graduation have you gone on to take any other programme?"] === 'Yes' && (
        <>
          <div className="form-control">
            <label htmlFor="pro" className="form-label">If Yes, List programme</label>
            <input 
              className="answerCard" 
              id="pro" 
              name="pro" 
              placeholder="List programme" 
              type="text" 
              value={formData["If Yes, List programme"]} 
              onChange={(event) => onChange("If Yes, List programme", event.target.value)} 
            />
          </div>
          
          {/* Additional fields for the "Yes" option */}
          <div className="form-control">
            <label htmlFor="institution" className="form-label">Name of Institution</label>
            <input 
              className="answerCard" 
              id="institution" 
              name="institution" 
              placeholder="Name of Institution" 
              type="text" 
              value={formData["Name of Institution"]} 
              onChange={(event) => onChange("Name of Institution", event.target.value)} 
            />
          </div>
          
          <div className="form-control">
            <label htmlFor="completed" className="form-label">Year of Completion</label>
            <input 
              className="answerCard" 
              id="completed" 
              name="completed" 
              placeholder="Year of Completion" 
              type="text" 
              value={formData["Year of Completion"]} 
              onChange={(event) => onChange("Year of Completion", event.target.value)} 
            />
          </div>
          
          <div className="form-control">
            <label htmlFor="satisfaction" className="form-label">Overall satisfaction with academic preparation</label>
            <select 
              className="answerCard" 
              id="satisfaction" 
              name="satisfaction" 
              value={formData["Overall satisfaction with academic preparation"]} 
              onChange={(event) => onChange("Overall satisfaction with academic preparation", event.target.value)}
            >
              {satisfactionOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </>
      )}



    </>
  );
};

export default Info;
