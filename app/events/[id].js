import { View , Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Event(){
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>page {id}</Text>
        </View>
    )
}