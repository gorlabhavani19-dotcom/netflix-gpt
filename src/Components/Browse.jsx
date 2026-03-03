import Header from './Header'
import useNow from '../hooks/usegetNow';
import { Main } from './MainContainer.jsx';
const Browse = () => {
  useNow();
    return (
       <div>
      <Header/>
    <Main/>
    </div>
  )
}

export default Browse;