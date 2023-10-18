import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={100}
      width={100}
      strokeWidth={5}
      strokeWidthSecondary={5}
      color="#45FFBC"
      secondaryColor="#292928"
      visible={true}
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor:  'rgba(0, 0, 0, 1)',
        zIndex: 10,
      }}
    />
  );
};

export default Loader;