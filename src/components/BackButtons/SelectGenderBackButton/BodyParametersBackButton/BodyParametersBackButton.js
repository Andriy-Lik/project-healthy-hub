import { useNavigate } from 'react-router-dom';

const BodyParametersBackButton = ({ location }) => {
    const navigate = useNavigate();
    return (
      <button
        type="button"
        onClick={() => navigate(location.state?.from ?? '/select-gender')}
      >
        Back
      </button>
    );
  };
  
  export default BodyParametersBackButton;