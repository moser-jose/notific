import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Category from '../components/Categories';
import Separator from '../components/Separator';
import New from '../components/News';
import Team from '../components/Team';
import Search from '../components/Search';
import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../featured/favoriteSlice';

const data={
    category:[
      {
        id:1,
        name:"Todos 📰"
      },
      {
        id:2,
        name:"Igreja Local"
      },
      {
        id:3,
        name:"Desbravadores"
      },
      {
        id:4,
        name:"Jovens Adultos"
      },
      {
        id:5,
        name:"União"
      },
      {
        id:6,
        name:"Ministério da Mulher"
      }
    ],
    data:[
      {
        id: 1,
        title: 'Ensaio no coral jovem do huambo',
        user:{
          name:"Moser José",
          user:"moser.jose",
          image:require('./../assets/img/img.jpeg'),
      },
        description:"Hoje quando forem 14:00h haverá ensaios do coral jovem do humabo na central todos os jovens poderão estar presentes mais infelismente nem todos poderão participar",
        data:"2022-12-01 16:30:00",
        image:require('./../assets/img/img.jpeg'),
        category:{
          id:2,
          name:"Igreja Local"
        },
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
        data:"2022-12-25 10:10:00",
        image:require('./../assets/img/img1.jpeg'),
        category:{
          id:2,
          name:"Igreja Local"
        }
      },
      {
        id: 3,
        title: 'Tarde de louvor e adoração na central do huambo',
        user:{
            name:"Jorge Andre",
            user:"jorge.andre",
            image:require('./../assets/img/img1.jpeg'),
        },
        description:"",
        data:"2022-12-25 10:10:00",
        image:require('./../assets/img/img1.jpeg'),
        category:{
          id:4,
          name:"Jovens Adultos"
        }
      }
    ], 
    users:[{
      id:1,
      name:"Moser Zeferino Vicente José",
      user:"moser.jose",
      email:"mosmmy@gmail.com",
      telefone:"923819414",
      image:require('./../assets/img/img1.jpeg'),
    },
    {
      id:2,
      name:"Mateus dos Santos Andre",
      user:"mateus.andre",
      email:"mateus@gmail.com",
      telefone:"922000000",
      image:require('./../assets/img/img.jpeg'),
    },
    {
      id:3,
      name:"Marcos João Manuel Pedro",
      user:"marcos.pedro",
      email:"pedro@gmail.com",
      telefone:"920112222 fg",
      image:require('./../assets/img/img1.jpeg'),
    },
  ]
}

const HomeScreen = () => {
    const navigation = useNavigation();
    const favoritos = useSelector((state)=>selectFavoriteItems(state))

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
        <Search data={data.data}/>
      </View>
      <ScrollView 
            className="bg-gray-50"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom:230,
            }}>
        <Category data={data.data}/>
        <Separator title="Novos Anúncios" icon={true} />
        <New data={data.data}/>
        <Separator title="Nossa Equipa" icon={true} />
        <Team data={data.users}/>
        {
          favoritos.length > 0 && 
          <>
            <Separator title="Anúncios Favoritos" icon={true} />
            <New data={favoritos}/>
          </>
        }

        <Separator title="Nossa Equipa" icon={true} />
        
      </ScrollView>
    </SafeAreaView>
  )
}


export default HomeScreen