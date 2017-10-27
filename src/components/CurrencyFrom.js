// import React, { Component } from 'react';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from  'material-ui/MenuItem';
// import TextField from 'material-ui/TextField';

// const styles = {
//   customWidth: {
//     width: 120,
//   },
// };

// export const currencies = [
//     <MenuItem key={1} value={1} primaryText="USD" />,
//     <MenuItem key={2} value={2} primaryText="EUR" />,
//     <MenuItem key={3} value={3} primaryText="AUS" />,
//     <MenuItem key={4} value={4} primaryText="YEN" />,
//     <MenuItem key={5} value={5} primaryText="REN" />
// ];

// export default class FromSelector extends Component {
//     state = {
//         fromValue: null,
//     };

//     handleFromChange = (event, index, value) => this.setState({value});

//     render() {
//         return (
//             <div>
//                 <div>
//                     <SelectField value={this.state.value}
//                                 onChange={this.handleChange}
//                                 floatingLabelText="Currency From"
//                                 style={styles.customWidth} >
//                         { currencies }
//                     </SelectField>
//                 </div>
//                 <div>
//                     <TextField
//                         hintText="Amount From"
//                         style={styles.customWidth}
//                         type="number"
//                     />
//                 </div>
//             </div>
//         );
//     }
// }