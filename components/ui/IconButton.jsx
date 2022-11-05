import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
function IconButton({ icon, size, color, pressHandler }){
    return (
        <Pressable onPress={pressHandler} style={({pressed})=>{return pressed && styles.pressed}}>
            <View style={styles.buttonContainer}>
                <Ionicons name = {icon} size={size} color={color}/>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius: 24,
        padding: 6,
        margin: 8,
        marginHorizontal:8,
        marginVertical:2
    },
    pressed:{
        opacity:0.75
    }
})

export default IconButton;