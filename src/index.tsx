import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
        title: 'Freelancer de website',
        type: 'deposit',
        category: 'Desenvolvimento',
        amount: 6000,
        createdAt: new Date('2022-05-03 09:00:47'),
        },
        {
          id: 2,
        title: 'Aulas de Inglês',
        type: 'withdraw',
        category: 'Estudos',
        amount: 700,
        createdAt: new Date('2022-04-13 10:37:47'),
        },
      ],
    })
  },
  
  routes() {


    this.namespace = 'api';

    this.get('/transactions', () =>{
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
