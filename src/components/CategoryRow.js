import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToState, selectStateWithId  } from '../featured/statesSlice';

const CategoryRow = ({id, name}) => {
    const items= useSelector(state =>selectStateWithId(state, id))
    const dispatch= useDispatch();
    const addItemToState =()=>{
        dispatch(addToState({id, name}));
    }
    
  return (
    <>
        {
            items ? <TouchableOpacity onPress={addItemToState} className="bg-[#e6622e] px-6 py-2 rounded-[15px] mr-4">
            <Text className="font-poppins-bold text-white text-sm" >{name}</Text>
            </TouchableOpacity>:    
            <TouchableOpacity onPress={addItemToState} className="bg-[#e6622e40] px-6 py-2 rounded-[15px] mr-4 ">
            <Text className="text-sm text-gray-500 font-poppins-regular">{name}</Text>
            </TouchableOpacity>
        }
    </>
  )
}

export default CategoryRow