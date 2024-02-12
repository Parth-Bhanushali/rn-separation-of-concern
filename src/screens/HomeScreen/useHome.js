import React from 'react'
import axios from 'axios'

const useHome = () => {
  const [data, setData] = React.useState();

  const loadItems = () => {
    axios
      .get("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then(({data}) => setData(data))
      .catch((err) => console.log(err));
  }

  const onListItemPress = (item) => {
    console.log('List item: ' + item.name + ' has been pressed.')
  }

  React.useEffect(() => {
    loadItems();
  }, [])

  return {
    data,
    onListItemPress
  }
}

export default useHome