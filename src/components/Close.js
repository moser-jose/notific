import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Close = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className="ml-2  rounded-full h-5 w-5 bg-gray-800 items-center justify-center">
      <Text className="text-white text-[10px] font-rubik-regular">x</Text>
    </TouchableOpacity>
  )
}

export default Close