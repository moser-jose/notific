import React, {createContext, useContext, useEffect} from 'react';
import Search from '../components/Search';

export const StateContext = createContext();

export const ContextProviderData = ({children}) => {
    const [searchData, setSearchData]=useState([]);
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
      useEffect(()=>{
            setSearchData(data);
      },[])
    return <StateContext.Provider value={{data,searchData,setSearchData}}>
        {children}
  </StateContext.Provider>
};

export const useContextProvider = () => useContext(StateContext);
