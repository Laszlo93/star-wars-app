import { InputAdornment, MenuItem, Stack, TextField } from '@mui/material';
import { Gender } from '@/@types/people';
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector } from '@/redux/hook';
import { ChangeEvent, useState } from 'react';
import useLocales from '@/hooks/useLocales';

type Props = {
  onFilterName: (query: string) => void;
  onFilterGender: (query: Gender) => void;
  onFilterPlanet: (query: string) => void;
};

let searchQueryTimeout = 0;

const FilterToolbar = ({ onFilterName, onFilterGender, onFilterPlanet }: Props) => {
  const { translate } = useLocales();

  const planets = useAppSelector((state) => state.planets.planets);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchQuery(value);

    if (value.length > 3) {
      window.clearTimeout(searchQueryTimeout);

      searchQueryTimeout = window.setTimeout(() => {
        onFilterName(value);
      }, 500);
    }

    if (value.length === 0) {
      onFilterName('');
    }
  };

  return (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ py: 2.5, px: 3 }}>
      <TextField
        fullWidth
        size="small"
        value={searchQuery}
        placeholder={translate('dashboard.characters.toolbar.search')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleSearchQuery}
      />

      <TextField
        size="small"
        select
        label={translate('dashboard.characters.toolbar.gender.label')}
        defaultValue={Gender.ALL}
        fullWidth
        sx={{ minWidth: 150 }}
        SelectProps={{
          MenuProps: {
            sx: { '& .MuiPaper-root': { maxHeight: 260 } },
          },
        }}
        onChange={(e) => onFilterGender(e.target.value as Gender)}
      >
        {Object.values(Gender).map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              marginX: 1,
              marginY: 0.5,
              borderRadius: 0.75,
              typography: 'body2',
            }}
          >
            {translate(`dashboard.characters.toolbar.gender.${option}`)}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        select
        label={translate('dashboard.characters.toolbar.homeworld.label')}
        defaultValue="all"
        fullWidth
        sx={{ minWidth: 150 }}
        SelectProps={{
          MenuProps: {
            sx: { '& .MuiPaper-root': { maxHeight: 260 } },
          },
        }}
        onChange={(e) => onFilterPlanet(e.target.value)}
      >
        <MenuItem
          value="all"
          sx={{
            marginX: 1,
            marginY: 0.5,
            borderRadius: 0.75,
            typography: 'body2',
          }}
        >
          {translate('dashboard.characters.toolbar.homeworld.all')}
        </MenuItem>

        {planets?.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              marginX: 1,
              marginY: 0.5,
              borderRadius: 0.75,
              typography: 'body2',
            }}
          >
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};

export default FilterToolbar;
