import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-ionicons'
import { addToFavorite, removeFromFavorite, 
  selectFavoriteItemsWithId } from '../featured/favoriteSlice'
import { useNavigation } from '@react-navigation/native'
import { doTruncarStr, primeiroUltimo } from '../functions'
import { 
    parseISO, 
    format
  } from 'date-fns';
  import pt from 'date-fns/locale/pt';


const NewsRow = ({id,title,description,user, data,image, category})=>{
    const navigation = useNavigation();
    const items= useSelector(state =>selectFavoriteItemsWithId(state, id))
    const dispatch= useDispatch();
    const addItemsToFavorite =()=>{
        dispatch(addToFavorite({id, title, description, user,data,image, category }));
    }
    const removeItemFromFavorite = ()=>{
        if(!items.length > 0) return; 
        dispatch(removeFromFavorite({id}));
    }
    return (
    
        <TouchableOpacity onPress={()=>navigation.navigate("News",{
            id,title,description,user, data,image, category
        })} style={styles.shadow}  className="w-60 mr-5 rounded-2xl bg-white">
            <View className=" overflow-hidden ">
              <View className="rounded-tr-2xl rounded-tl-2xl overflow-hidden">
                <Image className="h-20 w-60" source={image} />
              </View>
              <Text className="mt-2 px-3 font-poppins-bold text-gray-800">
                  {doTruncarStr(title, 50)}
                </Text>
              <View className="mt-2 px-3 pb-3">
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center gap-1">
                        <Image className="h-7 w-7 rounded-full" source={user.image} />
                        <Text className="font-rubik-regular text-sm text-gray-700 ">{primeiroUltimo(user.name)}</Text>
                    </View>
                    <View className="items-center flex-row gap-4">
                        <TouchableOpacity className="flex-row items-center">
                            <Icon android="share" ios='share-alt' size={24} color="#e6622e" />
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
                <Text className="mt-2 font-rubik-regular text-gray-700">
                {doTruncarStr(description, 70)}
                </Text>
                <View className="flex-row justify-between items-center mt-2">
                    <View className="flex-row items-center gap-1">
                        <Icon className="text-gray-500" ios="calendar" android='calendar' size={16}/>
                        <Text className="font-rubik-regular text-[11px] text-gray-500 ">{format(
                            parseISO(data), 
                            "dd '/' M '/' Y",
                            { awareOfUnicodeTokens: true, locale: pt}
                            )}</Text>
                    </View>
                    <View className="flex-row items-center bg-[#e6622e30] px-2 py-1 rounded-md">
                        <Text className="font-rubik-regular text-sm text-gray-500">{category.name}</Text>
                    </View>
                </View>
                
              </View>
            </View>
        </TouchableOpacity>
    
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: "rgba(0,0,0,.3)",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.27,
        shadowRadius: 1.65,

        elevation: 6,
    }
})


export default NewsRow