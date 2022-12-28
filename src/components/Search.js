import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-ionicons'
import Close from './Close'

const Search = ({onChangeText, value, setValue}) => {
  return (
    <View className="mr-4 mt-9 flex-row items-center">
          <View className="flex-row items-center flex-1 mr-3 bg-gray-200 p-3 rounded-xl">
              <Icon name="search" size={26} color="#B9B9B9" />
              <TextInput
                className="flex-1 ml-1 font-rubik-regular" 
                placeholder='Encontre novos anúncios'
                keyboardType='default'
                placeholderTextColor="#aaa"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
              />
              {
                value != "" && <Close onPress={() => setValue('')}/>
              }
          </View>
          <TouchableOpacity>
            <Icon name="options" size={30} color="#111" />
          </TouchableOpacity>
    </View>
  )
}

export default Search