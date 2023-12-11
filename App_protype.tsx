import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [kokokoTodayTradeBuy, setKokokoTodayTradeBuy] = useState([]);
  const [kokokoTodayTradeSell, setKokokoTodayTradeSell] = useState([]);

  const getTraceData = async () => {
    try {
      const API1 = 'https://reactnative.dev/movies.json';
      const API2 = "https://api.open-meteo.com/v1/forecast?latitude=38.00&longitude=42.00&current_weather=true";
      const API3 = "http://118.219.142.14:8001/api/get_total_data";
      const API4 = "http://localhost:8000/api/get_total_data";

      const response = await fetch(API4);
      const json = await response.json();

      // sleep 1 sec
      //console.log("-------- sleep 1 sec --------")
      //await new Promise(resolve => setTimeout(resolve, 3000));

      setData(json);
      setKokokoTodayTradeBuy(json.kokoko_today_trade_data.today_buy);
      setKokokoTodayTradeSell(json.kokoko_today_trade_data.today_sell);

      console.log(json.kokoko_today_trade_data.today_buy[0].ELF.buy_order_funds);

      /*
      console.log(json.basic_ticker_data);
      console.log(json.kokoko_today_trade_data);
      */

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTraceData();
    let timer = setInterval(() => {
      console.log("-------- sleep 5 sec --------")
      getTraceData();
    }, 1000)

  }, []);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text>Loading</Text>
        </>
      ) : (
        <>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text>Completed</Text>
          <Text></Text>
          <Text>[ Today Buy ]</Text>
          <Text>- ELF order: {kokokoTodayTradeBuy[0].ELF.buy_order_funds}</Text>
          <Text>- ELF price: {kokokoTodayTradeBuy[0].ELF.buy_order_price}</Text>
          <Text>- ELF time : {kokokoTodayTradeBuy[0].ELF.buy_time}</Text>
          <Text>- ELF logic: {kokokoTodayTradeBuy[0].ELF.buy_logic}</Text>
          <Text></Text>
          <Text>[ Today Sell ]</Text>
          <Text>- BLUR buy order: {kokokoTodayTradeSell[0].BLUR.buy_order_funds}</Text>
          <Text>- BLUR buy price: {kokokoTodayTradeSell[0].BLUR.buy_order_price}</Text>
          <Text>- BLUR buy time : {kokokoTodayTradeSell[0].BLUR.buy_time}</Text>
          <Text>- BLUR buy logic: {kokokoTodayTradeSell[0].BLUR.buy_logic}</Text>
          <Text></Text>
          <Text>- BLUR sell order: {kokokoTodayTradeSell[0].BLUR.sell_order_funds}</Text>
          <Text>- BLUR sell price: {kokokoTodayTradeSell[0].BLUR.sell_order_price}</Text>
          <Text>- BLUR sell time: {kokokoTodayTradeSell[0].BLUR.sell_time}</Text>
          <Text>- BLUR sell logic: {kokokoTodayTradeSell[0].BLUR.sell_logic}</Text>
          <Text>- BLUR benefit rate: {kokokoTodayTradeSell[0].BLUR.benefit_rate}</Text>
        </>
      )}
    </View>
  );
};

export default App;