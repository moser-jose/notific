import { ScrollView } from 'react-native'
import NewsRow from './NewsRow'

const News = ({data}) => {
  return (
      <ScrollView 
      horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingLeft:15,
            paddingBottom:1
        }}>
        {data?.map((item)=>{
        return <NewsRow
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        user={item.user}
        data={item.data}
        image={item.image}
        category={item.category}
    />
      })}
      </ScrollView>
  )
}

export default News