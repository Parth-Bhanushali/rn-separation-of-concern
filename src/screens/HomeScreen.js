import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios'

const HomeScreen = () => {
  const [data, setData] = React.useState();

  const loadItems = () => {
    axios
      .get("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then(({data}) => setData(data))
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    loadItems();
  }, [])

  return (
    <View style={styles.container}>
      {
        data?.map((item) => <Text style={styles.listItemText}>{item.name}</Text>)
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