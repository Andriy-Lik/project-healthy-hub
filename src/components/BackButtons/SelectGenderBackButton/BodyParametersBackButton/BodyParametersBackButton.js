import { useNavigate } from 'react-router-dom';

const BodyParametersBackButton = ({ location }) => {
    const navigate = useNavigate();
    return (
      <button
        type="button"
        onClick={() => navigate(location.state?.from ?? '/select-gender')}
        style={{backgroundColor: '#050505', border: 'none', fontSize: 14, color: '#FFFFFF', marginLeft: 16}}
      >
        Back
      </button>
    );
  };
  
  export default BodyParametersBackButton;