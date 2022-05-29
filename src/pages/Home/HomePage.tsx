import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllCurrenciesQuery } from '../../store/api/CurrencyApi';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    data: currencies, isLoading, isFetching, error,
  } = useGetAllCurrenciesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if ((!currencies && !isFetching) || error) {
    throw new Error('Something went wrong...');
  }

  const currencyArray = Object.keys(currencies);

  return (
    <section className={`container ${styles.currencies}`}>
      {currencyArray.map((key) => (
        <button
          onClick={() => {
            navigate(`/currency/${key}`);
          }}
          className={styles.currencies_btn}
          key={key}
          type="button"
        >
          {key}
        </button>
      ))}
    </section>
  );
};

export default HomePage;
