import React from 'react'
import * as Location from 'expo-location'
import Loading from './src/components/Loading'
import { Alert } from 'react-native'

export default class App extends React.Component {
  getLocation = async () => {
    try {
      const res = await Location.getForegroundPermissionsAsync()
      console.log('res  :', res)
      const location = await Location.getCurrentPositionAsync()
      console.log('location :', location)
    } catch (error) {
      Alert.alert("Can't find you.")
    }
  }
  componentDidMount() {
    this.getLocation()
  }
  render() {
    return <Loading />
  }
}

// Functional
// export default function App() {
//   return <Loading />
// }
