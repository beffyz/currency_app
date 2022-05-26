import React, { useEffect, useState } from 'react';
import { useGetAllCurrenciesQuery } from '../../store/api/CurrencyApi';
import { CurrencyModel } from '../../models/CurrencyModel';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const { data, isLoading, isSuccess } = useGetAllCurrenciesQuery();
  const [currencies, setCurrencies] = useState<CurrencyModel[]>();

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setCurrencies(Object.entries(data).map(([currency, name]) => ({ currency, name })));
    }
  }, [data, isSuccess]);

  return (
    <div>
      {isLoading && (
        <>

        </>
      )}

      {isSuccess && (
        <>
          {currencies && currencies.map(({ currency, name }) => (
            <div>
              <button>{`${currency.toUpperCase()} "${name}"`}</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default HomePage;
