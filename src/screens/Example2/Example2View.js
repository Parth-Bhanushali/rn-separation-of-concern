import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Example2View = ({data, onListItemPress}) => {
  return (
    <View style={styles.container}>
      {
        data?.map((item) => <Text key={item.id} style={styles.listItemText} onPress={() => onListItemPress(item)}>{item.name}</Text>)
      }
    </View>
  )
}

export default Example2View

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemText: {
    backgroundColor: 'pink',
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 8,
    width: '60%',
    textAlign: 'center',
    marginVertical: 4
  }
})