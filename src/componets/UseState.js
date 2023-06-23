import React, {useState} from 'react'
import { View, Text,Button,StyleSheet, TextInput } from 'react-native'

const UseState = () => {

    const [setValue, setSetValue] = useState(0);
    const [inputValue, setInputValue] = useState("pak");


    const decrement = ()=>{
        if(setValue > 0){
            setSetValue(setValue - 1)
        }
    }
    const increment = ()=>{
        if(setValue < 10){
            setSetValue(setValue + 1)
        }
    }


  return (
    <View style={style.box} >
    <View style={style.btnBox}>

    <Button title='-' onPress={()=> decrement() } />
      <Text>{setValue}</Text>
    <Button title='+' onPress={()=> increment()} />
    </View>
    <View style={style.inputBox}>
        <TextInput style={style.input} value={inputValue} onChangeText={(value)=>setInputValue(value)} />
        <Text>{inputValue}</Text>
    </View>
    </View>
  )
}

const style = StyleSheet.create({
    box:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        height:'100%',
        width:"100%",
        borderWidth:1,
        borderColor:'white'
    },
    btnBox:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
        width:"100%",
        borderWidth:1,
        borderColor:'white'
    },
    inputBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:10,

    },
    input:{
        borderWidth:1,
        borderColor:'white',
        width:"100%",
        paddingVertical:6,
        paddingHorizontal:10,
        borderRadius:5,

    }
   
})

export default UseState