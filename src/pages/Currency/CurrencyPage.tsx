import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CurrencyPage.module.scss';
import { useGetSingleCurrencyQuery } from '../../store/api/CurrencyApi';

const CurrencyPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const {
    data: currency, isLoading, isFetching, error,
  } = useGetSingleCurrencyQuery(String(code));

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }

  if ((!currency && !isFetching) || error) {
    throw new Error('Something went wrong...');
  }

  const currencyArray: any = Object.entries(currency);
  const currencyList: any = (currencyArray[1][1]);
  const currencyName: any = (currencyArray[1][0]);

  return (
    <section>
      <button className={styles.currency_btn} onClick={() => navigate('/')}>Back to all currencies</button>
      <h1 className={styles.currency_title}>{`${currencyName} rate to`}</h1>
      <div className={`container ${styles.currency}`}>
        {Object.keys(currencyList).map((key) => (
          <div className={styles.currency_box}>
            <p>{key}</p>
            <p>{currencyList[key]}</p>
          </div>
        ))}
      </div>
    </section>

  );
};

export default CurrencyPage;
