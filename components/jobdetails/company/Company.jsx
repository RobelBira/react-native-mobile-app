import React from 'react'
import { View, Text ,Image} from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'



const Company = ({companyLogo,jobTitle,companyName,location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
      <Image
      source={{
        uri: checkImageURL(companyLogo)? companyLogo :"https://media.istockphoto.com/id/1369406446/photo/shield-check-mark-on-podium.webp?b=1&s=170667a&w=0&k=20&c=LEUapvP02IHYzXzLTqYucSS0bUkAGrEM1__e49iG2LY= " 
      }}
      style={styles.logoImage}
      />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle} >
          {jobTitle}
        </Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image 
          source={icons.location}
          resizeMode='contain'
          style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company