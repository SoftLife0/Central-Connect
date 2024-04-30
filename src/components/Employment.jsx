import React from 'react';

const Employment = ({ formData, onChange }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const currentOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Working full-time', label: 'Working full-time' },
    { value: 'Working part-time but seeking full-time work', label: 'Working part-time but seeking full-time work' },
    { value: 'Working part-time but not seeking full-time work', label: 'Working part-time but not seeking full-time work' },
    { value: 'Self-employed', label: 'Self-employed' },
    { value: 'Not working and looking for a job', label: 'Not working and looking for a job' },
    { value: 'Not working and not looking for a job', label: 'Not working and not looking for a job' }
    ];

    const jobOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'I found employment prior to graduation', label: 'I found employment prior to graduation' },
    { value: 'I found employment after graduation', label: 'I found employment after graduation' },
    { value: 'I found employment during my national service', label: 'I found employment during my national service' },
    { value: 'I found employment after national service', label: 'I found employment after national service' }
    ];

    const serviceOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Fully related', label: 'Fully related' },
    { value: 'Partial related', label: 'Partial related' },
    { value: 'Not related', label: 'Not related' }
    ];

    const orgtypeOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Private', label: 'Private' },
    { value: 'Government', label: 'Government' },
    { value: 'NGO/INGO', label: 'NGO/INGO' },
    { value: 'Self Employed', label: 'Self Employed' }
    ];

    const salaryOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Below GHC1000', label: 'Below GHC1000' },
    { value: 'Between GHC1000-GHC2000', label: 'Between GHC1000-GHC2000' },
    { value: 'Between GHC2100-GHC3000', label: 'Between GHC2100-GHC3000' },
    { value: 'Between GHC3001-GHC4000', label: 'Between GHC3001-GHC4000' },
    { value: 'Above GHC4000', label: 'Above GHC4000' },
    { value: 'Prefer not to answer', label: 'Prefer not to answer' }
    ];

    const employmentOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'A permanent employee', label: 'A permanent employee' },
    { value: 'A contract employee', label: 'A contract employee' },
    { value: 'A seasonal/temporary employee', label: 'A seasonal/temporary employee' },
    { value: 'Self-employed', label: 'Self-employed' }
    ];

    const skillsOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Very helpful', label: 'Very helpful' },
    { value: 'Helpful', label: 'Helpful' },
    { value: 'Somewhat helpful', label: 'Somewhat helpful' },
    { value: 'Not helpful', label: 'Not helpful' }
    ];

    const timeframeOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Less than 6 months', label: 'Less than 6 months' },
    { value: '6 months to 1 year', label: '6 months to 1 year' },
    { value: '1 year to 18 months', label: '1 year to 18 months' },
    { value: 'Greater than 18 months', label: 'Greater than 18 months' }
    ];

    const earnOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
    ];

  return (
    <>

      <div className='headings'>
        <h2>Employment Information</h2>        
        {/* <p>Kindly fill this form</p> */}
      </div>
      
      <div className="form-control">
        <label htmlFor="current" className="form-label">Current Employment Status</label>
        <select 
          className="answerCard" 
          id="current" 
          name="current" 
          value={formData.current} 
          onChange={handleInputChange}
        >
          {currentOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="job" className="form-label">How long did it take you to find your job?</label>
        <select 
          className="answerCard" 
          id="job" 
          name="job" 
          value={formData.job} 
          onChange={handleInputChange}
        >
          {jobOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="serviceOptions" className="form-label">How related is your current job to your program of study?</label>
        <select 
          className="answerCard" 
          id="serviceOptions" 
          name="serviceOptions" 
          value={formData.serviceOptions} 
          onChange={handleInputChange}
        >
          {serviceOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="orgname" className="form-label">Organization</label>
        <input 
          className="answerCard" 
          id="orgname" 
          name="orgname" 
          placeholder="Organization" 
          required="" 
          type="text" 
          value={formData.orgname} 
          onChange={handleInputChange} 
        />
      </div>

      <div className="form-control">
        <label className="form-label">Organization Address</label>
        <input 
          className="answerCard" 
          // id="orgadd" 
          name="orgadd" 
          placeholder="Organization Address" 
          required
          type="text" 
          value={formData.orgadd} 
          onChange={handleInputChange} 
        />
      </div>

      <div className="form-control">
        <label htmlFor="title" className="form-label">Job Title</label>
        <input 
          className="answerCard" 
          id="title" 
          name="title" 
          placeholder="Job Title" 
          required="" 
          type="text" 
          value={formData.title} 
          onChange={handleInputChange} 
        />
      </div>

      <div className="form-control">
        <label htmlFor="orgtypeOptions" className="form-label">Type of Organization</label>
        <select 
          className="answerCard" 
          id="orgtypeOptions" 
          name="orgtypeOptions" 
          value={formData.orgtypeOptions} 
          onChange={handleInputChange}
        >
          {orgtypeOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="salaryOptions" className="form-label">What is your current monthly gross salary?</label>
        <select 
          className="answerCard" 
          id="salaryOptions" 
          name="salaryOptions" 
          value={formData.salaryOptions} 
          onChange={handleInputChange}
        >
          {salaryOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="employmentOptions" className="form-label">In your current job, are you</label>
        <select 
          className="answerCard" 
          id="employmentOptions" 
          name="employmentOptions" 
          value={formData.employmentOptions} 
          onChange={handleInputChange}
        >
          {employmentOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="skillsOptions" className="form-label">To what extent did the skills you developed during your studies help you get your job? Would you say that your skills were</label>
        <select 
          className="answerCard" 
          id="skillsOptions" 
          name="skillsOptions" 
          value={formData.skillsOptions} 
          onChange={handleInputChange}
        >
          {skillsOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="timeframeOptions" className="form-label">To what extent did the skills you developed during your studies help you get your job? Would you say that your skills were</label>
        <select 
          className="answerCard" 
          id="timeframeOptions" 
          name="timeframeOptions" 
          value={formData.timeframeOptions} 
          onChange={handleInputChange}
        >
          {timeframeOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="earnOptions" className="form-label">To what extent did the skills you developed during your studies help you get your job? Would you say that your skills were</label>
        <select 
          className="answerCard" 
          id="earnOptions" 
          name="earnOptions" 
          value={formData.earnOptions} 
          onChange={handleInputChange}
        >
          {earnOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

    </>
  );
};

export default Employment;
