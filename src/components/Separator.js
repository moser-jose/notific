import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-ionicons'
import React from 'react'

const Separator = ({title, icon}) => {
  return (
    <View className="flex-row items-center justify-between px-4 py-7">
        <Text className="font-semibold text-base text-gray-800">{title}</Text>
        {
            icon && <TouchableOpacity>
            <Icon className="text-[#e6622e]" android='arrow-forward' ios="arrow-round-forward" size={28} color="black" />
        </TouchableOpacity>
        }
    </View>
  )
}

export default Separator