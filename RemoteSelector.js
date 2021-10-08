import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import StaticData from "./data/StaticData";

class RemoteSelector extends React.Component {

    constructor(props) {
        super(props);
        const init = props.field.value || '';
        this.state = {selectedItem: {Value: init, Name: init, Id: init}, options: [], loading: 3};
        this.onValueChange = this.onValueChange.bind(this);
        this.renderSelectView = this.renderSelectView.bind(this);

        this.state.options = StaticData(props.url).json;
    }

    componentDidMount() {
        this.transformOptions();
    }

    transformOptions() {
        const allOpts = this.state.options;
        let selected = {};
        const options = allOpts.map((option, index) => {
            let item = {Id: index, Name: option, Value: option};
            if (option !== null && typeof option === 'object') {
                if (option.key && typeof option.key === 'object') {
                    item.Value = JSON.stringify(option.key);
                    item.Name = option.label;
                } else {
                    if (option.id && typeof option.id !== 'object') {
                        item.Value = option.id;
                    } else {
                        item.Value = JSON.stringify(option);
                    }
                    if (option.label && typeof option.label !== 'object') {
                        item.Name = option.label;
                    } else {
                        item.Name = JSON.stringify(option);
                    }
                }
            }
            if (this.props.field.value === item.Value) {
                selected = item;
                console.log("FOUND DEFAULT!!!", item);
            }
            return item;
        });
        this.setState({options: options, selectedItem: selected, loading: 0});
    }

    onValueChange(selected) {
        console.log('selected', selected);
        if (typeof selected.Value === 'undefined') return false;
        if (typeof selected.Value === 'object') {
            this.setState({selectedItem: selected});
        } else {
            this.setState({selectedItem: selected});
        }
        return selected;
    }

    renderSelectView(disabled, selected, showModal) {
        return <TouchableOpacity onPress={showModal} style={{marginVertical: 20}}>
            {this.state.selectedItem.Name ?
                <Text>{this.state.selectedItem.Name}</Text> : <Text>Select {this.props.field.label}</Text>
            }
        </TouchableOpacity>
    }

    render() {

        if (this.state.loading > 0) return <Text>Loading {this.props.url}...</Text>;
        if (typeof this.state.options === 'string') return <Text>{this.state.options}</Text>; // error

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
