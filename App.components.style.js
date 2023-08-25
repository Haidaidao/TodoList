import { StyleSheet } from 'react-native'
import colors from './components/contains/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
      },
    
      body: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20
      },
})

export default styles