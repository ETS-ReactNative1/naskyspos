import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const menu = ({route}) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <Text style={styles.text}>MILKSHAKES</Text>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey1}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey2}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey3}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey4}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey5}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey6}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey7}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey8}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey9}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey10}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey11}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey12}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey13}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey14}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey15}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey16}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey17}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey18}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey19}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey20}</Text>
        </View>
        <Text style={styles.text}>SMOOTHIES</Text>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey41}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey42}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey43}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey44}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey45}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey46}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey47}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey48}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey49}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey50}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey51}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey52}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey53}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey54}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey55}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey56}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey57}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey58}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey59}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey60}</Text>
        </View>
        <Text style={styles.text}>JUICES/COCKTAIL</Text>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey81}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey82}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey83}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey84}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey85}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey86}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey87}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey88}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey89}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey90}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey91}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey92}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey93}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey94}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey95}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey96}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey97}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey98}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey99}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey100}</Text>
        </View>
        <Text style={styles.text}>PANCAKES/WAFFLES</Text>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey121}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey122}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey123}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey124}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey125}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey126}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey127}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey128}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey129}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey130}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey131}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey132}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey133}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey134}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey135}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey136}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey137}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey138}</Text>
        </View>
        <View style={styles.fittext}>
        <Text style={styles.left}>{route.params.paramKey139}</Text>
        <View style={styles.cbutton}>
      <Text style={styles.ctext}>-</Text>
      <Text style={styles.ctext}> </Text>
      <Text style={styles.ctext}>+</Text>
    </View>
        <Text style={styles.right}>{route.params.paramKey140}</Text>
        </View>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.chckbtn}>
        <Text style={styles.btext}
        onPress={() => {
          navigation.navigate('receipt');
        }}
        >PROCEED TO CHECKOUT{'\n'}TOTAL:</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default menu;

const styles = StyleSheet.create({
  container: {
    fontSize: 15
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  fittext: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  left:{
    flex: 0.6,
    fontSize: 18,
    marginLeft: 15,
  },
  right: {
    flex: 0.2,
    fontSize: 18,
    marginRight: '4%',
    textAlign: 'right'
  },
  text: {
    fontSize: 19,
    marginLeft: '9%',
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 3,
    },
  chckbtn:{
    position: 'absolute',
    bottom: 10,
    width: "50%",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "25%",
    backgroundColor: "#f09b5a",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btext:{
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
  },
  cbutton: {
    flex: 0.2,
    width: '1%',
    borderRadius: 10,
    height: 30,
    backgroundColor: "#f09b5a",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '1%',
    marginBottom: 3,
    alignContent: 'flex-end'
  },
ctext: {
  fontSize: 20,
  margin: '5%',
  color: 'white',
}
});