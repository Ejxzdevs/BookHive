import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
    placeHolder : string;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery , placeHolder }) => {
  return (
    <>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        label={placeHolder}
        variant="outlined"
        fullWidth
        sx={{ maxWidth: '500px'}}
      />
    </>
  );
};

export default SearchBar;
