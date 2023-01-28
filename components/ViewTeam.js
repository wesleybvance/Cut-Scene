/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
import MemberCard from './MemberCard';

export default function ViewTeam() {
  const { user } = useAuth();

  const [members, setMembers] = useState([]);

  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <div className="crew-view">{members.map((member) => (
      <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
    ))}
    </div>
  );
}
