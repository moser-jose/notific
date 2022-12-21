import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons'
import Category from '../components/Categories';
import Separator from '../components/Separator';
import New from '../components/News';
import Team from '../components/Team';
import Search from '../components/Search';



const data=[
  {
    id: 1,
    title: 'Ensaio no coral jovem do huambo',
    user:{
      name:"Moser José",
      user:"moser.jose",
      image:require('./../assets/img/img.jpeg'),
  },
    description:"Hoje quando forem 14:00h haverá ensaios do coral jovem do humabo na central todos os jovens poderão estar presentes mais infelismente nem todos poderão participar",
    data:"12/12/2022",
    image:require('./../assets/img/img.jpeg'),
    category:"Igreja Local"
  },
  {
    id: 2,
    title: 'Reunião dos anciãos  hoje quando terminar o programa de tarde',
    user:{
        name:"Jorge Andre",
        user:"jorge.andre",
        image:require('./../assets/img/img1.jpeg'),
    },
    description:"Hoje quando forem 14:00h haverá ensaios do coral jovem do humabo na central",
    data:"12/12/2022",
    image:require('./../assets/img/img1.jpeg'),
    category:"Igreja Local"
  }
]


const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="ml-4 mt-10 mb-4">
        <View>
          <Text className="text-4xl font-poppins-bold ">Notific  </Text>
          <Text className="text-gray-500 font-rubik-regular">Todos os anúnicos em único lugar</Text>
        </View>
        <Search data={data}/>
      </View>
      <ScrollView 
            className="bg-gray-50"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom:230,
            }}>
        <Category/>
        <Separator title="Novos Anúncios" icon={true} />
        <New data={data}/>
        <Separator title="Nossa Equipa" icon={true} />
        <Team/>
      </ScrollView>
    </SafeAreaView>
  )
}


export default HomeScreen