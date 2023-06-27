import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Alert,
  Animated,
} from 'react-native';
import React, {Component} from 'react';
import GloablContext from '../contextApi/GlobalContext';

import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

interface IProps {
  navigation: any;
}
interface IState {}

export class Screen2 extends Component<IProps, IState> {
  state = {
    error: false,
  };
  static contextType: any = GloablContext;
  render() {
    console.log(this.context);
    return (
      <View
        style={{
          height: Dimensions.get('window').height,
        }}>
        <ImageBackground
          style={{
            height: Dimensions.get('window').height,
          }}
          source={require('../images/todoimage.jpg')}>
          <Text style={styles.title}>T O D O</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              margin: 0,
            }}>
            <TextInput
              value={this.context.task}
              style={{
                borderColor: 'black',
                borderWidth: 1,
                width: '60%',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                color: 'black',
                padding: 7,
                borderRadius: 10,
              }}
              placeholder="Enter the task"
              placeholderTextColor="black"
              onChangeText={(text: any) => {
                this.context.onHandletask(text);
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#00bfff',
                height: '32%',
                width: '17%',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginLeft: 10,
              }}
              onPress={() => {
                this.context.addTask(this.state.task);
                this.setState({error: true});
              }}>
              <Text style={{color: 'white', fontSize: 18}}>Add</Text>
            </TouchableOpacity>
          </View>
          {this.state.error && this.state.task === '' ? (
            <Text
              style={{
                color: 'red',
                paddingLeft: 40,
                bottom: 34,
                margin: 0,
              }}>
              Please Add task
            </Text>
          ) : null}
          {this.context.taskList.length !== 0 ? (
            <FlatList
              bounces={true}
              data={this.context.taskList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.rowcontainer}>
                    <Text
                      style={{color: 'black', fontSize: 22, fontWeight: '500'}}>
                      {item.task}
                    </Text>
                    <FontAwesome
                      onPress={() => {
                        this.context.deleteTask(index);
                        this.setState({task: ''});
                      }}
                      size={30}
                      color="red"
                      name="remove"
                    />
                  </View>
                );
              }}
            />
          ) : (
            <Text style={{textAlign: 'center', color: 'red', fontSize: 16}}>
              NO TASKS ARE ADDED
            </Text>
          )}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Screen1')}
            style={{
              backgroundColor: 'blue',
              height: '7%',
              width: '30%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 10,

              marginBottom: 10,
              position: 'absolute',
              bottom: 0,
            }}>
            <MaterialIcons name="navigate-next" color="white" size={30} />
            <Text style={{color: 'white', fontSize: 18}}>Screen1</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: '80%',
    marginBottom: 15,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
  },
});
export default Screen2;
