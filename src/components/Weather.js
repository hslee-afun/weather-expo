import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const weatherOptions = {
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#c94b4b', '#4b134f'],
    title: 'Title',
    subTitle: 'SubTitle',
  },
  Thunderstorm: {
    iconName: '',
    gradient: [],
  },
  Drizzle: {
    iconName: '',
    gradient: [],
  },
  Rain: {
    iconName: '',
    gradient: [],
  },

  Snow: {
    iconName: '',
    gradient: [],
  },
  Atmosphere: {
    iconName: '',
    gradient: [],
  },
  Clear: {
    iconName: '',
    gradient: [],
  },
  Dust: {
    iconName: '',
    gradient: [],
  },
  Mist: {
    iconName: '',
    gradient: [],
  },
}

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName || 'cloud-question'}
          color="white"
        />
        <Text style={styles.temp}>{Math.round(temp)}℃ </Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <View>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subTitle}>
            {weatherOptions[condition].subTitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  )
}

Weather.prototypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Haze',
    'Dust',
    'Mist',
  ]).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    color: '#fff',
    fontSize: 36,
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  subTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
})
