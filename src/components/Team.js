import {Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const Team = () => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal:15,
  }}>
      <TouchableOpacity className="rounded-xl mr-4 items-center ">
        <Image className="h-16 w-16 rounded-full border-solid border-[#e6622e] border-2  " source={require("./../assets/img/img.jpeg")} />
        <Text className="font-rubik-regular text-lg text-gray-700 ">Moser J.</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Team