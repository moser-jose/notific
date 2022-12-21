import {ScrollView} from 'react-native'
import React from 'react'
import CategoryRow from './CategoryRow'

const Categories = ({data}) => {
  
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10
  }}>
    {
      data?.map((item)=>{
          return <CategoryRow key={item.id} id={item.id} name={item.name}/>
      })
    }

    </ScrollView>
  )
}

export default Categories