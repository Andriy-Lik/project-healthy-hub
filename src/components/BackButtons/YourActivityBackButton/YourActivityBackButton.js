import { useNavigate } from 'react-router-dom';

const YourActivityBackButton = ({ location }) => {
    const navigate = useNavigate();
    return (
      <button
        type="button"
        onClick={() => navigate(location.state?.from ?? '/body-parameters')}
      >
        Back
      </button>
    );
  };
  
  export default YourActivityBackButton;