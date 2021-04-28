import React from 'react'
import axios from 'axios'
import * as Location from 'expo-location'
import Loading from './src/components/Loading'
import { Alert } from 'react-native'
import Weather from './src/components/Weather'

const API_KEY = '29c14691581083f0d3dbd32a2c5e2f38'
const latitude = 37.54441991974018
const longitude = 127.05776046931486

export default class App extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async () => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main,
    })
  }
  getLocation = async () => {
    try {
      await Location.getForegroundPermissionsAsync()
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      console.log('location :', coords.latitude, coords.longitude)
      // // Send to API and Get weather
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false })
    } catch (error) {
      Alert.alert("Can't find you.")
    }
  }
  componentDidMount() {
    this.getLocation()
  }
  render() {
    const { isLoading, temp, condition } = this.state
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={temp} condition={condition} />
    )
  }
}
