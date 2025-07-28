import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StatusBar } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardList from './DashboardList';


const Dashboard = ({ navigation }) => {
  const Data = [
    { key: '1', icon: 'map', text: 'View Map', color: 'red' },
    { key: '2', icon: 'clipboard-text', text: 'My Bills|Money', color: 'blue' },
    { key: '3', icon: 'progress-star', text: 'My Ratings', color: 'green' },
    { key: '4', icon: 'account-circle', text: 'My profile', color: 'yellow' }]
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor='#181952' />
      <View style={{ flex: 10, backgroundColor: 'white', flexDirection: 'column' }}>
        <View style={{ height: 70, flexDirection: 'row', alignItems: 'center', backgroundColor: "#181952" }}>
          <View style={{ marginLeft: 12 }}>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color='#fff' />

            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 40 }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Dashboard</Text>
          </View>
          <View style={{ marginHorizontal: '45%' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Ionicons name="home" size={24} color='#fff' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: '100%', backgroundColor: 'white', alignItems: 'center', marginTop: 30 }}>
          <FlatList numColumns={2}
            data={Data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <DashboardList Navigation={navigation} product={item} />}></FlatList>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#181952', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{ justifyContent: 'space-evenly' }}>
          <TouchableOpacity>
            <View >
              <View style={{ marginLeft: 5 }}>
                <FontAwesome name="home" size={20} color="white" />
              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 10 }}>Home</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'space-evenly' }}>
          <TouchableOpacity>
            <View >
              <View style={{ marginLeft: 5 }}>
                <FontAwesome name="search" size={20} color="white" />
              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 10 }}>Search</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'space-evenly' }}>
          <TouchableOpacity>
            <View >
              <View style={{ marginLeft: 10 }}>
                <Feather name="download" size={20} color="white" />
              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 10 }}>Downloads</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View style={{ justifyContent: 'space-evenly' }}>
          <TouchableOpacity>
            <View >
              <View style={{ marginLeft: 5 }}>
                <FontAwesome5 name="language" size={20} color="white" />
              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 10 }}>Languages</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View> */}

        <View style={{ justifyContent: 'space-evenly' }}>
          <TouchableOpacity>
            <View >
              <View style={{ marginLeft: 5 }}>
                <Ionicons name="settings" size={20} color="white" />
              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 10 }}>Settings</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}

Dashboard.navigationOptions = () => {
  return {
    headerShown: false
  }
}


export default Dashboard;