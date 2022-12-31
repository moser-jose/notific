import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import HeaderSearch from '../components/HeaderSearch';
import { useSelector } from 'react-redux';
import { selectState } from '../featured/statesSlice';
import { selectNews } from '../featured/newsSlice';


const FavoritesScreen = () => {
  const [input, setInput]=useState('');
  
  return (
    <SafeAreaView className="bg-white">
     <HeaderSearch title="Favoritos" description="Todos anúncios favoritos" search={false}
      />
    </SafeAreaView>
  )
}


export default FavoritesScreen