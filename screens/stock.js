import React, {useState} from "react";
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const stock = ({navigation}) => {
  const [text101, settext101] = useState('Malt Milkshake');
  const [number101, setnumber101] = React.useState('25.00');
  const [text102, settext102] = useState(null);
  const [number102, setnumber102] = React.useState(null);
  const [text103, settext103] = useState(null);
  const [number103, setnumber103] = React.useState(null);
  const [text104, settext104] = useState(null);
  const [number104, setnumber104] = React.useState(null);
  const [text105, settext105] = useState(null);
  const [number105, setnumber105] = React.useState(null);
  const [text106, settext106] = useState(null);
  const [number106, setnumber106] = React.useState(null);
  const [text107, settext107] = useState(null);
  const [number107, setnumber107] = React.useState(null);
  const [text108, settext108] = useState(null);
  const [number108, setnumber108] = React.useState(null);
  const [text109, settext109] = useState(null);
  const [number109, setnumber109] = React.useState(null);
  const [text110, settext110] = useState(null);
  const [number110, setnumber110] = React.useState(null);
  const [text111, settext111] = useState(null);
  const [number111, setnumber111] = React.useState(null);
  const [text112, settext112] = useState(null);
  const [number112, setnumber112] = React.useState(null);
  const [text113, settext113] = useState(null);
  const [number113, setnumber113] = React.useState(null);
  const [text114, settext114] = useState(null);
  const [number114, setnumber114] = React.useState(null);
  const [text115, settext115] = useState(null);
  const [number115, setnumber115] = React.useState(null);
  const [text116, settext116] = useState(null);
  const [number116, setnumber116] = React.useState(null);
  const [text117, settext117] = useState(null);
  const [number117, setnumber117] = React.useState(null);
  const [text118, settext118] = useState(null);
  const [number118, setnumber118] = React.useState(null);
  const [text119, settext119] = useState(null);
  const [number119, setnumber119] = React.useState(null);
  const [text120, settext120] = useState(null);
  const [number120, setnumber120] = React.useState(null);

  const [text201, settext201] = useState(null);
  const [number201, setnumber201] = React.useState(null);
  const [text202, settext202] = useState(null);
  const [number202, setnumber202] = React.useState(null);
  const [text203, settext203] = useState(null);
  const [number203, setnumber203] = React.useState(null);
  const [text204, settext204] = useState(null);
  const [number204, setnumber204] = React.useState(null);
  const [text205, settext205] = useState(null);
  const [number205, setnumber205] = React.useState(null);
  const [text206, settext206] = useState(null);
  const [number206, setnumber206] = React.useState(null);
  const [text207, settext207] = useState(null);
  const [number207, setnumber207] = React.useState(null);
  const [text208, settext208] = useState(null);
  const [number208, setnumber208] = React.useState(null);
  const [text209, settext209] = useState(null);
  const [number209, setnumber209] = React.useState(null);
  const [text210, settext210] = useState(null);
  const [number210, setnumber210] = React.useState(null);
  const [text211, settext211] = useState(null);
  const [number211, setnumber211] = React.useState(null);
  const [text212, settext212] = useState(null);
  const [number212, setnumber212] = React.useState(null);
  const [text213, settext213] = useState(null);
  const [number213, setnumber213] = React.useState(null);
  const [text214, settext214] = useState(null);
  const [number214, setnumber214] = React.useState(null);
  const [text215, settext215] = useState(null);
  const [number215, setnumber215] = React.useState(null);
  const [text216, settext216] = useState(null);
  const [number216, setnumber216] = React.useState(null);
  const [text217, settext217] = useState(null);
  const [number217, setnumber217] = React.useState(null);
  const [text218, settext218] = useState(null);
  const [number218, setnumber218] = React.useState(null);
  const [text219, settext219] = useState(null);
  const [number219, setnumber219] = React.useState(null);
  const [text220, settext220] = useState(null);
  const [number220, setnumber220] = React.useState(null);

  const [text301, settext301] = useState(null);
  const [number301, setnumber301] = React.useState(null);
  const [text302, settext302] = useState(null);
  const [number302, setnumber302] = React.useState(null);
  const [text303, settext303] = useState(null);
  const [number303, setnumber303] = React.useState(null);
  const [text304, settext304] = useState(null);
  const [number304, setnumber304] = React.useState(null);
  const [text305, settext305] = useState(null);
  const [number305, setnumber305] = React.useState(null);
  const [text306, settext306] = useState(null);
  const [number306, setnumber306] = React.useState(null);
  const [text307, settext307] = useState(null);
  const [number307, setnumber307] = React.useState(null);
  const [text308, settext308] = useState(null);
  const [number308, setnumber308] = React.useState(null);
  const [text309, settext309] = useState(null);
  const [number309, setnumber309] = React.useState(null);
  const [text310, settext310] = useState(null);
  const [number310, setnumber310] = React.useState(null);
  const [text311, settext311] = useState(null);
  const [number311, setnumber311] = React.useState(null);
  const [text312, settext312] = useState(null);
  const [number312, setnumber312] = React.useState(null);
  const [text313, settext313] = useState(null);
  const [number313, setnumber313] = React.useState(null);
  const [text314, settext314] = useState(null);
  const [number314, setnumber314] = React.useState(null);
  const [text315, settext315] = useState(null);
  const [number315, setnumber315] = React.useState(null);
  const [text316, settext316] = useState(null);
  const [number316, setnumber316] = React.useState(null);
  const [text317, settext317] = useState(null);
  const [number317, setnumber317] = React.useState(null);
  const [text318, settext318] = useState(null);
  const [number318, setnumber318] = React.useState(null);
  const [text319, settext319] = useState(null);
  const [number319, setnumber319] = React.useState(null);
  const [text320, settext320] = useState(null);
  const [number320, setnumber320] = React.useState(null);

  const [text401, settext401] = useState(null);
  const [number401, setnumber401] = React.useState(null);
  const [text402, settext402] = useState(null);
  const [number402, setnumber402] = React.useState(null);
  const [text403, settext403] = useState(null);
  const [number403, setnumber403] = React.useState(null);
  const [text404, settext404] = useState(null);
  const [number404, setnumber404] = React.useState(null);
  const [text405, settext405] = useState(null);
  const [number405, setnumber405] = React.useState(null);
  const [text406, settext406] = useState(null);
  const [number406, setnumber406] = React.useState(null);
  const [text407, settext407] = useState(null);
  const [number407, setnumber407] = React.useState(null);
  const [text408, settext408] = useState(null);
  const [number408, setnumber408] = React.useState(null);
  const [text409, settext409] = useState(null);
  const [number409, setnumber409] = React.useState(null);
  const [text410, settext410] = useState(null);
  const [number410, setnumber410] = React.useState(null);
  const [text411, settext411] = useState(null);
  const [number411, setnumber411] = React.useState(null);
  const [text412, settext412] = useState(null);
  const [number412, setnumber412] = React.useState(null);
  const [text413, settext413] = useState(null);
  const [number413, setnumber413] = React.useState(null);
  const [text414, settext414] = useState(null);
  const [number414, setnumber414] = React.useState(null);
  const [text415, settext415] = useState(null);
  const [number415, setnumber415] = React.useState(null);
  const [text416, settext416] = useState(null);
  const [number416, setnumber416] = React.useState(null);
  const [text417, settext417] = useState(null);
  const [number417, setnumber417] = React.useState(null);
  const [text418, settext418] = useState(null);
  const [number418, setnumber418] = React.useState(null);
  const [text419, settext419] = useState(null);
  const [number419, setnumber419] = React.useState(null);
  const [text420, settext420] = useState(null);
  const [number420, setnumber420] = React.useState(null);

  return (
    <SafeAreaView>
      <ScrollView>
      
        <Text style={styles.text}>MILKSHAKES</Text>
        <View style={styles.fittext}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.headtext}>ITEM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.price}>
          <Text style={styles.headtext}>PRICE</Text>
        </TouchableOpacity>
        </View>

      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text101) => settext101(text101)}
        value={text101}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number101) => setnumber101(number101)}
        value={number101}
        keyboardType="numeric"
      />
      </View>
       <View style={styles.fittext}> 
       <TextInput
        style={styles.inputleft}
        onChangeText={(text102) => settext102(text102)}
        value={text102}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number102) => setnumber102(number102)}
        value={number102}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text103) => settext103(text103)}
        value={text103}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number103) => setnumber103(number103)}
        value={number103}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text104) => settext104(text104)}
        value={text104}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number104) => setnumber104(number104)}
        value={number104}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text105) => settext105(text105)}
        value={text105}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number105) => setnumber105(number105)}
        value={number105}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text106) => settext106(text106)}
        value={text106}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number106) => setnumber106(number106)}
        value={number106}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text107) => settext107(text107)}
        value={text107}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number107) => setnumber107(number107)}
        value={number107}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text108) => settext108(text108)}
        value={text108}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number108) => setnumber108(number108)}
        value={number108}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text109) => settext109(text109)}
        value={text109}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number109) => setnumber109(number109)}
        value={number109}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text110) => settext110(text110)}
        value={text110}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number110) => setnumber110(number110)}
        value={number110}
        keyboardType="numeric"
      />
      </View>
      <Text style={styles.text}>SMOOTHIES</Text>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text201) => settext201(text201)}
        value={text201}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number201) => setnumber201(number201)}
        value={number201}
        keyboardType="numeric"
      />
      </View>
       <View style={styles.fittext}> 
       <TextInput
        style={styles.inputleft}
        onChangeText={(text202) => settext202(text202)}
        value={text202}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number202) => setnumber202(number202)}
        value={number202}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text203) => settext203(text203)}
        value={text203}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number203) => setnumber203(number203)}
        value={number203}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text204) => settext204(text204)}
        value={text204}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number204) => setnumber204(number204)}
        value={number204}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text205) => settext205(text205)}
        value={text205}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number205) => setnumber205(number205)}
        value={number205}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text206) => settext206(text206)}
        value={text206}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number206) => setnumber206(number206)}
        value={number206}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text207) => settext207(text207)}
        value={text207}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number207) => setnumber207(number207)}
        value={number207}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text208) => settext208(text208)}
        value={text208}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number208) => setnumber208(number208)}
        value={number208}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text209) => settext209(text209)}
        value={text209}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number209) => setnumber209(number209)}
        value={number209}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text210) => settext210(text210)}
        value={text210}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number210) => setnumber210(number210)}
        value={number210}
        keyboardType="numeric"
      />
      </View>
      <Text style={styles.text}>JUICES/COCKTAIL</Text>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text301) => settext301(text301)}
        value={text301}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number301) => setnumber301(number301)}
        value={number301}
        keyboardType="numeric"
      />
      </View>
       <View style={styles.fittext}> 
       <TextInput
        style={styles.inputleft}
        onChangeText={(text302) => settext302(text302)}
        value={text302}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number302) => setnumber302(number302)}
        value={number302}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text303) => settext303(text303)}
        value={text303}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number303) => setnumber303(number303)}
        value={number303}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text304) => settext304(text304)}
        value={text304}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number304) => setnumber304(number304)}
        value={number304}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text305) => settext305(text305)}
        value={text305}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number305) => setnumber305(number305)}
        value={number305}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text306) => settext306(text306)}
        value={text306}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number306) => setnumber306(number306)}
        value={number306}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text307) => settext307(text307)}
        value={text307}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number307) => setnumber307(number307)}
        value={number307}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text308) => settext308(text308)}
        value={text308}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number308) => setnumber308(number308)}
        value={number308}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text309) => settext309(text309)}
        value={text309}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number309) => setnumber309(number309)}
        value={number309}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text310) => settext310(text310)}
        value={text310}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number310) => setnumber310(number310)}
        value={number310}
        keyboardType="numeric"
      />
      </View>
      <Text style={styles.text}>PANCAKES/WAFFLES</Text>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text401) => settext401(text401)}
        value={text401}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number401) => setnumber401(number401)}
        value={number401}
        keyboardType="numeric"
      />
      </View>
       <View style={styles.fittext}> 
       <TextInput
        style={styles.inputleft}
        onChangeText={(text402) => settext402(text402)}
        value={text402}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number402) => setnumber402(number402)}
        value={number402}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text403) => settext403(text403)}
        value={text403}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number403) => setnumber403(number403)}
        value={number403}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text404) => settext404(text404)}
        value={text404}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number404) => setnumber404(number404)}
        value={number404}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text405) => settext405(text405)}
        value={text405}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number405) => setnumber405(number405)}
        value={number405}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text406) => settext406(text406)}
        value={text406}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number406) => setnumber406(number406)}
        value={number406}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text407) => settext407(text407)}
        value={text407}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number407) => setnumber407(number407)}
        value={number407}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text408) => settext408(text408)}
        value={text408}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number408) => setnumber408(number408)}
        value={number408}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.fittext}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text409) => settext409(text409)}
        value={text409}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number409) => setnumber409(number409)}
        value={number409}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.last}> 
      <TextInput
        style={styles.inputleft}
        onChangeText={(text410) => settext410(text410)}
        value={text410}
      />
      <TextInput
        style={styles.inputright}
        onChangeText={(number410) => setnumber410(number410)}
        value={number410}
        keyboardType="numeric"
      />
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.dbutton}>
        <Text style={styles.btntext}
        onPress={() => 
          navigation.navigate('menu', {
            paramKey1: text101,
            paramKey2: number101,
            paramKey3: text102,
            paramKey4: number102,
            paramKey5: text103,
            paramKey6: number103,
            paramKey7: text104,
            paramKey8: number104,
            paramKey9: text105,
            paramKey10: number105,
            paramKey11: text106,
            paramKey12: number106,
            paramKey13: text107,
            paramKey14: number107,
            paramKey15: text108,
            paramKey16: number108,
            paramKey17: text109,
            paramKey18: number109,
            paramKey19: text110,
            paramKey20: number110,
            paramKey21: text111,
            paramKey22: number111,
            paramKey23: text112,
            paramKey24: number112,
            paramKey25: text113,
            paramKey26: number113,
            paramKey27: text114,
            paramKey28: number114,
            paramKey29: text115,
            paramKey30: number115,
            paramKey31: text116,
            paramKey32: number116,
            paramKey33: text117,
            paramKey34: number117,
            paramKey35: text118,
            paramKey36: number118,
            paramKey37: text119,
            paramKey38: number119,
            paramKey39: text120,
            paramKey40: number120,

            paramKey41: text201,
            paramKey42: number201,
            paramKey43: text202,
            paramKey44: number202,
            paramKey45: text203,
            paramKey46: number203,
            paramKey47: text204,
            paramKey48: number204,
            paramKey49: text205,
            paramKey50: number205,
            paramKey51: text206,
            paramKey52: number206,
            paramKey53: text207,
            paramKey54: number207,
            paramKey55: text208,
            paramKey56: number208,
            paramKey57: text209,
            paramKey58: number209,
            paramKey59: text210,
            paramKey60: number210,
            paramKey61: text211,
            paramKey62: number211,
            paramKey63: text212,
            paramKey64: number212,
            paramKey65: text213,
            paramKey66: number213,
            paramKey67: text214,
            paramKey68: number214,
            paramKey69: text215,
            paramKey70: number215,
            paramKey71: text216,
            paramKey72: number216,
            paramKey73: text217,
            paramKey74: number217,
            paramKey75: text218,
            paramKey76: number218,
            paramKey77: text219,
            paramKey78: number219,
            paramKey79: text220,
            paramKey80: number220,

            paramKey81: text301,
            paramKey82: number301,
            paramKey83: text302,
            paramKey84: number302,
            paramKey85: text303,
            paramKey86: number303,
            paramKey87: text304,
            paramKey88: number304,
            paramKey89: text305,
            paramKey90: number305,
            paramKey91: text306,
            paramKey92: number306,
            paramKey93: text307,
            paramKey94: number307,
            paramKey95: text308,
            paramKey96: number308,
            paramKey97: text309,
            paramKey98: number309,
            paramKey99: text310,
            paramKey100: number310,
            paramKey101: text311,
            paramKey102: number311,
            paramKey103: text312,
            paramKey104: number312,
            paramKey105: text313,
            paramKey106: number313,
            paramKey107: text314,
            paramKey108: number314,
            paramKey109: text315,
            paramKey110: number315,
            paramKey111: text316,
            paramKey112: number316,
            paramKey113: text317,
            paramKey114: number317,
            paramKey115: text318,
            paramKey116: number318,
            paramKey117: text319,
            paramKey118: number319,
            paramKey119: text320,
            paramKey120: number320,

            paramKey121: text401,
            paramKey122: number401,
            paramKey123: text402,
            paramKey124: number402,
            paramKey125: text403,
            paramKey126: number403,
            paramKey127: text404,
            paramKey128: number404,
            paramKey129: text405,
            paramKey130: number405,
            paramKey131: text406,
            paramKey132: number406,
            paramKey133: text407,
            paramKey134: number407,
            paramKey135: text408,
            paramKey136: number408,
            paramKey137: text409,
            paramKey138: number409,
            paramKey139: text410,
            paramKey140: number410,
            paramKey141: text411,
            paramKey142: number411,
            paramKey143: text412,
            paramKey144: number412,
            paramKey145: text413,
            paramKey146: number413,
            paramKey147: text414,
            paramKey148: number414,
            paramKey149: text415,
            paramKey150: number415,
            paramKey151: text416,
            paramKey152: number416,
            paramKey153: text417,
            paramKey154: number417,
            paramKey155: text418,
            paramKey156: number418,
            paramKey157: text419,
            paramKey158: number419,
            paramKey159: text420,
            paramKey160: number420,
          })
        }
        >DONE</Text>
      </TouchableOpacity>
    </SafeAreaView>
   
  );
};
export default stock;

const styles = StyleSheet.create({
  inputright: {
    width: '25%',
    height: 40,
    marginLeft: 5,
    borderWidth: 1,
    padding: 10,
  },
  inputleft: {
    width: '60%',
    height: 40,
    marginLeft: 5,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    width: '60%',
    height: 40,
    marginLeft: 5,
    borderWidth: 1,
    padding: 10,
  },
  price: {
    width: '25%',
    height: 40,
    marginLeft: 5,
    borderWidth: 1,
    padding: 10,
  },
  fittext: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  last: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '20%'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headtext: {
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
  },
  btntext: {
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  dbutton: {
    position: 'absolute',
    bottom: 10,
    width: "20%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "40%",
    backgroundColor: "#f09b5a",
  }
});