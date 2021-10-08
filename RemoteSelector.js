import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import StaticData from "./data/StaticData";

class RemoteSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {options : StaticData(props.url).json};
    }

    render() {

        return (
            <View style={{marginVertical: 20}}>
                <Text>
                    {this.props.field.label} : {this.state.options.length > 0 ? JSON.stringify(this.state.options[0]) : 'no options'}
                </Text>
            </View>
        );

    }
}


export default RemoteSelector;
