import { Alert, Snackbar } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

const CustomizedSnackbars = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} elevation={6} variant='filled' severity='success' sx={{ width: '100%' }}>
        This is a success message!
      </Alert>
    </Snackbar>
  );
};

export default CustomizedSnackbars;
