import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useStores } from '../../../store/store';

interface IProps {
  onChange: (values: any) => any;
}

export const PositionsOfInterest = ({ onChange }: IProps) => {
  const { formStore } = useStores();

  const [positionsOfInterest, setPositionsOfInterest] = useState<string[]>([]);
  const [
    selectedPositionsOfInterest,
    setSelectedPositionsOfInterest,
  ] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const poiData = await formStore.loadPositionsOfInterest();
      setPositionsOfInterest(poiData);
    })();
  }, [formStore]);

  return (
    <Container>
      <Autocomplete
        multiple
        id="tags-standard"
        options={positionsOfInterest}
        value={selectedPositionsOfInterest}
        onChange={(event, values) => {
          setSelectedPositionsOfInterest(values);
          onChange(values);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            required
            fullWidth
            label={"Vagas de Interesse"}
            placeholder={"Digite e CLIQUE..."}
          />
        )}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;
