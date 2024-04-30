import * as React from 'react';
import { Box, Modal } from '@mui/material';
import SubmitButton from './Button';
import { Link } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <SubmitButton onClick={handleOpen} text="Connect Now"/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 id="modal-modal-title">Fill Alumni Tracer Form  👇</h2>
          <Link to="/tracerform">alumni.tracerform.edu.gh</Link>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;