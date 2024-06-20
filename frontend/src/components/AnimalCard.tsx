import { Card, Button, Col } from 'react-bootstrap';

export type CardProps = {
  id?: number,
  name: string,
  specie: string,
  gender: string,
  yearOfBirth: number,
  description: string,
  imageUrl: string,
  videoUrl?: string,
  availableForAdoption: boolean,
  isAdopted: boolean,
};

function AnimalsCard({
  // id,
  name,
  // specie,
  // gender,
  // yearOfBirth,
  description,
  imageUrl,
  // videoUrl,
  // availableForAdoption,
  // isAdopted,
}: CardProps) {
  return (
    <Col md={4} className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ imageUrl } />
        <Card.Body>
          <Card.Title>{ name }</Card.Title>
          <Card.Text>{ description }</Card.Text>
          <Button variant="primary">Saiba mais</Button>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default AnimalsCard ;