import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const AutoManualSwitch = () => {
  const [isAutomatic, setIsAutomatic] = useState(false);

  const handleSwitchChange = () => {
    setIsAutomatic(previousState => !previousState);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mode: {isAutomatic ? 'Automatique' : 'Manuel'}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isAutomatic ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleSwitchChange}
        value={isAutomatic}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default AutoManualSwitch;
