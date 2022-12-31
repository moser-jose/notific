import { View, TextInput } from 'react-native'
import {Icon} from '@elevyg/react-native-ionicons';
import Close from './Close'

const Search = ({onChangeText, value, setValue, placeHolder}) => {
  return (
    <View className=" mt-6 flex-row items-center">
          <View className="flex-row items-center flex-1 mr-4 bg-gray-200 p-2 rounded-xl">
              <Icon name="search" size={24} color="#B9B9B9" />
              <TextInput
                className="flex-1 ml-1 font-rubik-regular" 
                placeholder={placeHolder}
                keyboardType="default"
                placeholderTextColor="#aaa"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
              />
              {
                value != '' && <Close onPress={() => setValue('')}/>
              }
          </View>
    </View>
  )
}

export default Search