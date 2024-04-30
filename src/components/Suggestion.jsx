import React from 'react'

const Suggestion = ({ formData, onChange }) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    }

    const stayingOptions = [
      { value: '', label: 'Select an option...' },
      { value: 'Very likely', label: 'Very likely' },
      { value: 'Likely', label: 'Likely' },
      { value: 'Unlikely', label: 'Unlikely' },
      { value: 'Very unlikely', label: 'Very unlikely' }
    ];
    
    const schoolReturnOptions = [
      { value: '', label: 'Select an option...' },
      { value: 'Very likely', label: 'Very likely' },
      { value: 'Likely', label: 'Likely' },
      { value: 'Unlikely', label: 'Unlikely' },
      { value: 'Very unlikely', label: 'Very unlikely' }
    ];
    
    const unemployedReasonOptions = [
      { value: '', label: 'Select an option...' },
      { value: 'There are no jobs available in my field', label: 'There are no jobs available in my field' },
      { value: 'I do not have the required skills in my field', label: 'I do not have the required skills in my field' },
      { value: 'I do not know where to look for jobs in my field', label: 'I do not know where to look for jobs in my field' },
      { value: 'Personal reasons', label: 'Personal reasons' },
      { value: 'Others', label: 'Others' }
    ];
    
    const workOptions = [
      { value: '', label: 'Select an option...' },
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' }
    ];
    
    const workframeOptions = [
      { value: '', label: 'Select an option...' },
      { value: '1-3 months', label: '1-3 months' },
      { value: '4-6 months', label: '4-6 months' },
      { value: 'More than 6 months', label: 'More than 6 months' }
    ];

    
    const overallOptions = [
        { value: '', label: 'Select an option...' },
        { value: 'Very satisfied', label: 'Very satisfied' },
        { value: 'Satisfied', label: 'Satisfied' },
        { value: 'Unsatisfied', label: 'Unsatisfied' },
        { value: 'Very unsatisfied', label: 'Very unsatisfied' }
    ];
    
    const recommendOptions = [
        { value: '', label: 'Select an option...' },
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
    ];



  return (
    <>

      {/* Rest of the Questions for this Section  */}

      <div className="headings">
        <h2>Career and Future Intentions</h2>
      </div>


      <div className="form-control">
        <label htmlFor="staying" className="form-label">How likely are you to staying in your current job or profession?</label>
        <select 
          className="answerCard" 
          id="staying" 
          name="staying" 
          value={formData.staying} 
          onChange={handleInputChange}
        >
          {stayingOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="schoolReturn" className="form-label">How likely are you to return to the same school?</label>
        <select 
          className="answerCard" 
          id="schoolReturn" 
          name="schoolReturn" 
          value={formData.schoolReturn} 
          onChange={handleInputChange}
        >
          {schoolReturnOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="unemployedReason" className="form-label">What is the main reason you are unemployed?</label>
        <select 
          className="answerCard" 
          id="unemployedReason" 
          name="unemployedReason" 
          value={formData.unemployedReason} 
          onChange={handleInputChange}
        >
          {unemployedReasonOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="work" className="form-label">Have you ever been employed since graduation?</label>
        <select 
          className="answerCard" 
          id="work" 
          name="work" 
          value={formData.work} 
          onChange={handleInputChange}
        >
          {workOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>


      
      

      {formData.work === 'Yes' && (
        <div className="form-control">
          <label htmlFor="workframe" className="form-label">How long did you work?</label>
          <select 
            className="answerCard" 
            id="workframe" 
            name="workframe" 
            value={formData.workframe} 
            onChange={handleInputChange}
          >
            {workframeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

      )}


        <div className='headings'>
            <h2>Feedback & Suggestion</h2>
            <p></p>
        </div>

        <div className="form-control">
          <label htmlFor="overall" className="form-label">How would you rate your overall satisfaction with your university’s preparation for the type of work you were/are doing?</label>
          <select 
            className="answerCard" 
            id="overall" 
            name="overall" 
            value={formData.overall} 
            onChange={handleInputChange}
          >
            {overallOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-control">
          <label htmlFor="recommend" className="form-label">Would you recommend your program to someone else or not? (If respondent is enrolled in a second tertiary program, response required for their previous program)</label>
          <select 
            className="answerCard" 
            id="recommend" 
            name="recommend" 
            value={formData.recommend} 
            onChange={handleInputChange}
          >
            {recommendOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="suggestion" className="form-label">Do you have any suggestions for overall service delivery at Central University?</label>
          <textarea 
            className="answerCard" 
            id="suggestion" 
            name="suggestion" 
            placeholder="Kindly write your suggestion here ...." 
            required
            type="text" 
            value={formData.suggestion} 
            onChange={handleInputChange} 
            style={{height:'5vh'}}
          ></textarea>
        </div>

    </>
  );
};

export default Suggestion;