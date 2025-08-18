import { memo } from 'react';
import Hero from './components/hero';

const Home = () => {
  return (
    <div className="Index">
      <Hero/>
    </div>
  );
};

export default memo(Home);