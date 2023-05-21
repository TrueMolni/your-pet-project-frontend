import Input from './input/Input';
import File from './file/File';
import RadioButtonsOption from './radioButtonsOption/RadioButtonsOption';
import RadioButtonsSex from './radioButtonsSex/RadioButtonsSex';
import Textarea from './textarea/Textarea';

const AddPetFormControl = ({ control, ...props }) => {
  switch (control) {
    case 'input':
      return <Input {...props} />;
    case 'textarea':
      return <Textarea {...props} />;
    case 'radio':
      return <RadioButtonsOption {...props} />;
    case 'sex':
      return <RadioButtonsSex {...props} />;
    case 'file':
      return <File {...props} />;
    default:
      return null;
  }
};

export default AddPetFormControl;
