import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function MyStocks() {
    const data=[
        {
            name:"Amazon",
            symbol:"AMZN",
            invested:15456,
            profit:55.61,
            returns:12
        },
        {
            name:"Amazon",
            symbol:"AMZN",
            invested:15456,
            profit:55.61,
            returns:12
        },
         {
            name:"Amazon",
            symbol:"AMZN",
            invested:15456,
            profit:55.61,
            returns:12
        },
         {
            name:"Amazon",
            symbol:"AMZN",
            invested:15456,
            profit:55.61,
            returns:12
        },

    ]
  return (
    <View
        style={{
            flex:0.3,
            backgroundColor:"white",
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
        }}
    >
      <Text
        style={{
            fontSize:16,
            paddingHorizontal:10,
            margin:5,
            fontWeight:"bold",
            color:"black"
        }}
      >My Stocks</Text>

      <ScrollView
        style={{
            flex:1
        }}
      >
            {data.map((item,index)=>(
                <Item 
                    key={index}  
                    name={item.name}
                    symbol={item.symbol}
                    invested={item.invested}
                    profit={item.profit}
                    returns={item.returns}
                />
            ))}
      </ScrollView>
    </View>
  )
}

function Item(props){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                backgroundColor:"white",
                borderRadius:10,
                marginHorizontal:10,
                marginVertical:5,
                padding:10,
                elevation:2
            }}
        >
            <View
                style={{
                    flexDirection:'row'
                }}
            >
                <View
                    style={{
                        backgroundColor:"#B1D1AB",
                        paddingHorizontal:10,
                        borderRadius:10,
                    }}
                >
                    <Text
                        style={{
                            color:"green",
                            fontSize:30
                        }}
                    >{props.name[0]}</Text>
                </View>
                <View
                        style={{
                            marginLeft:10,
                            justifyContent:'center'
                        }}
                >
                    <Text
                        style={{
                            fontWeight:"bold",
                            fontSize:18
                        }}
                    >{props.name}</Text>
                    <Text
                        style={{
                            color:"grey",
                            fontSize:12
                        }}
                    >{props.symbol}</Text>
                </View>
            </View>
            <View
                style={{
                    justifyContent:"center",
                }}
            >
                <Text
                    style={{
                        fontWeight:"bold",
                        fontSize:18 
                    }}
                >$ {props.invested}</Text>
                <Text
                    style={{
                        color:"green",
                        fontSize:12
                    }}
                >+${props.profit} ({props.returns}%)</Text>
            </View>
        </View>
    )
}
