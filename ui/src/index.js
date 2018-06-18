import React from 'react';
import {render} from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";
import {ApolloProvider, Query} from "react-apollo";
// import App from './app'

import DeleteCar from './DeleteCar'
import CarCreate from './CarCreate'


const client = new ApolloClient({
   uri: `https://us1.prisma.sh/corey-bernsdorff/api-practice/dev`
});

const Cars = () => (
   <Query query={gql`{
            cars {
               id
               model
               year
               make
               hp
               pass
               vin
            }
          }
        `}
   >
      {({loading, error, data}) => {
         if (loading) return <p>Loading...</p>;
         if (error) return <p>Error :(</p>;
         
         return data.cars.map(({id, model, year, make, hp, pass, vin}) => (
            <div key={id}>
               <p>{`${year} ${make} ${model}`}</p>
               <p>{`${hp} HP ${pass}_Pass VIN# "${vin}"`}</p>
               <p>{`${id}`}</p>
               <DeleteCar id={id}/>
               <br/>
            </div>
         ));
      }}
   </Query>
);

const App = () => (
   <ApolloProvider client={client}>
      <div>
         <h2>My first Apollo app</h2>
         <hr/>
         Create a new car
         <CarCreate/>
         <hr/>
         <Cars/>
      </div>
   </ApolloProvider>
);

render(<App/>, document.getElementById('root'));

