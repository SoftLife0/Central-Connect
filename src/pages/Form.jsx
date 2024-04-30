import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SubmitButton from '../components/Button';
import Info from '../components/Info';
import Employment from '../components/Employment';
import Skill from '../components/Skill';
import Suggestion from '../components/Suggestion';
import LoadingSpinner from '../components/LoadingSpinner';


const Form = () => {
  const [formData, setFormData] = useState({
    gender: '',
    workAddress: '',
    mobileNumber: '',
    residence: '',
    programmePursued: '',
    yearOfCompletion: '',
    others: '',
    pro: '',
    institution: '',
    completed: '',
    satisfaction: '',
    // Initial state for employment information
    current: '',
    job: '',
    service: '',
    orgname: '',
    orgadd: '',
    title: '',
    orgtype: '',
    salary: '',
    employment: '',
    skills: '',
    timeframe: '',
    earn: '',
    // Intia state for Skill Information
    theoretical: '',
    technical: '',
    communication: '',
    comprehension: '',
    quantitative: '',
    computer: '',
    critical: '',
    research: '',
    team: '',
    planning: '',
    management: '',
    quality: '',
    creative: '',
    adaptable: '',
    responsible: '',
    // Initail state for Ability Information
    theoreticals: '',
    technicals: '',
    communications: '',
    comprehensions: '',
    quantitatives: '',
    computers: '',
    criticals: '',
    researchs: '',
    teams: '',
    plannings: '',
    managements: '',
    qualitys: '',
    creatives: '',
    adaptables: '',
    responsibles: '',
    staying: '',
    schoolReturn: '',
    unemployedReason: '',
    work: '',
    workframe: '',
    // Initial state for Suggestions
    overall: '',
    recommend: '',
    suggestion: ''

  });

  const [step, setStep] = useState(1); // State to track current step

  const [loading, setLoading] = useState(false);
  // Define onChange function to handle form field changes
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // if (!formData.gender || !formData.workAddress || !formData.mobileNumber || !formData.residence) {
    //   alert('Please fill in all required fields.');
    //   return;
    // }
  
    console.log('Form Data:', formData); // Log formData for debugging
  
    try {
      setLoading(true);
      const response = await fetch('https://forms.central.edu.gh/api/tracerform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setLoading(false);
        navigate('/success');
      } else {
        throw new Error('Failed to submit form'); // Throw an error for unsuccessful submission
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false); // Reset loading state
      // Display an error message to the user
      alert('Failed to submit form. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      <Container style={{ marginTop: '12vh', background: '#fff', marginBottom: '5vh' }} >

      {step === 1 && (
        <div className='headings'>
          <h2>Tracer Studies</h2>
          <p>Dear Graduate, Through this questionnaire CU aims to track its graduates and receive feedback regarding the type of work, further study or other activity you are/have been involved in since you completed your study from Central University. The information provided will assist the institution to plan both for future educational needs and improve its programmes. Results of this tracer study will only be presented in summary form and individual responses will be kept strictly confidential. We would, therefore, highly appreciate if you could complete the following questionnaire and return it to us, at your earliest convenience. 
            Thank you for your kind cooperation and support. </p>
          <p>This questionnaire is designed to enable follow your journey after Name of University.</p>
          <br />
        </div>
      )}

        <form onSubmit={handleSubmit}>
          {step === 1 && <Info formData={formData} onChange={handleInputChange} />}
          {step === 2 && <Employment formData={formData} onChange={handleInputChange} />}
          {step === 3 && <Skill formData={formData} onChange={handleInputChange} />}
          {step === 4 && <Suggestion formData={formData} onChange={handleInputChange} />}
          

          {step < 4 ? (
            <SubmitButton onClick={handleNext} text="Next" />
          ) : (
            <SubmitButton onClick={handleSubmit} text="Submit" />
          )}
        </form>
      </Container>

      {/* Loading Screen */}
      {loading && <LoadingSpinner message="Loading..." />}

    </>
  );
}

export default Form;
