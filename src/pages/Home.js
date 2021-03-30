import Countries from '../components/Countries';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation></Navigation>
      <Countries></Countries>
    </div>
  );
};

export default Home;