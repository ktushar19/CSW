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
        message='Here, you create the Employee’s online account. A Employee may logon the account provided by CSW or using a private email that you may register here. In the later case, the Teacher must firstly verify the email account before he or she can access to CSW web portal..'
        key={vertical + horizontal}
      />
    </div>
  );
}
