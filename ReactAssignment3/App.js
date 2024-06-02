import { StyleSheet, Image, View ,  Text, ScrollView, SafeAreaView, SectionList } from 'react-native';



const Header = require('./assets/Images/hello devs.png');
const Search = require('./assets/Images/Search.png');
const Categories = require('./assets/Images/Categories.png');
const Exercise = require('./assets/Images/exercise.png');
const Study = require('./assets/Images/working at desk.png');
const Sleeping = require('./assets/Images/Sleeping woman.jpeg');
const Code = require('./assets/Images/Code.jpg');
const Health = require('./assets/Images/Health.jpeg');
const Call = require('./assets/Images/Call.jpeg');
const Cook = require('./assets/Images/Cook.jpeg');
const Eat = require('./assets/Images/Eat.jpeg');


const DATA = [
  {
    title:"Ongoing Task",
    data: ["Mobile App Development", "Web Development", "Push Ups","Project Planning", "Customer Support", 
      "Database Management", "Content Writing", "Networking", "Code Review", "Software Testing", 
      "Graphic Design", "Quality Assurance", "Budget Planning", "Customer Feedback Analysis", "Blogging"
    ]

  }
];

 const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}> {title} </Text>
  </View>
);





export default function App() {
  return (
    <View style={styles.container}>
     
    <ScrollView>
    
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

      <View style={styles.store}>
    <View style={styles.pictureContainer}>
        <Text style={{fontWeight:"bold", fontSize:18,marginLeft:30}}>Health</Text>
          <Text style={{marginLeft:30}}>12 Tasks</Text> 
          <Image source={Health} style={styles.pictures} />

        </View>
         <View style={styles.pictureContainer}>
        <Text style={{fontWeight:"bold", fontSize:18, marginLeft:30}}>Call</Text>
        <Text style={{marginLeft:30}}>12 tasks</Text>
      <Image source={Call} style={styles.right} />
      </View>
      
      </View>

        <View style={styles.store}>
    <View style={styles.pictureContainer}>
        <Text style={{fontWeight:"bold", fontSize:18,marginLeft:30}}>Cook</Text>
          <Text style={{marginLeft:30}}>12 Tasks</Text> 
          <Image source={Cook} style={styles.pictures} />

        </View>
         <View style={styles.pictureContainer}>
        <Text style={{fontWeight:"bold", fontSize:18, marginLeft:30}}>Eat</Text>
        <Text style={{marginLeft:30}}>12 tasks</Text>
      <Image source={Eat} style={styles.right} />
      </View>
      
      </View>

      <SafeAreaView style={styles.container}>
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section : {title} }) => (
        <Text style={styles.header}> {title} </Text>
      )}
      />
    </SafeAreaView>

      </ScrollView>

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
    marginLeft:30,
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
    marginLeft:30,
    marginRight:10,
  },

  pictureContainer:{
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 40,
  },

  item: {
    backgroundColor: '#fbf9f7',
    padding: 50,
    marginVertical: 8,
    borderRadius: 5,
    marginLeft:30,
    marginRight:10,
    flexDirection:'row',
    width: 500,
  },

  header: {
    fontSize: 32,
    backgroundColor: '#f7f0e8',
    marginLeft:30,
  },

  title: {
    fontSize: 24,
  },


});
