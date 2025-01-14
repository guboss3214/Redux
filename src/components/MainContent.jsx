import { useSelector } from 'react-redux';
import Profile from './Profile';
import Signin from './Signin';

const MainContent = () => {
  const signedIn = useSelector((state) => state.signedIn);
  return <div>{signedIn ? <Profile /> : <Signin />}</div>;
};

export default MainContent;
