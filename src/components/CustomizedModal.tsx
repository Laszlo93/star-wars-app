import { styled } from '@mui/material/styles';
import { Box, Grid, IconButton, Dialog } from '@mui/material';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';

const ModalContentStyle = styled(Box, {
  shouldForwardProp: (prop) => !['mdDown'].includes(prop as string),
})(({ theme }) => ({
  maxHeight: '80vh',
  backgroundColor: theme?.palette.background.paper,
  borderRadius: 5,
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  position: 'relative',
}));

type Props = {
  open: boolean;
  children: ReactNode;
  onClose: VoidFunction;
};

export default function CustomizedModal({ open, children, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth sx={{ '& .MuiPaper-root': { margin: 0 } }}>
      <Grid item>
        <ModalContentStyle>
          <Stack width="100%" position="absolute">
            <IconButton
              onClick={onClose}
              style={{
                alignSelf: 'flex-end',
                marginTop: 8,
                marginRight: 16,
                position: 'sticky',
                zIndex: 999,
                display: '',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          {children}
        </ModalContentStyle>
      </Grid>
    </Dialog>
  );
}
