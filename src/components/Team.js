import {Text, ScrollView, TouchableOpacity, Image, View} from 'react-native'
import React from 'react'
import { primeiroNome } from '../util'

const Team = ({data}) => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal:15,
  }}>

    {
      data?.map((item)=>{
        return <TouchableOpacity key={item.id} className="mr-4 items-center">
        <View className="border-[#e6622e40] border-2  rounded-full p-[3px]">
        <Image className="h-14 w-14 rounded-full  " source={item.image} />
        </View>
        <Text className="font-rubik-regular text-base text-gray-700 ">{primeiroNome(item.name)}</Text>
      </TouchableOpacity>

      })
    }
      
    </ScrollView>
  )
}

export default Team