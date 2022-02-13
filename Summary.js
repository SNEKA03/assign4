import { View, Text } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Summary() {
  return (
        <View
            style={{
                flex:0.3
            }}
        >
            <View
                style={{
                    width:"90%",
                    flex:1,
                    backgroundColor:"#1E732A",
                    borderRadius:25,
                    alignSelf:'center',
                    justifyContent:'center',
                    paddingHorizontal:20,
                    position:"relative",
                }}
            >
                <Text style={{color:"white",fontSize:16}}>My portfolio </Text>
                <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>$ 12,56,789</Text>
            </View>
            
            <View
                style={{
                    position:"absolute",
                    bottom:-20,
                    width:'100%',
                }}
            >
                <Profit/>
            </View>
        
        </View>
  )
}

function Profit(){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center",
                elevation:5,
                borderRadius:25,
                width:"80%",
                alignSelf:"center",
                padding:15,
                backgroundColor:"white"
            }}
        >
            <Text style={{fontWeight:"bold",color:"grey",fontSize:18}}>Profit</Text>
            <View
                style={{
                    flexDirection:"row",
                    alignItems:"center",
                }}
            >
                <Text 
                    style={{
                        color:"green",
                        fontSize:15,
                        fontWeight:"bold",
                   
                    }}
                >
                    $5,67,865</Text>
                <AntDesign name="caretup" color="green" style={{marginHorizontal:5}}/>

                <Text 
                    style={{
                        color:"green",
                        fontSize:15,
                        fontWeight:"bold"
                    }}>
                    3.2%</Text>
            </View>
        </View>
    )
}
