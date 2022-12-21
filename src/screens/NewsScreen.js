import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-ionicons'
import { addToFavorite, removeFromFavorite, 
  selectFavoriteItemsWithId } from '../featured/favoriteSlice'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
    parseISO, 
    format
  } from 'date-fns';
  import pt from 'date-fns/locale/pt';
import { primeiroUltimo } from '../functions'

const NewsScreen = () => {
    const navigation =useNavigation();
    const {
        params:{
            id,title,description,user, data,image, category
        }
    } = useRoute();
    const items= useSelector(state =>selectFavoriteItemsWithId(state, id))
    const dispatch= useDispatch();
    const addItemsToFavorite =()=>{
        dispatch(addToFavorite({id, title, description, user,data,image, category }));
    }
    const removeItemFromFavorite = ()=>{
        if(!items.length > 0) return; 
        dispatch(removeFromFavorite({id}));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
  return (
    <ScrollView>
        <View className="relative">
                <Image source={image} className="h-60 bg-gray-300 p-4 object-cover w-full" />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="absolute top-[50px] h-9 w-9 left-5 bg-gray-700 items-center justify-center rounded-full"
                >
                    <Icon name='arrow-round-back' size={28} color="#fff"/>
                </TouchableOpacity>
        </View>
        <Text className="mt-4 px-5 text-xl font-rubik-bold text-gray-800">
            {title}
        </Text>
        <View className="flex-row justify-between items-center px-5 py-4">
        
                    <View className="flex-row items-center gap-2">
                        <Image className="h-7 w-7 rounded-full" source={user.image} />
                        <Text className="font-rubik-regular text-base  text-gray-700 ">{primeiroUltimo(user.name)}</Text>
                    </View>

                    <View className="items-center flex-row gap-6">
                        <TouchableOpacity className="flex-row items-center">
                            <Icon ios="share-alt" android='share' size={24} color="#e6622e" />
                        </TouchableOpacity>
                        {
                            items.length>0 ? <TouchableOpacity onPress={removeItemFromFavorite} className="flex-row items-center">
                                <Icon name="heart" size={24} color="#e6622e" />
                                </TouchableOpacity>:
                                <TouchableOpacity onPress={addItemsToFavorite} className="flex-row items-center">
                                    <Icon className="text-gray-800" name="heart-empty" size={24} />
                                </TouchableOpacity>
                        }
                    </View>
        </View>

        <View className="flex-row justify-between items-center pb-4 px-5">
            <View className="flex-row items-center gap-1">
                <Icon className="text-gray-500" ios="calendar" android='calendar' size={22} />
                <Text className="font-rubik-regular text-md text-gray-600 ">{format(
                parseISO(data), 
                "dd 'de' MMMM', às ' HH:mm'h'",
                { awareOfUnicodeTokens: true, locale: pt}
                )}</Text>
            </View>
            <View className="flex-row items-center bg-[#e6622e30] px-3 py-[6px] rounded-md">
                <Text className="font-rubik-regular text-md text-gray-600">{category.name}</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default NewsScreen