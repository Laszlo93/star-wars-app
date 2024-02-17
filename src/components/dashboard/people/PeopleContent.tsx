'use client';

import { Box, Card, TablePagination, Typography } from '@mui/material';
import EmptyContent from '../../EmptyContent';

const data = [];

const PeopleContent = () => {
  const noData = !data.length;

  return (
    <Card>
      {noData && <EmptyContent title="Nincs adat" />}

      <Box position="relative" borderTop={0.5}>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={0}
          rowsPerPage={10}
          page={0}
          onPageChange={() => {}}
        />

        <Typography
          variant="body2"
          sx={{
            paddingLeft: 1,
            paddingRight: 3,
            paddingY: 1.5,
            top: 4,
            right: { sm: 150 },
            position: 'absolute',
          }}
        >
          Oldalankénti sorok: 10
        </Typography>
      </Box>
    </Card>
  );
};

export default PeopleContent;
