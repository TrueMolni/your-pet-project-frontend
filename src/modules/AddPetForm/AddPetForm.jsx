import { useState } from 'react';
import { StepOne } from './steps/stepOne/StepOne';
import { YourPet, YourPet2 } from './steps/yourPet/YourPet';
import { Sell, Sell2 } from './steps/sell/Sell';
import { LostFound, LostFound2 } from './steps/lostFound/LostFound';
import { InGoodHands, InGoodHands2 } from './steps/InGoodHands/InGoodHands';
// import { useDispatch } from 'react-redux';
// import operations from '../../redux/notices/notices-operations';
import { useNavigate } from 'react-router-dom';

export default function AddPetForm() {
  // const dispatch = useDispatch();
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

  const formType = (category, nextStepHandler, prevStepHandler) => {
    switch (category) {
      case 'your-pet':
        return [
          <YourPet next={nextStepHandler} prev={prevStepHandler} data={data} />,
          <YourPet2
            next={nextStepHandler}
            prev={prevStepHandler}
            data={data}
          />,
        ];
      case 'sell':
        return [
          <Sell next={nextStepHandler} prev={prevStepHandler} data={data} />,
          <Sell2 next={nextStepHandler} prev={prevStepHandler} data={data} />,
        ];
      case 'lost-found':
        return [
          <LostFound
            next={nextStepHandler}
            prev={prevStepHandler}
            data={data}
          />,
          <LostFound2
            next={nextStepHandler}
            prev={prevStepHandler}
            data={data}
          />,
        ];
      case 'for-free':
        return [
          <InGoodHands
            next={nextStepHandler}
            prev={prevStepHandler}
            data={data}
          />,
          <InGoodHands2
            next={nextStepHandler}
            prev={prevStepHandler}
            data={data}
          />,
        ];
      default:
        return [];
    }
  };

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
    const fields = Object.keys(formData);
    const sendData = {};

    for (const field of fields) {
      if (!formData[field]) {
        continue;
      }
      sendData[field] = formData[field];
    }
    if (sendData.category === 'your-pet') {
      // dispatch(operations.addNoticeByCategory(sendData));
      console.log('Form submitted. Data:', sendData);
      return;
    }
    // dispatch(operations.addNoticeByCategory(sendData));
    console.log('Form submitted. Data:', sendData);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prevData => ({ ...prevData, ...newData }));

    if (final) {
      makeRequest(newData);
      resetForm();
      navigate(-1);
      return;
    }
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevStep = newData => {
    setData(prevData => ({ ...prevData, ...newData }));
    setCurrentStep(prevStep => prevStep - 1);
  };

  const steps = [<StepOne next={handleNextStep} data={data} />];

  steps.push(...formType(data.category, handleNextStep, handlePrevStep));

  return <div>{steps[currentStep]}</div>;
}
