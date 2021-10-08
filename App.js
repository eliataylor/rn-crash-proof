/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import RemoteSelector from "./RemoteSelector";

const App: () => React$Node = () => {
    return (
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <RemoteSelector url={'/airport/list'} field={{label: 'Airport'}} />
                    <RemoteSelector url={'/waypoint/list'} field={{label: 'Waypoint'}} />
                    <RemoteSelector url={'/procedure/list'} field={{label: 'Procedure'}} />
                    <RemoteSelector url={'/navaid/list'} field={{label: 'NavAid'}} />
                </ScrollView>
            </SafeAreaView>
    );
};
export default App;
