import { memo } from 'react';
import { useParams } from 'react-router-dom';

const Crew_dtels = () => {
  const  {id} = useParams()
  return (
    <div className="Crew_dtels">
      <h2>Crew_dtels</h2>
    </div>
  );
};

export default memo(Crew_dtels);