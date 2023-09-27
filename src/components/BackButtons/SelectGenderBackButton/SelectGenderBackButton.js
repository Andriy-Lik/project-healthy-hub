import { useNavigate } from 'react-router-dom';

const SelectGenderBackButton = ({ location }) => {
    const navigate = useNavigate();
    return (
      <button
        type="button"
        onClick={() => navigate(location.state?.from ?? '/your-goal')}
        style={{backgroundColor: '#050505', border: 'none', fontSize: 14, color: '#ffffff', marginLeft: 110, alignSelf: 'center', textAlign: 'center'}}
      >
        Back
      </button>
    );
  };
  
  export default SelectGenderBackButton;


  