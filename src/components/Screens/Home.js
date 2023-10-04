import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Astronomy Picture Of The Day!</Text>
        <Image
          style={styles.photo}
          source={{uri:'https://apod.nasa.gov/apod/image/2310/WitchHead_Alharbi_1080.jpg',}}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.title2}>The Witch Head Nebula</Text>
        <Text style={styles.description}>Does this nebula look like the head of a witch? The nebula is known popularly as the Witch Head Nebula because, it is said, the nebula's shape resembles a Halloween-style caricature of a witch's head. Exactly how, though, can be a topic of imaginative speculation. What is clear is that IC 2118 is about 50 light-years across and made of gas and dust that points to -- because it has been partly eroded by -- the nearby star Rigel. One of the brighter stars in the constellation Orion, Rigel lies below the bottom of the featured image. The blue color of the Witch Head Nebula and is caused not only by Rigel's intense blue starlight but because the dust grains scatter blue light more efficiently than red. The same physical process causes Earth's daytime sky to appear blue, although the scatterers in planet Earth's atmosphere are molecules of nitrogen and oxygen.</Text>
      </View>
    </View>
  )
} 
export default Home;


const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems:'center',
  },
  container2:{
    justifyContent: 'flex-start', // Alinea en el eje principal (horizontalmente) hacia el inicio
    alignItems: 'flex-start', // Alinea en el eje secundario (verticalmente) hacia el inicio
    paddingHorizontal: 10, // Espacio en el borde izquierdo para separar el texto del borde
    padding: 5, 
  },
  title:{
    padding:20,
    fontSize:22,
    fontWeight:'bold'
  },
  title2:{
    fontSize:15,
    fontWeight:'500'
    
  },
  description:{
    fontSize:14
  },
  whiteText: {
    color: '#FFFFFF'
  },
  darkText: {
    color: '#000000'
  },
  photo: {
    width:390,
    height:390,
  }
  
});