import { useState } from 'react';
import { StepOne } from './steps/stepOne/StepOne';
import { YourPet, YourPet2 } from './steps/yourPet/YourPet';
import { Sell, Sell2 } from './steps/sell/Sell';
import { LostFound, LostFound2 } from './steps/lostFound/LostFound';
import { InGoodHands, InGoodHands2 } from './steps/InGoodHands/InGoodHands';
import { useDispatch } from 'react-redux';
import operations from '../../redux/notices/notices-operations';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AddPetForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    category: 'your-pet',
    name: '',
    date: '',
    breed: '',
    image: '',
    sex: '',
    location: '',
    price: '',
    comments: '',
    title: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const resetForm = () => {
    setData({
      category: 'your-pet',
      name: '',
      date: '',
      breed: '',
      image: '',
      sex: '',
      location: '',
      price: '',
      comments: '',
      title: '',
    });
  };

  const makeRequest = formData => {
    dispatch(operations.addNoticeByCategory(formData));
    navigate(from);
    // dispatch(operations.getUserPet(formData));
  };

  const handleNextStep = (newData, final = false) => {
    setData(prevData => ({ ...prevData, ...newData }));

    if (final) {
      makeRequest(newData);
      resetForm();
      return;
    }
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevStep = newData => {
    setData(prevData => ({ ...prevData, ...newData }));
    setCurrentStep(prevStep => prevStep - 1);
  };

  const steps = [<StepOne next={handleNextStep} data={data} />];

  if (data.category === 'your-pet' && currentStep !== 0) {
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

  if (data.category === 'lost-found' && currentStep !== 0) {
    steps.push(
      <LostFound next={handleNextStep} prev={handlePrevStep} data={data} />,
      <LostFound2 next={handleNextStep} prev={handlePrevStep} data={data} />
    );
  }

  if (data.category === 'for-free' && currentStep !== 0) {
    steps.push(
      <InGoodHands next={handleNextStep} prev={handlePrevStep} data={data} />,
      <InGoodHands2 next={handleNextStep} prev={handlePrevStep} data={data} />
    );
  }

  return <div>{steps[currentStep]}</div>;
}
