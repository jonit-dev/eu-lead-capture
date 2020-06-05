import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useStores } from '../../../store/store';
import { UserType } from '../../../types/account.types';

interface IProps {
  userType: string;
  onChange: (values: any) => any;
}

export const PositionsOfInterest = ({ onChange, userType }: IProps) => {
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

  const onRenderPlaceholder = () => {
    switch (userType) {
      case UserType.Company:
      case UserType.RecruitmentCompany:
        return "Candidatos para quais vagas?";
      default:
        return "Vagas de Interesse";
    }
  };

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
            label={onRenderPlaceholder()}
            placeholder={"Digite e CLIQUE..."}
          />
        )}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 0.2rem;
`;
