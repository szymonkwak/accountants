import { useState } from 'react';
import { ACOUNTANTS_EP } from './endpoints';

export interface Accountant {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: 'male' | 'female';
  picture: string;
}

interface FetchOptions {
  seed: string;
  page: string;
  results: string;
}
/**
 * Hook for sending GET request which fetchs accountants
 * @returns `fetchAccountants` function and `fetchState` object
 */
const useFetchAcountants = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAccountants = async (options: FetchOptions) => {
    const { seed, page, results } = options;

    try {
      setLoading(true);
      setError(false);
      const res = await fetch(ACOUNTANTS_EP + new URLSearchParams({ seed, page, results }));
      const data = await res.json();
      return data.results.map((a: any) => ({
        id: a.login.uuid,
        name: `${a.name.first} ${a.name.last}`,
        email: a.email,
        phone: a.cell,
        gender: a.gender,
        picture: a.picture.medium,
      })) as Accountant[];
    } catch (err) {
      console.error(err);
      setError(true);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetchAccountants, fetchState: { loading, error } };
};

export default useFetchAcountants;
