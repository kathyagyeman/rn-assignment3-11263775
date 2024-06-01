import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View ,  Text} from 'react-native';



const Header = require('./assets/Images/hello devs.png');
const Search = require('./assets/Images/Search.png');
const Categories = require('./assets/Images/Categories.png');
const Exercise = require('./assets/Images/exercise.png');
const Study = require('./assets/Images/working at desk.png');
const Sleeping = require('./assets/Images/Sleeping woman.jpeg');
const Code = require('./assets/Images/Code.jpg');




export default function App() {
  return (

    <View style={styles.container}>
    
      <Image source={Header} style={styles.image} />
      <Image source={Search} style={styles.image} />
      <Image source={Categories} style={styles.image} />

      <View style={styles.store}>
    <View style={styles.pictureContainer}>
        <Text style={{fontWeight:"bold", fontSize:18,marginLeft:30}}>Exercise</Text>
          <Text style={{marginLeft:30}}>12 Tasks</Text> 
          <Image source={Exercise} style={styles.pictures} />

        </View>
         <View style={styles.pictureContainer}>
        <Text style={{fontWeight:"bold", fontSize:18, marginLeft:30}}>Study</Text>
        <Text style={{marginLeft:30}}>12 tasks</Text>
      <Image source={Study} style={styles.right} />
      </View>
      
      </View>
      
      

      
    <View style={styles.store}>
    <View style={styles.pictureContainer}>
        <Text style={{fontWeight:"bold", fontSize:18,marginLeft:30}}>Sleeping</Text>
          <Text style={{marginLeft:30}}>12 Tasks</Text> 
          <Image source={Sleeping} style={styles.pictures} />

        </View>
         <View style={styles.pictureContainer}>
        <Text style={{fontWeight:"bold", fontSize:18, marginLeft:30}}>Code</Text>
        <Text style={{marginLeft:30}}>12 tasks</Text>
      <Image source={Code} style={styles.right} />
      </View>
     
  
      

        </View>

    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    
  },

  image: {
    marginBottom:30,
  },
   
  pictures: {
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor:'#fff',
    borderRadius:5,
    width:170,
    height:170,
  },

  right: {
    marginBottom: 20,
    width:180,
     height:180, 
    backgroundColor:'#fff',
    borderRadius:5,
   
    
  },

  store: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    
    
  },

  pictureContainer:{
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 40,
    
  },

});
