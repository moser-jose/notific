import {Text, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10
  }}>
        <TouchableOpacity className="bg-[#e6622e] px-6 py-2 rounded-xl mr-4 ">
          <Text className="text-base font-poppins-bold text-white">Todos 📰 </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#e6622e40] px-6 py-2 rounded-xl mr-4">
          <Text className="text-base text-gray-500 font-poppins-regular">Igreja Local</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#e6622e40] px-6 py-2 rounded-xl mr-4">
          <Text className="text-base text-gray-500 font-poppins-regular">Desbravadores</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#e6622e40] px-6 py-2 rounded-xl">
          <Text className="text-base text-gray-500 font-poppins-regular">União</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Categories