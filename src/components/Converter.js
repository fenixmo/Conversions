import React, { Component } from 'react';
import { map } from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from  'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import axios from 'axios';
var fx = require('money');

const styles = {

    margin: 12,
    bodi: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.01em",
        float: "left",
        width: "100%"
    },
    title: {
        color: "#3a3a3a"
    }
}

class Converter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fromValue: 0,
            amountValue: 0,
            toValue: 0,
            converted: 0,
            currencies: []
        }
    }

    componentDidMount() {
        axios
            .get('http://api.fixer.io/latest?base=USD')
            .then((res) => this.handleRatesSetup(res))
            .catch(function (error) {
                console.log(error);
            });
    }

    handleRatesSetup(data) {
        const newCurrencies = Object.keys(data.data.rates)
        var monies = map(newCurrencies, (currency, i) => {
            return <MenuItem key={i} value={currency} primaryText={currency} />
        })
        console.log(monies);
        monies.push(<MenuItem key={monies.length + 1} value='USD' primaryText='USD' />)
        this.setState({currencies: monies})

        if (typeof fx !== 'undefined' && fx.rates) {
          console.log("success");
          fx.rates = data.data.rates;
          fx.base = data.data.base;
        } else {
          var fxSetup = {
            rates: data.data.rates,
            base: data.data.base,
          }
        }
        fx.base = "USD";
        fx.settings = {
          from: "USD"
        };
    }

    handleToChange = (e, index, toValue) => this.setState({toValue});
    handleFromChange = (e, index, fromValue) => this.setState({fromValue});
    handleAmountChange= (e, amountValue) => this.setState({amountValue})
    
    convert = () => {
        const amount = this.state.amountValue;
        var converted = fx.convert(amount, {from: this.state.fromValue, to: this.state.toValue})
        this.setState({converted})
    }

    render() {
        return(
            <div style={styles.bodi}>
                <div >
                    <h1 style={styles.title}>Currency Converter</h1>
                    <div>
                        <SelectField value={this.state.fromValue}
                                    onChange={this.handleFromChange}
                                    floatingLabelText="Currency From"
                                    style={styles.customWidth}
                                    maxHeight={200} >
                            { this.state.currencies }
                        </SelectField>
                    </div>
                    <div>
                        <TextField
                            value={this.state.amountValue}
                            onChange={this.handleAmountChange}
                            hintText="Amount From"
                            style={styles.customWidth}
                            type="number"
                        />
                    </div>
                    <div>
                        <SelectField value={this.state.toValue}
                                    onChange={this.handleToChange}
                                    floatingLabelText="Currency To"
                                    style={styles.customWidth}
                                    maxHeight={200} >
                            { this.state.currencies }
                        </SelectField>
                    </div>
                    <br/>
                    <div>
                        <RaisedButton  label="Convert" primary={true} style={styles} onClick={this.convert}/>
                    </div>
                    <br/>
                    <div>
                        <Card>
                            <CardText>
                                {this.state.converted}
                            </CardText>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Converter