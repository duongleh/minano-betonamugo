import { fetchUtils } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = crudProvider('http://localhost:4000/api/v1', httpClient);

export default dataProvider;
