import { View, Text, ScrollView, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const Array = () => {
    const [data, setData] = useState([
        {id:1,name:'talha'},
        {id:2,name:'talha'},
        {id:3,name:'talha'},
        {id:4,name:'talha'},
        {id:5,name:'talha'},
        {id:6,name:'talha'},
        {id:7,name:'talha'},
        {id:8,name:'talha'},
        {id:9,name:'talha'},
        {id:10,name:'talha'},
               
    ])

    // data filtering mathod
    const OnClickEvent=(oldId)=>{
        setData((prevData)=>{
            return prevData.filter((tempData)=>{
                if(tempData.id != oldId){
                    return tempData
                }
            })
        })
        
    }

  return (
    <View style={styles.container} >
    {/* using map function */}
    {/* <ScrollView>
        {data.map((item,ind)=>(<View style={styles.listData} key={ind} ><Text style={styles.items} >{item.name}</Text></View>))}
    </ScrollView> */}

    <FlatList  data={data} keyExtractor={item=> item.id} renderItem={({item})=>{
        return(
            <View style={styles.listData} ><TouchableOpacity onPress={()=>OnClickEvent(item.id)} ><Text style={styles.items} >{item.name}</Text></TouchableOpacity></View>
        )
    }} numColumns={2} />

      <Text>hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
    },
    listData:{
        marginVertical:100,
        marginHorizontal:20,
    },
    items:{
        textAlign:'center',
        backgroundColor:'orange',
        paddingVertical:10,
        width:'100%',
        fontSize:20,
        fontWeight:'bold',
        textTransform:"capitalize",          
    }
})


export default Array