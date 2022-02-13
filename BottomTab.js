import React,{useState} from 'react';
import { View, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomTabs() {
    const [activeTab,setActiveTab] = useState("home");

    const tabs = [
        {
            name:"home",
            icon:<FontAwesome name='home' size={30} color="#eee"/>,
            selectedIcon:<FontAwesome name='home' size={30} color="green"/>,  
        },
        {
            name:"stats",
            icon:<AntDesign name='piechart' size={25} color="#eee"/>,
            selectedIcon:<AntDesign name='piechart' size={25} color="green"/>,
        },
        {
            name:"nav",
            icon:<Ionicons name="navigate" size={30} color="#eee"/>,
            selectedIcon:<Ionicons name="navigate" size={30} color="green"/>,
        },
        {
            name:"alert",
            icon:<FontAwesome name='bell' size={25} color="#eee"/>,
            selectedIcon:<FontAwesome name='bell' size={25} color="green"/>,
        }
    ]

    return (
        
       
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:"center",
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15,
                    backgroundColor:'white',
                    flex:0.1
                }}
            >
                {tabs.map((tab,index)=>(
                    <TouchableOpacity
                        key={index}
                        onPress={()=>{setActiveTab(tab.name)}}
                        style={{
                            margin:10
                        }}
                    >
                        {tab.name==activeTab?tab.selectedIcon:tab.icon}
                    </TouchableOpacity>
                ))}
            </View>
            
    );
}
