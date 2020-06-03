import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useEffect, useState } from 'react';

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
          fullWidth
          {...params}
          variant="standard"
          label={"Vagas de Interesse"}
          placeholder={"Vagas de Interesse"}
        />
      )}
    />
  );
};
