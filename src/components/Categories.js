import {ScrollView} from 'react-native'
import React from 'react'
import CategoryRow from './CategoryRow'

const Categories = ({data}) => {
  const setCategory = new Set();
  const filterCategory = data.filter((item) => {
    const duplicatedCategory = setCategory.has(item.category.id);
    setCategory.add(item.category.id);
    return !duplicatedCategory;
  });
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingLeft:15,
      paddingTop:10
  }}>
    <>
    <CategoryRow id={0} name="Todos 📰"/>
      {
        filterCategory?.map((item)=>{
            return <CategoryRow key={item.category.id} id={item.category.id} name={item.category.name}/>
        })
      }
    </>
    

    </ScrollView>
  )
}

export default Categories