/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { getSingleMember } from '../../api/memberData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="member-detail-card-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={memberDetails.image} />
        <Card.Body className="member-card">
          <Card.Title className="member-card">{`${memberDetails.first_name} ${memberDetails.last_name}`}</Card.Title>
          <Card.Text>
            <h3>{memberDetails.role}</h3>
          </Card.Text>
          <Link href={`edit/${memberDetails.firebaseKey}`} passHref>
            <Button variant="outline-dark" className="m-2">Edit {`${memberDetails.first_name} ${memberDetails.last_name}`}</Button>
          </Link>
        </Card.Body>
      </Card>
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={memberDetails.image}
            alt={`${memberDetails.first_name} ${memberDetails.last_name}`}
          />
          <Carousel.Caption>
            <h3>{`${memberDetails.first_name} ${memberDetails.last_name}`}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={memberDetails.image}
            alt={`${memberDetails.first_name} ${memberDetails.last_name}`}
          />
          <Carousel.Caption>
            <h3>{memberDetails.role}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>

  );
}
