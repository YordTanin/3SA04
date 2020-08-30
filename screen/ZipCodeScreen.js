import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Kamphaeng Phet', code: '62000' },
    { place: 'Chiang Rai', code: '	57000' },
    { place: 'Nakhon Sawan', code: '60000' },
    { place: 'Tak', code: '63000' },
    { place: 'Nan', code: '55000' },
    { place: 'Phichit', code: '66000' },
    { place: 'Phitsanulok', code: '65000' },
    { place: 'Phetchabun', code: '67000 ' },
    { place: 'Phrae', code: '54000' },
    { place: 'Mae Hong Son', code: '58000' },
    { place: 'Lampang', code: '52000' },
    { place: 'Lamphun', code: '51000' },
    { place: 'Sukhothai', code: '64000' },
    { place: 'Uttaradit', code: '53000' },
    { place: 'Uthai Thani', code: '61000' },
    { place: 'Phayao', code: '56000' },
    { place: 'Krung Thep Maha Nakhon', code: '10100' },
    { place: 'Kanchanaburi', code: '71000' },
    { place: 'Chanthaburi', code: '22000' },
    { place: 'Chachoengsao', code: '24000' },
    { place: 'Chon Buri', code: '20000' },
    { place: 'Chai Nat', code: '17000' },
    { place: 'Nakhon Nayok', code: '26000' },
    
    
]
   

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
    <View style={styles.zipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    </TouchableHighlight>
)
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        flex: 1,
    },
    ZipCode: {
        flex: 1,
    },
})