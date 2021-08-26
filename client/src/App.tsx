import React, { useEffect, useState } from 'react';
import './App.css';
import * as dealSvcs from './api/deals.services';
import Input from './components/Input';
import Cards from './components/Cards';
import Box from '@material-ui/core/Box';

function App() {
  const [deals, setDeals] = useState<any>([]);
  const [filter, setFilter] = useState<string>('');

  const getDeals = async () => {
    const res = await dealSvcs.fetchDeals(filter);
    if (res) {
      setDeals(res.data);
    }
  };

  useEffect(() => {
    getDeals();
  }, [filter]);

  return (
    <Box m={5}>
      <Input filter={filter} setFilter={setFilter} />
      <Cards deals={deals} />
    </Box>
  );
}

export default App;
