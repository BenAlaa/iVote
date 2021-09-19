import {useHistory} from 'react-router-dom';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';
const NotFound = (props) => {
  const history = useHistory();
  return ( 
    <PageWrapper>
      <div className="w-full flex flex-col justify-center items-center mt-24">
        <div className="text-9xl font-bold mb-8 text-yellow-500">404</div>
        <div className="text-3xl mb-8 text-indigo-500">Sorry Not Found Page!</div>
        <AiOutlineCloseCircle className="text-6xl p-2 border-2 border-yellow-600 rounded-full text-yellow-600 bg-yellow-100" />
        <Button text="Go to Home" onClick={() => history.push('/')} />
      </div>
    </PageWrapper>
   );
}
 
export default NotFound;