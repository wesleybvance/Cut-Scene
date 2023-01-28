import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteSingleMember } from '../api/memberData';

function MemberCard({ memberObj, onUpdate }) {
  const deleteMemberBtn = () => {
    if (window.confirm(`Are you sure you want to remove ${memberObj.first_name} ${memberObj.last_name}?`)) {
      deleteSingleMember(memberObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '15px' }}>
        <Card.Img variant="top" src={memberObj.image} alt={`${memberObj.first_name} ${memberObj.last_name}`} />
        <Card.Body style={{ color: 'black' }}>
          <div>
            <Card.Title>{memberObj.first_name} {memberObj.last_name}</Card.Title>
            <Card.Text>
              <Link href={`team/${memberObj.firebaseKey}`} passHref>
                <Button variant="outline-dark" className="m-2">VIEW</Button>
              </Link>
              <Link href={`team/edit/${memberObj.firebaseKey}`} passHref>
                <Button variant="outline-dark" className="m-2">EDIT</Button>
              </Link>
            </Card.Text>
            <Button variant="outline-danger" onClick={deleteMemberBtn}>DELETE</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

MemberCard.propTypes = {
  memberObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MemberCard;
