import { useNavigate } from 'react-router-dom';

const YourActivityBackButton = ({ location }) => {
    const navigate = useNavigate();
    return (
      <button
        type="button"
        onClick={() => navigate(location.state?.from ?? '/body-parameters')}
        style={{backgroundColor: '#050505', border: 'none', fontSize: 14, color: '#FFFFFF', marginLeft: 16}}
      >
        Back
      </button>
    );
  };
  
  export default YourActivityBackButton;