import {Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { primeiroUltimoLetra } from '../functions'

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
        return <TouchableOpacity key={item.id} className="rounded-xl mr-4 items-center ">
        <Image className="h-16 w-16 rounded-full border-solid border-[#e6622e] border-2  " source={item.image} />
        <Text className="font-rubik-regular text-lg text-gray-700 ">{primeiroUltimoLetra(item.name)}</Text>
      </TouchableOpacity>

      })
    }
      
    </ScrollView>
  )
}

export default Team