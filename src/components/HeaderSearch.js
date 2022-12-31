import { Text, View } from 'react-native'
import React from 'react'
import Search from './Search'

const HeaderSearch = ({title, description,onChangeText,setValue,value,placeHolder, search }) => {
  return (
    <View className="ml-4 mt-8 mb-4">
        <View>
            <Text className="text-4xl font-poppins-bold ">{title}  </Text>
            {
                description!="" && <Text className="text-gray-500 font-rubik-regular">{description}</Text>
            }
        </View>
        {
            search && 
            <Search onChangeText={(ev)=>onChangeText(ev)} setValue={setValue} value={value} placeHolder={placeHolder} />
        }
    </View> 
  )
}

export default HeaderSearch