import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Switch } from 'react-native';

export default class MenuItemComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            switchButtonValue: props.initState
        }
    }

    onPress = () => {
        const { setValue } = this.props;
        const { switchButtonValue } = this.state;
        if (switchButtonValue === true) {
            this.setState({ switchButtonValue: false });
            setValue(false);
        } else {
            this.setState({ switchButtonValue: true });
            setValue(true);
        }
    }

    changeButtonState = (value) => {
        const { setValue } = this.props;
        this.setState({ switchButtonValue: value })
        setValue(value);
    }


    render() {
        const { text } = this.props;
        const { switchButtonValue } = this.state
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch' }}>
                    <Text style={{ margin: 5, marginLeft: '20%', color: '#fff' }}>{text}</Text>
                    <Switch
                        style={{ marginRight: '4%' }}
                        onValueChange={this.changeButtonState}
                        trackColor={{ true: '#132F3A', false: '#B6B6B6' }}
                        ios_backgroundColor="#fbfbfb"
                        thumbColor={switchButtonValue ? "#2D79AD" : "#fff"}
                        value={switchButtonValue}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

