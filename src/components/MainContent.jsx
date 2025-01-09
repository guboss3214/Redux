import { useUser } from '../context/context';
import Profile from './Profile';
import Signin from './Signin';

const MainContent = () => {
  const { signedIn } = useUser();
  return <div>{signedIn ? <Profile /> : <Signin />}</div>;
};

export default MainContent;
