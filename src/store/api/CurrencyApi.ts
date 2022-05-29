import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AllCurrencyModel } from '../../models/CurrencyModel';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/' }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query<AllCurrencyModel, void>({
      query: (name) => 'currencies.json',
    }),
    getSingleCurrency: builder.query<any, string>({
      query: (code) => `currencies/${code}.json`,
    }),
  }),
});

export const { useGetAllCurrenciesQuery, useGetSingleCurrencyQuery } = currencyApi;

export default currencyApi;
