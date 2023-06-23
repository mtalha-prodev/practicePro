import React,{useState,useEffect, cloneElement} from 'react'
import { View, Text,StyleSheet, ScrollView, Image } from 'react-native'
import {url} from '../utils/util'
import axios from 'axios'

const FatchData = () => {

    const [postData, setPostData] = useState([])

    useEffect(() => {
      fatchData()

    }, [])
    
    const fatchData = async()=>{
        try {
             const {data} = await axios.get(url)
            setPostData(data)
            

        } catch (error) {
            console.log(error)
        }
    }



  return (
    <View style={styles.container}  >
    <ScrollView >


    {/* cart container start */}

        {postData.map((item,index)=>{
            return(
                <View style={styles.cartContainer} key={item.id} >
            <Image source={{uri:item.url}} style={styles.image} />
            <Text>{item.title}</Text>
        </View>
            )
        })}

    </ScrollView>

    {/* cart container end */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    cartContainer:{
        borderWidth:1,
        height:300,
        alignItems:'center',

    },
    image:{
        width:"90%",
        height:300,
    }
})


export default FatchData