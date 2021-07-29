import { Dialog, DialogContent } from '@material-ui/core';
import React from 'react';
import bookingDialogService from '../../services/bookingDialogService';
import HomeBooking from '../homes/homeBooking';

const HomeDialog = ({openBook}) => {
  return (
    <Dialog
      open={openBook.open}
      onClose={() => bookingDialogService.close()}
      maxWidth={"xs"}
      fullWidth={true}
    >
      <DialogContent>
        <HomeBooking home={openBook.data} />
      </DialogContent>
    </Dialog>
  );
};

export default HomeDialog;
