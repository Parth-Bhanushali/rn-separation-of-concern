import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useHome from './useHome'

const HomeScreen = (props) => {
  const {data, onListItemPress} = useHome(props);

  return (
    <View style={styles.container}>
      {
        data?.map((item) => <Text key={item.id} style={styles.listItemText} onPress={() => onListItemPress(item)}>{item.name}</Text>)
      }
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemText: {
    backgroundColor: 'lightgray',
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 8,
    width: '60%',
    textAlign: 'center',
    marginVertical: 4
  }
})