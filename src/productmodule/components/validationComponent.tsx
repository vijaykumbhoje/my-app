import * as React from 'react';
import {Component} from 'react'

export interface Props {  }
 
export interface State {
    ProductId:string,
    isProductIdValid: boolean;
    
    ProductName:string, 
    Description:string,
    Manufacturer:string,
    CategoryName:string, 
    BasePrice:number

}
 
class validationComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            fields: {},
            errors: {}
          };
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


    }

    render() { 
        return (  );
    }
}
 
export default ;
