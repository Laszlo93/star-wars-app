import { Box, Breadcrumbs, BreadcrumbsProps, Typography } from '@mui/material';

interface Props extends BreadcrumbsProps {
  heading: string;
  items: string[];
}

export default function HeaderBreadcrumbs({ heading, items, sx, ...other }: Props) {
  const activeItem = items.at(-1);

  return (
    <Box marginBottom={3}>
      <Typography variant="h5" marginBottom={1}>
        {heading}
      </Typography>

      <Breadcrumbs
        separator={
          <Box
            component="span"
            sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }}
          />
        }
        {...other}
      >
        {items.map((item) => (
          <Typography key={item} color={activeItem === item ? 'text.disabled' : 'text.primary'}>
            {item}
          </Typography>
        ))}
      </Breadcrumbs>
    </Box>
  );
}
