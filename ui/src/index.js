import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider } from 'react-apollo';


import CarCreate from './CarCreate'
import Car from './Car'
import PermDrawer from './PermDrawer'

const client = new ApolloClient({
   uri: `https://us1.prisma.sh/corey-bernsdorff/api-practice/dev`
});

const App = () => (
   <ApolloProvider client={client}>
      <div>
         <PermDrawer/>
         Create a new car
         <CarCreate/>
         <hr/>
         <Car/>
      </div>
   </ApolloProvider>
);

ReactDOM.render(<App/>, document.getElementById('root'));