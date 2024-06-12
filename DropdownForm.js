import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

function DropdownForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === 'option1') {
      navigate('/page-one');
    } else if (selectedValue === 'option2') {
      navigate('/page-two');
    }
  };

  return (
   
      <div className="App">
      
      <header className="App-header">Smart Health Dashboard<sub>1.0</sub></header>
      <hr></hr>
      <main className='App-main'>
      <section className='Page-column'>
        <a  href='first-task' target='_blank'>Devlopement</a>
        <a href='first-task' target='_blank' >Production</a>
        <a href='first-task' target='_blank' >Non-Prod</a>
       </section>
       <div className='form-parent'>
        <div className='spans'>
          <span className='span-element'>1</span>
          <span>____________________</span>          
          <span className='span-element'>2</span>
        </div>
       <div className='form-box'>
      <form>
        <label htmlFor="dropdown">Choose an option:</label>
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="" disabled>Select an option</option>
          <option value="option1">Dev</option>
          <option value="option2">ManageConfiguration</option>
        </select>
      </form>
      </div>
      </div>
      </main>
    </div>
  );
}

export default DropdownForm;