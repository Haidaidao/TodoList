import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 60,
        alignItems: 'center',
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },

    even: {
        backgroundColor: '#00CCFF'
      },
    odd: {
        backgroundColor: '#00FF33'
    }
})

export default styles