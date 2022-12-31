import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react'

const Separator = ({title, textRight}) => {
  return (
    <View className="flex-row items-center justify-between px-4 py-5">
        <Text className="font-bold text-base text-gray-800">{title}</Text>
        {
            textRight && <TouchableOpacity>
              <Text className="text-[#e6622e]">Ver todos</Text>
            </TouchableOpacity>
        }
    </View>
  )
}

export default Separator