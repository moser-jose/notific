import { View, Text, SafeAreaView, ScrollView, Animated } from 'react-native'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Category from '../components/Categories';
import Separator from '../components/Separator';
import News from '../components/News';
import Team from '../components/Team';
import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../featured/favoriteSlice';
import { selectNews } from '../featured/newsSlice';
import { selectUsers } from '../featured/userSlice';
import { selectState } from '../featured/statesSlice';
import HeaderSearch from '../components/HeaderSearch';

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

    const handleValueChange = ev => {
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
    <SafeAreaView className="bg-white">
        <HeaderSearch title="No7ify" description="Todos os anúncios em único lugar" 
              onChangeText={(ev)=>handleValueChange(ev)} 
              setValue={setInput} 
              value={input}
              placeHolder="Encontre novos anúncios"
              search={true}
            />
        <ScrollView 
              className="bg-gray-50"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                  paddingBottom:230,
              }}>
          <Category data={newsFilter}/>

          <View className="mt-5 h-1 mx-4 border-gray-200 border-b">
            
          </View>

          <Separator title="Novos Anúncios" textRight={newsFilter.length > 10 ? true : false} />
          <News data={stateSelected.id==0 ? newsFilter:newsFilter.filter((item) => item.category.id == stateSelected.id)}/>
          {
            users.length > 0 && 
            <>
              <Separator title="Nossa Equipa" textRight={users.length > 10 ? true : false} />
              <Team data={users}/>
            </>
          }
          {
            favoritos.length > 0 && 
            <>
              <Separator title="Anúncios Guardados" icon={favoritos.length > 10 ? true : false} />
              <News data={favoritos}/>
            </>
          }
          
        </ScrollView>
    </SafeAreaView>
  )
}


export default HomeScreen