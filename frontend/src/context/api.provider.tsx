import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './api.context';

import { requestData } from '../services/api.service';

function ApiProvider({ children }: any) {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await requestData('/api/animals');
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const contextValue = {
    data,
    isLoading,
  }

  return (
    <ApiContext.Provider value={ contextValue }>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
