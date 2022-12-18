import { View, Text,Button } from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const payNow=()=>{
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_ZXKvfH48PobplE', // Your api key
      amount: '101',
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }

    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }
   
  
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:25,alignSelf:'center',marginVertical:20,color:'#000000'}}>100</Text>
      <Button
      title='Pay Now'
      onPress={payNow}
      />
    </View>
  )
}

export default App