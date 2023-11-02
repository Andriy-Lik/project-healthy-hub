import { Oval } from 'react-loader-spinner';
import { Wrapper, Text } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <Oval
        ariaLabel="loading-indicator"
        height={150}
        width={150}
        strokeWidth={5}
        strokeWidthSecondary={5}
        color="#45FFBC"
        secondaryColor="#292928"
        visible={true}
      />
       <Text>Loading</Text>
    </Wrapper>
  );
};

export default Loader;