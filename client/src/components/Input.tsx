import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

interface InputProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({ filter, setFilter }: InputProps) {
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Box p={5}>
        <TextField
          id="search"
          label="Search"
          size="small"
          value={filter}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Box>
    </Grid>
  );
}
