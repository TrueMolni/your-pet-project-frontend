import { useState } from 'react';
import { StepOne } from './steps/stepOne/StepOne';
import { YourPet, YourPet2 } from './steps/yourPet/YourPet';
import { Sell, Sell2 } from './steps/sell/Sell';
import { LostFound, LostFound2 } from './steps/lostFound/LostFound';
import styles from './AddPetForm.module.css';

export default function AddPetForm() {
  const [data, setData] = useState({
    category: 'your pet',
    name: '',
    date: '',
    breed: '',
    file: '',
    sex: '',
    location: '',
    price: '',
    comments: '',
    titleOfAdd: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    console.log('Form submitted', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prevData => ({ ...prevData, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevStep = newData => {
    setData(prevData => ({ ...prevData, ...newData }));
    setCurrentStep(prevStep => prevStep - 1);
  };

  const steps = [<StepOne next={handleNextStep} data={data} />];

  if (data.category === 'your pet' && currentStep !== 0) {
    steps.push(
      <YourPet next={handleNextStep} prev={handlePrevStep} data={data} />,
      <YourPet2 next={handleNextStep} prev={handlePrevStep} data={data} />
    );
  }

  if (data.category === 'sell' && currentStep !== 0) {
    steps.push(
      <Sell next={handleNextStep} prev={handlePrevStep} data={data} />,
      <Sell2 next={handleNextStep} prev={handlePrevStep} data={data} />
    );
  }

  if (data.category === 'lost/found' && currentStep !== 0) {
    steps.push(
      <LostFound next={handleNextStep} prev={handlePrevStep} data={data} />,
      <LostFound2 next={handleNextStep} prev={handlePrevStep} data={data} />
    );
  }

  return <div className={styles.bgForm}>{steps[currentStep]}</div>;
}
