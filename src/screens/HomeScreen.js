import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Category from '../components/Categories';
import Separator from '../components/Separator';
import New from '../components/News';
import Team from '../components/Team';
import Search from '../components/Search';
import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../featured/favoriteSlice';
import { selectNews } from '../featured/newsSlice';
import { selectUsers } from '../featured/userSlice';
import { selectState } from '../featured/statesSlice';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [input, setInput]=useState('');
    const stateSelected= useSelector(state =>selectState(state))
    const favoritos = useSelector((state)=>selectFavoriteItems(state))
    const data = useSelector(state =>selectNews(state))
    const users = useSelector(state =>selectUsers(state))
    
    const newsFilter = useMemo(() => {
        if (!input) {
          return data;
        }
        else if(stateSelected.id==0){
          return data.filter((l) => l.title.toLowerCase().match(input.toLowerCase()));
        }
        return data.filter((l) => l.title.toLowerCase().match(input.toLowerCase()) && l.category.id==stateSelected.id);
      }, [input, data]);

    const handleNameChange = ev => {
      const newName = ev.replace(
        /[^a-zA-Z\s]/g,""
      );
      setInput(newName);
    };

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
    }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="ml-4 mt-10 mb-4">
        <View>
          <Text className="text-4xl font-poppins-bold ">No7ify  </Text>
          <Text className="text-gray-500 font-rubik-regular">Todos os anúncios em único lugar</Text>
        </View>
        <Search onChangeText={(ev)=>handleNameChange(ev)} setValue={setInput} value={input}/>
      </View>
      <ScrollView 
            className="bg-gray-50"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom:230,
            }}>
        <Category data={newsFilter}/>
        <Separator title="Novos Anúncios" icon={true} />
        <New data={stateSelected.id==0 ? newsFilter:newsFilter.filter((item) => item.category.id == stateSelected.id)}/>
        <Separator title="Nossa Equipa" icon={true} />
        <Team data={users}/>
        {
          favoritos.length > 0 && 
          <>
            <Separator title="Anúncios Favoritos" icon={true} />
            <New data={favoritos}/>
          </>
        }
        
      </ScrollView>
    </SafeAreaView>
  )
}


export default HomeScreen