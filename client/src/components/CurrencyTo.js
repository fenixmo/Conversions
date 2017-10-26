import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from  'material-ui/MenuItem';
import { currencies } from './CurrencyFrom'; 

const styles = {
    customWidth: {
        width: 120,
    },
};

export default class ToSelector extends Component {
    state = {
        value: null,
    };

    handleChange = (event, index, value) => this.setState({value});
    
    render() {
        return (
            <div>
                <SelectField value={this.state.value}
                            onChange={this.handleChange}
                            floatingLabelText="Currency To"
                            style={styles.customWidth} >
                    { currencies }
                </SelectField>
            </div>
        )
    }
}


  