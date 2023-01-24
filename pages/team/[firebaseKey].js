/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { getSingleMember } from '../../api/memberData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <Carousel>
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
    </Carousel>
  );
}
