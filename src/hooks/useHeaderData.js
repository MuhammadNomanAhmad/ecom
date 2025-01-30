import { useEffect, useState } from 'react';

import HeaderService from '../services/headerService';

const useHeaderData = () => {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const data = await HeaderService.getHeaderData();
        setHeaderData(data);
      } catch (err) {
        setError(err.message || 'Failed to load header');
      } finally {
        setLoading(false);
      }
    };

    fetchHeaderData();
  }, []);

  return { headerData, loading, error };
};

export default useHeaderData;