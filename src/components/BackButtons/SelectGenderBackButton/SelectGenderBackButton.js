import { useNavigate } from 'react-router-dom';

const SelectGenderBackButton = ({ location }) => {
    const navigate = useNavigate();
    return (
      <button
        type="button"
        onClick={() => navigate(location.state?.from ?? '/your-goal')}
      >
        Back
      </button>
    );
  };
  
  export default SelectGenderBackButton;