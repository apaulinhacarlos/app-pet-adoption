import { useContext } from 'react';
import AnimalsCard from './AnimalCard';
import ApiContext from '../context/api.context';
import { Row } from 'react-bootstrap';

function Animals() {
  const { data } = useContext(ApiContext);

  return (
    <div className="container">
      <Row>
        { 
          data && data.map((item: any) => (
          <AnimalsCard
              key={ item.name }
              name={ item.name }
              specie={ item.specie }
              gender={ item.gender }
              yearOfBirth={ item.yearOfBirth }
              description={ item.description }
              imageUrl={ item.imageUrl }
              videoUrl={ item.videoUrl }
              availableForAdoption={ item.availableForAdoption }
              isAdopted={ item.isAdopted }
            />
          ))
        }
      </Row>      
    </div>
  );
}

export default Animals;
