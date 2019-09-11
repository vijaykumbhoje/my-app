import * as React from 'react';
import { Component } from 'react';
export interface Props {
    op:string

}

export interface State {
    n1: number,
    n2: number,
    res: number,
    op: string,
    dis:string  
}

class CalculatorComponent extends React.Component<Props, State> {
    state: State = {
        n1: 0,
        n2: 0,
        res: 0,
        op:'',
        dis:''        
    }

    handlen1Changes = (evt: React.ChangeEvent<HTMLInputElement>)=> {
       if(this.state.op == '')
        this.setState({n1: parseInt(evt.target.value)})
    };
    handlen2Changes = (evt: React.ChangeEvent<HTMLInputElement>)=> {
        if(this.state.op != '')
        this.setState({n1: parseInt(evt.target.value)})
    };

    handlenOpChanges = (evt: React.ChangeEvent<HTMLInputElement>)=> {
        if(this.state.op == '')
        this.setState({op: evt.target.value})
    };



    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td colSpan={3}> <input type="text" value= {this.state.n1}></input></td>
                    </tr>
                    <tr>
                        <td><input type="button" value={1}/></td>
                        <td><input type="button" value={2}/></td>
                        <td><input type="button" value={3}/></td>
                    </tr>
                    <tr>
                        <td><input type="button" value={4}/></td>
                        <td> <input type="button" value={5}/></td>
                        <td> <input type="button" value={6}/></td>
                    </tr>
                    <tr>
                        <td><input type="button" value={7}/></td>
                        <td> <input type="button" value={8}/></td>
                        <td> <input type="button" value={9}/></td>
                    </tr>
                    <tr >
                        <td colSpan={3}><input type="button" value={0}/></td>
                    </tr>
                    <tr>
                        <td><button type="button">+</button></td>
                        <td><button type="button">-</button></td>
                        <td> <button type="button">*</button></td>
                    </tr>
                    <tr>
                        <td colSpan={2}> <button type="button">/</button></td>
                        <td colSpan={2}> <button type="button">=</button></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default CalculatorComponent;