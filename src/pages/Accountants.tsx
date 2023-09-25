import styled from 'styled-components';
import { AccountantCard } from '../components';
import { Button, Spinner } from '../components/base';
import { useFetchAcountants } from '../api';
import { useLayoutEffect, useState } from 'react';
import { Accountant } from '../api';
import { CardLayout } from '../components/app';
import { NoData } from './';

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px;
`;

const RESULTS_PER_PAGE = 4;

function Accountants() {
  const [accountants, setAccountants] = useState<Accountant[]>([]);

  const { fetchAccountants, fetchState } = useFetchAcountants();

  const handleFetchAccountants = async () => {
    const data = await fetchAccountants({
      seed: 'abc',
      page: (accountants.length / RESULTS_PER_PAGE + 1).toString(),
      results: RESULTS_PER_PAGE.toString(),
    });
    if (data) setAccountants((prev) => prev.concat(data));
  };

  useLayoutEffect(() => {
    handleFetchAccountants();
  }, []);

  if (fetchState.error) return <NoData />;

  return (
    <>
      <CardLayout>
        {accountants.map((a) => (
          <AccountantCard
            key={a.id}
            name={a.name}
            email={a.email}
            phone={a.phone}
            gender={a.gender}
            picture={a.picture}
          />
        ))}
      </CardLayout>
      <BtnContainer>
        {fetchState.loading ? (
          <Button disabled>
            <Spinner color="grey" />
            Wczytywanie
          </Button>
        ) : (
          <Button onClick={handleFetchAccountants}>Pobierz kolejne karty</Button>
        )}
      </BtnContainer>
    </>
  );
}

export default Accountants;
