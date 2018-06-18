import React, { Component, Fragment } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default class extends Component {
     state = {
        id: this.props.id,
        model: this.props.model,
        year: this.props.year,
        make: this.props.make,
        hp: this.props.hp,
        pass: this.props.pass,
        vin: this.props.vin
        isUpdating: false,
        buttonText: "Update"
     }
     
     updateCarMutation = gql`
     mutation updateCar($make: String!, $model: String!, $year: Int!, $hp: Int!, $pass: Int!, $vin: String!) {
         updateCar(data: {make: $make, model: $model, year: $year, hp: $hp, pass: $pass, vin: $vin}) {
             make
             model
             year
             hp
             pass
             vin
         }
     }
`
     `
}
