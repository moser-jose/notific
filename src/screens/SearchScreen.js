import { Text, SafeAreaView, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { selectState } from '../featured/statesSlice';
import { useSelector } from 'react-redux';
import { selectNews } from '../featured/newsSlice';
import HeaderSearch from '../components/HeaderSearch';


const SearchScreen = () => {
  const [input, setInput]=useState('');
  const stateSelected= useSelector(state =>selectState(state))
  const data = useSelector(state =>selectNews(state))
  
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

  return (
    <SafeAreaView className="bg-white">
     <HeaderSearch title="Pesquisar" description="Encontre todos os anúncios desejados" 
        onChangeText={(ev)=>handleValueChange(ev)} 
        setValue={setInput} 
        value={input}
        placeHolder="Encontre anúncios"
        search={true}
      />
    </SafeAreaView>
  )
}


export default SearchScreen