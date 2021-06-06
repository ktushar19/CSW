import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import InfoIcon from '@material-ui/icons/Info';

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <InfoIcon onClick={handleClick({ vertical: 'top', horizontal: 'center' })}></InfoIcon>
     </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message='Select the "Create New" button to create a new Student. You can manage all the contact, family and demographics information, your Students" online accounts, as well as the Students" educational programs. A Student can have multiple educational programs. Note: Use the Enrollments tab to assign Student and Students to your Students.'
        key={vertical + horizontal}
      />
    </div>
  );
}
