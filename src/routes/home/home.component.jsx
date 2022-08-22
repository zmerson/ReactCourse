import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import FooterCard from '../../components/footer-card/footer-card.component';
const Home = () => {
  

  return (
    <div>
      <Directory />
      <FooterCard/>
      <Outlet />
    </div>
  );
};

export default Home;
