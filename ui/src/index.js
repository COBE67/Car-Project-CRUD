import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import gql from "graphql-tag";
// import App from './app'

import DeleteCar from './DeleteCar'
import CarCreate from './CarCreate'
import UpdateCar from './UpdateCar'

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
               <p>{`${hp} HP`}</p>
               <p>{`${pass}_Pass`}</p>
               <p>{`VIN# "${vin}"`}</p>
               <DeleteCar id={id}/>
               <UpdateCar
                  id={id}
                  year={year}
                  make={make}
                  model={model}
                  hp={hp}
                  pass={pass}
                  vin={vin}
               />
               <br/>
               <hr/>
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

ReactDOM.render(<App/>, document.getElementById('root'));

