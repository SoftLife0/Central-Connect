import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import imageSrc from '../assets/img/kweku.jpg'
import Header from '../components/Header';
import Profile from '../components/Profile';
import CustomModal from '../components/CustomModal';


const Bio = () => {

  const user = {
    name: "Nana Kweku Adumatta",
    imageSrc: imageSrc,
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque minima aspernatur, tempore obcaecati ex possimus? Ipsam tempora debitis, modi",
    additionalInfo: [
      { label: "Currently working at:", value: "Presto Ghana" },
      { label: "Phone Number:", value: "0545977791" }
    ]
  };
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />

      <Container maxWidth="sm" style={{ marginTop: '12vh' }}>
        <Box sx={{ marginBottom: 2 }}>
          <Profile
            name={user.name}
            imageSrc={user.imageSrc}
            bio={user.bio}
            additionalInfo={user.additionalInfo}
          />
        </Box>

        <br />

        <CustomModal open={isModalOpen} onClose={handleCloseModal} />

      </Container>
    </>
  );
};

export default Bio;
