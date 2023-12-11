import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';

const YourComponent: React.FC = () => {
  const [basic_Data, set_Basic_Data] = useState<any[]>([]);
  // "now_trade_data"
  const [upbit_1_now_trade_Data_buy_order_wait_data, set_upbit_1_Now_Trade_Data_buy_order_wait_data] = useState<any[]>([]);
  const [upbit_1_now_trade_Data_buy_check_data, set_upbit_1_Now_Trade_Data_buy_check_data] = useState<any[]>([]);
  const [upbit_1_now_trade_Data_sell_check_data, set_upbit_1_Now_Trade_Data_sell_check_data] = useState<any[]>([]);
  const [upbit_1_today_trade_Data, set_upbit_1_Today_Data] = useState<any[]>([]);
  const [upbit_1_total_benefit_Data, set_upbit_1_benefit] = useState<any[]>([]);
  const [upbit_1_memo, set_upbit_1_memo] = useState<any[]>([]);
  const [upbit_1_run_is, set_upbit_1_run_is] = useState<any[]>([]);

  const [hihihi_now_trade_Data_buy_order_wait_data, set_hihihi_Now_Trade_Data_buy_order_wait_data] = useState<any[]>([]);
  const [hihihi_now_trade_Data_buy_check_data, set_hihihi_Now_Trade_Data_buy_check_data] = useState<any[]>([]);
  const [hihihi_now_trade_Data_sell_check_data, set_hihihi_Now_Trade_Data_sell_check_data] = useState<any[]>([]);
  const [hihihi_today_trade_Data, set_hihihi_Today_Data] = useState<any[]>([]);
  const [hihihi_total_benefit_Data, set_hihihi_benefit] = useState<any[]>([]);
  const [hihihi_memo, set_hihihi_memo] = useState<any[]>([]);
  const [hihihi_run_is, set_hihihi_run_is] = useState<any[]>([]);

  const [kokoko_now_trade_Data_buy_order_wait_data, set_kokoko_Now_Trade_Data_buy_order_wait_data] = useState<any[]>([]);
  const [kokoko_now_trade_Data_buy_check_data, set_kokoko_Now_Trade_Data_buy_check_data] = useState<any[]>([]);
  const [kokoko_now_trade_Data_sell_check_data, set_kokoko_Now_Trade_Data_sell_check_data] = useState<any[]>([]);
  const [kokoko_today_trade_Data, set_kokoko_Today_Data] = useState<any[]>([]);
  const [kokoko_total_benefit_Data, set_kokoko_benefit] = useState<any[]>([]);
  const [kokoko_memo, set_kokoko_memo] = useState<any[]>([]);
  const [kokoko_run_is, set_kokoko_run_is] = useState<any[]>([]);


  const [sim_1_now_trade_Data_buy_order_wait_data, set_sim_1_Now_Trade_Data_buy_order_wait_data] = useState<any[]>([]);
  const [sim_1_now_trade_Data_buy_check_data, set_sim_1_Now_Trade_Data_buy_check_data] = useState<any[]>([]);
  const [sim_1_now_trade_Data_sell_check_data, set_sim_1_Now_Trade_Data_sell_check_data] = useState<any[]>([]);
  const [sim_1_today_trade_Data, set_sim_1_Today_Data] = useState<any[]>([]);
  const [sim_1_total_benefit_Data, set_sim_1_benefit] = useState<any[]>([]);
  const [sim_1_memo, set_sim_1_memo] = useState<any[]>([]);
  const [sim_1_run_is, set_sim_1_run_is] = useState<any[]>([]);

  const [sim_2_now_trade_Data_buy_order_wait_data, set_sim_2_Now_Trade_Data_buy_order_wait_data] = useState<any[]>([]);
  const [sim_2_now_trade_Data_buy_check_data, set_sim_2_Now_Trade_Data_buy_check_data] = useState<any[]>([]);
  const [sim_2_now_trade_Data_sell_check_data, set_sim_2_Now_Trade_Data_sell_check_data] = useState<any[]>([]);
  const [sim_2_today_trade_Data, set_sim_2_Today_Data] = useState<any[]>([]);
  const [sim_2_total_benefit_Data, set_sim_2_benefit] = useState<any[]>([]);
  const [sim_2_memo, set_sim_2_memo] = useState<any[]>([]);
  const [sim_2_run_is, set_sim_2_run_is] = useState<any[]>([]);


  const scrollViewRef = useRef<ScrollView>(null);
  const [activeTab, setActiveTab] = useState<number>(0);



  //const apiUrl = 'http://118.219.142.14:8001/api/get_total_data'; // API의 주소
  const apiUrl = 'http://localhost:8000/api/get_total_data'; // API의 주소
  //const apiUrl = 'https://reactnative.dev/movies.json'; // API의 주소

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        const str_json_data = await JSON.stringify(jsonData);
        const parse_json_data = await JSON.parse(str_json_data);
        set_Basic_Data(parse_json_data.basic_ticker_data);

        try {
          set_upbit_1_Now_Trade_Data_buy_order_wait_data(parse_json_data.upbit_1_now_trade_data.buy_order_wait_data);

          set_upbit_1_Now_Trade_Data_buy_check_data(parse_json_data.upbit_1_now_trade_data.buy_check_data);
          set_upbit_1_Now_Trade_Data_sell_check_data(parse_json_data.upbit_1_now_trade_data.sell_check_data);
          set_upbit_1_Today_Data(parse_json_data.upbit_1_today_trade_data.today_sell);
          set_upbit_1_benefit(parse_json_data.upbit_1_total_benefit_data);
          set_upbit_1_memo(parse_json_data.upbit_1_memo);
          set_upbit_1_run_is(parse_json_data.upbit_1_run_is);
        } catch {
          console.log('upbit_1 => Error fetching data:');
        }

        try {
          set_hihihi_Now_Trade_Data_buy_order_wait_data(parse_json_data.hihihi_now_trade_data.buy_order_wait_data);
          set_hihihi_Now_Trade_Data_buy_check_data(parse_json_data.hihihi_now_trade_data.buy_check_data);
          set_hihihi_Now_Trade_Data_sell_check_data(parse_json_data.hihihi_now_trade_data.sell_check_data);
          set_hihihi_Today_Data(parse_json_data.hihihi_today_trade_data.today_sell);
          set_hihihi_benefit(parse_json_data.hihihi_total_benefit_data);
          set_hihihi_memo(parse_json_data.hihihi_memo);
          set_hihihi_run_is(parse_json_data.hihihi_run_is);
        } catch {
          console.log('hihihi => Error fetching data:');
        }

        try {
          set_kokoko_Now_Trade_Data_buy_order_wait_data(parse_json_data.kokoko_now_trade_data.buy_order_wait_data);
          set_kokoko_Now_Trade_Data_buy_check_data(parse_json_data.kokoko_now_trade_data.buy_check_data);
          set_kokoko_Now_Trade_Data_sell_check_data(parse_json_data.kokoko_now_trade_data.sell_check_data);
          set_kokoko_Today_Data(parse_json_data.kokoko_today_trade_data.today_sell);
          set_kokoko_benefit(parse_json_data.kokoko_total_benefit_data);
          set_kokoko_memo(parse_json_data.kokoko_memo);
          set_kokoko_run_is(parse_json_data.kokoko_run_is);
        } catch {
          console.log('kokoko => Error fetching data:');
        }

        try {
          set_sim_1_Now_Trade_Data_buy_order_wait_data(parse_json_data.sim_1_now_trade_data.buy_order_wait_data);
          set_sim_1_Now_Trade_Data_buy_check_data(parse_json_data.sim_1_now_trade_data.buy_check_data);
          set_sim_1_Now_Trade_Data_sell_check_data(parse_json_data.sim_1_now_trade_data.sell_check_data);
          set_sim_1_Today_Data(parse_json_data.sim_1_today_trade_data.today_sell);
          set_sim_1_benefit(parse_json_data.sim_1_total_benefit_data);
          set_sim_1_memo(parse_json_data.sim_1_memo);
          set_sim_1_run_is(parse_json_data.sim_1_run_is);
        } catch {
          console.log('sim_1 => Error fetching data:');
        }


        try {
          set_sim_2_Now_Trade_Data_buy_order_wait_data(parse_json_data.sim_2_now_trade_data.buy_order_wait_data);
          set_sim_2_Now_Trade_Data_buy_check_data(parse_json_data.sim_2_now_trade_data.buy_check_data);
          set_sim_2_Now_Trade_Data_sell_check_data(parse_json_data.sim_2_now_trade_data.sell_check_data);
          set_sim_2_Today_Data(parse_json_data.sim_2_today_trade_data.today_sell);
          set_sim_2_benefit(parse_json_data.sim_2_total_benefit_data);
          set_sim_2_memo(parse_json_data.sim_2_memo);
          set_sim_2_run_is(parse_json_data.sim_2_run_is);
        } catch {
          console.log('sim_2 => Error fetching data:');
        }




      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 초기 호출
    console.log(" START ");
    fetchData();

    // 5초마다 데이터 가져오기
    const interval = setInterval(fetchData, 500);

    // 컴포넌트가 언마운트될 때 interval 클리어
    return () => clearInterval(interval);
  }, []);

  const goToPage = (pageIndex: number) => {
    const screenWidth = Dimensions.get('window').width;
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: screenWidth * pageIndex, animated: true });
    }
    setActiveTab(pageIndex);
  };


  const renderTabs = () => {
    const itemsPerPage = 6;
    const pageCount = ["기본", "hah", "hih", "kok", "s_1", "s_2"];
    const tabs: any = [];

    pageCount.map(function (data, index) {
      tabs.push(
        <TouchableOpacity
          key={index}
          onPress={() => goToPage(index)}
          style={[styles.tab, activeTab === index ? styles.activeTab : null]}
        >
          <Text>{data}</Text>
        </TouchableOpacity>
      )
    });


    return tabs;
  };


  const renderPages = () => {
    const itemsPerPage = 6;
    const pageCount = itemsPerPage;
    const screenWidth = Dimensions.get('window').width;


    return Array.from({ length: pageCount }, (_, i) => {
      const startIndex = i * itemsPerPage;
      // const pageData = data.slice(startIndex, startIndex + itemsPerPage);
      // console.log(pageData)

      if (i === 0) {
        // 첫 번째 페이지에 11줄의 표 추가
        return (
          <View key={i} style={[styles.page, { width: screenWidth }]}>
            <ScrollView>
              <Text style={styles.title}>거래량 상위 종목 기본 정보</Text>

              <View style={styles.table}>
                <View style={styles.headerRow}>
                  <Text style={styles.header}>No</Text>
                  <Text style={styles.header}>종목</Text>
                  <Text style={styles.header}>현재가</Text>
                  <Text style={styles.header}>ENV</Text>
                  <Text style={styles.header}>BB</Text>
                  {/* <Text style={styles.header}>RSI</Text> */}
                  {/* <Text style={styles.header}>MDI</Text> */}
                  <Text style={styles.header}>UPDATE</Text>
                  {/* <Text style={styles.header}>비고</Text> */}
                </View>
                {Array.from({ length: 10 }).map((_, idx) => {
                  const now_ticker_price_value = basic_Data[idx].NOW_TICKER_PRICE;
                  const m_envelop_value = basic_Data[idx].M_ENVELOP;
                  const backgroundColor = m_envelop_value > now_ticker_price_value ? '#ffcccb' : '#ffffff'; // BB가 크면 배경색 변경

                  return (
                    <View key={idx} style={[styles.row, { backgroundColor }]}>
                      <Text style={styles.cell}> {idx + 1}</Text>
                      <Text style={styles.cell}> {basic_Data[idx].ticker}</Text>
                      <Text style={styles.cell}>{basic_Data[idx].NOW_TICKER_PRICE}</Text>
                      <Text style={styles.cell}>{basic_Data[idx].M_ENVELOP}</Text>
                      <Text style={styles.cell}>{basic_Data[idx].NOW_BB}</Text>
                      {/* <Text style={styles.cell}>RSI {idx}</Text>
                    <Text style={styles.cell}>MDI {idx}</Text> */}
                      <Text style={styles.cell}>{basic_Data[idx].UPDATE_TIME.substring(3, 8)}</Text>
                      {/* <Text style={styles.cell}>비고 {idx}</Text>  */}
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        );
      }
      if (i === 1) {
        const formattedNumber = new Intl.NumberFormat('en-US').format(upbit_1_total_benefit_Data.now_total_value);

        const run_is_data = upbit_1_run_is == 'run' ? '작동중' : '중지'; // 
        const backgroundColor = upbit_1_run_is == 'run' ? '#CCFF66' : '#ffcccb';
        return (
          <View key={i} style={[styles.page, { width: screenWidth }]}>
            <ScrollView >
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text style={[styles.title_2, { width: '88%' }, { backgroundColor }]}>hahaha{'('}{run_is_data}{')'}</Text>
              <View style={[styles.memo, { width: '88%' }]}>
                <Text style={styles.memo_text}>{upbit_1_memo}</Text>
              </View>

              {/* <Text>{upbit_1_memo}</Text> */}
              {/* <Text style={[styles.memo, { width: '80%' }]}>{upbit_1_memo}</Text> */}


              <Text style={[styles.subtitle, { width: '88%' }]}>수익률 정보{'(현재 '}{formattedNumber}{'원)'}</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={styles.header_benefit}>오늘</Text>
                  <Text style={styles.header_benefit}>어제</Text>
                  <Text style={styles.header_benefit}>이번주</Text>
                  <Text style={styles.header_benefit}>지난주</Text>
                  <Text style={styles.header_benefit}>이번달</Text>
                  <Text style={styles.header_benefit}>지난달</Text>
                </View>
                {Array.from({ length: 1 }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      <Text style={styles.cell_benefit}> {upbit_1_total_benefit_Data.today_benefit}</Text>
                      <Text style={styles.cell_benefit}>{upbit_1_total_benefit_Data.yesterday_benefit}</Text>
                      <Text style={styles.cell_benefit}>{upbit_1_total_benefit_Data.this_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{upbit_1_total_benefit_Data.last_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{upbit_1_total_benefit_Data.this_month_benefit}</Text>
                      <Text style={styles.cell_benefit}>{upbit_1_total_benefit_Data.last_month_benefit}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>오늘 거래 리스트</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_trade]}>종목</Text>
                  <Text style={[styles.header_trade]}>매수시간</Text>
                  <Text style={[styles.header_trade]}>매수가</Text>
                  <Text style={[styles.header_trade]}>매수로직</Text>
                  <Text style={[styles.header_trade]}>매도시간</Text>
                  <Text style={[styles.header_trade]}>매도가</Text>
                  <Text style={[styles.header_trade]}>매도금액</Text>
                  <Text style={[styles.header_trade]}>매도로직</Text>
                  <Text style={[styles.header_trade]}>수익률</Text>

                </View>
                {Array.from({ length: upbit_1_today_trade_Data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={styles.cell}> {idx+1}</Text>  */}
                      <Text style={styles.cell_selling}>{upbit_1_today_trade_Data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_today_trade_Data[idx].buy_time}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_today_trade_Data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_today_trade_Data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_today_trade_Data[idx].sell_time}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_today_trade_Data[idx].sell_order_price}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_today_trade_Data[idx].sell_order_funds}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_today_trade_Data[idx].sell_logic}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_today_trade_Data[idx].benefit_rate}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매도중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow_0, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={[styles.header_benefit]}>매수로직</Text>
                  <Text style={[styles.header_benefit]}>현재가</Text>
                  <Text style={[styles.header_benefit]}>매수가</Text>
                  <Text style={[styles.header_benefit]}>매도가</Text>
                  <Text style={[styles.header_benefit]}>수익률</Text>
                  <Text style={[styles.header_benefit]}>익졀률</Text>
                  <Text style={[styles.header_benefit]}>경과시간</Text>
                </View>
                {Array.from({ length: upbit_1_now_trade_Data_sell_check_data.length }).map((_, idx) => {
                  const chage_rate_anal = upbit_1_now_trade_Data_sell_check_data[idx].chage_rate_anal;
                  const backgroundColor = chage_rate_anal > 0 ? '#ffcccb' : '#3366FF'; // 

                  return (
                    <View key={idx} style={[styles.sub_row_0, { width: '88%' }, { backgroundColor }]}>
                      {/* <Text style={[styles.cell_selling, { width: '6%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {upbit_1_now_trade_Data_sell_check_data[idx].ticker}</Text>
                      <Text style={[styles.cell_selling]}>{upbit_1_now_trade_Data_sell_check_data[idx].buy_logic}</Text>
                      <Text style={[styles.cell_selling]}>{upbit_1_now_trade_Data_sell_check_data[idx].now_ticker_price}</Text>
                      <Text style={[styles.cell_selling]}>{upbit_1_now_trade_Data_sell_check_data[idx].buy_order_price}</Text>
                      <Text style={[styles.cell_selling]}>{upbit_1_now_trade_Data_sell_check_data[idx].limit_price}</Text>
                      <Text style={[styles.cell_selling]}>{upbit_1_now_trade_Data_sell_check_data[idx].chage_rate_anal}</Text>
                      <Text style={[styles.cell_selling]}>{(upbit_1_now_trade_Data_sell_check_data[idx].sell_benefit_rate) * 100}</Text>
                      <Text style={[styles.cell_selling]}>{upbit_1_now_trade_Data_sell_check_data[idx].buy_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매수중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header_wait, { width: '10%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: upbit_1_now_trade_Data_buy_check_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={[styles.header_wait, { width: '10%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {upbit_1_now_trade_Data_buy_check_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_now_trade_Data_buy_check_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_now_trade_Data_buy_check_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_now_trade_Data_buy_check_data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_now_trade_Data_buy_check_data[idx].order_elap_data}</Text>
                    </View>
                  );
                })}
              </View>



              <Text style={[styles.subtitle, { width: '88%' }]}>매수 대기 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: upbit_1_now_trade_Data_buy_order_wait_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={[styles.cell_wait, { width: '10%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {upbit_1_now_trade_Data_buy_order_wait_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_now_trade_Data_buy_order_wait_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_now_trade_Data_buy_order_wait_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_now_trade_Data_buy_order_wait_data[idx].buy_order_wait_price}</Text>
                      <Text style={styles.cell_selling}>{upbit_1_now_trade_Data_buy_order_wait_data[idx].order_wait_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

            </ScrollView>
          </View>
        );
      }


      if (i === 2) {
        const formattedNumber = new Intl.NumberFormat('en-US').format(hihihi_total_benefit_Data.now_total_value);
        const run_is_data = hihihi_run_is == 'run' ? '작동중' : '중지'; // 
        const backgroundColor = hihihi_run_is == 'run' ? '#CCFF66' : '#ffcccb';
        return (
          <View key={i} style={[styles.page, { width: screenWidth }]}>
            <ScrollView >
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text style={[styles.title_2, { width: '88%' }, { backgroundColor }]}>hihihi{'('}{run_is_data}{')'}</Text>
              <View style={[styles.memo, { width: '88%' }]}>
                <Text style={styles.memo_text}>{hihihi_memo}</Text>
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>수익률 정보{'(현재 '}{formattedNumber}{'원)'}</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={styles.header_benefit}>오늘</Text>
                  <Text style={styles.header_benefit}>어제</Text>
                  <Text style={styles.header_benefit}>이번주</Text>
                  <Text style={styles.header_benefit}>지난주</Text>
                  <Text style={styles.header_benefit}>이번달</Text>
                  <Text style={styles.header_benefit}>지난달</Text>
                </View>
                {Array.from({ length: 1 }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      <Text style={styles.cell_benefit}> {hihihi_total_benefit_Data.today_benefit}</Text>
                      <Text style={styles.cell_benefit}>{hihihi_total_benefit_Data.yesterday_benefit}</Text>
                      <Text style={styles.cell_benefit}>{hihihi_total_benefit_Data.this_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{hihihi_total_benefit_Data.last_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{hihihi_total_benefit_Data.this_month_benefit}</Text>
                      <Text style={styles.cell_benefit}>{hihihi_total_benefit_Data.last_month_benefit}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>오늘 거래 리스트</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_trade]}>종목</Text>
                  <Text style={[styles.header_trade]}>매수시간</Text>
                  <Text style={[styles.header_trade]}>매수가</Text>
                  <Text style={[styles.header_trade]}>매수로직</Text>
                  <Text style={[styles.header_trade]}>매도시간</Text>
                  <Text style={[styles.header_trade]}>매도가</Text>
                  <Text style={[styles.header_trade]}>매도금액</Text>
                  <Text style={[styles.header_trade]}>매도로직</Text>
                  <Text style={[styles.header_trade]}>수익률</Text>

                </View>
                {Array.from({ length: hihihi_today_trade_Data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={styles.cell}> {idx+1}</Text>  */}
                      <Text style={styles.cell_selling}> {hihihi_today_trade_Data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{hihihi_today_trade_Data[idx].buy_time}</Text>
                      <Text style={styles.cell_selling}>{hihihi_today_trade_Data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{hihihi_today_trade_Data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{hihihi_today_trade_Data[idx].sell_time}</Text>
                      <Text style={styles.cell_selling}> {hihihi_today_trade_Data[idx].sell_order_price}</Text>
                      <Text style={styles.cell_selling}>{hihihi_today_trade_Data[idx].sell_order_funds}</Text>
                      <Text style={styles.cell_selling}>{hihihi_today_trade_Data[idx].sell_logic}</Text>
                      <Text style={styles.cell_selling}>{hihihi_today_trade_Data[idx].benefit_rate}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매도중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow_0, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={[styles.header_benefit]}>매수로직</Text>
                  <Text style={[styles.header_benefit]}>현재가</Text>
                  <Text style={[styles.header_benefit]}>매수가</Text>
                  <Text style={[styles.header_benefit]}>매도가</Text>
                  <Text style={[styles.header_benefit]}>수익률</Text>
                  <Text style={[styles.header_benefit]}>익졀률</Text>
                  <Text style={[styles.header_benefit]}>경과시간</Text>
                </View>
                {Array.from({ length: hihihi_now_trade_Data_sell_check_data.length }).map((_, idx) => {
                  const chage_rate_anal = hihihi_now_trade_Data_sell_check_data[idx].chage_rate_anal;
                  const backgroundColor = chage_rate_anal > 0 ? '#ffcccb' : '#3366FF'; // 

                  return (
                    <View key={idx} style={[styles.sub_row_0, { width: '88%' }, { backgroundColor }]}>
                      {/* <Text style={[styles.cell_selling, { width: '6%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {hihihi_now_trade_Data_sell_check_data[idx].ticker}</Text>
                      <Text style={[styles.cell_selling]}>{hihihi_now_trade_Data_sell_check_data[idx].buy_logic}</Text>
                      <Text style={[styles.cell_selling]}>{hihihi_now_trade_Data_sell_check_data[idx].now_ticker_price}</Text>
                      <Text style={[styles.cell_selling]}>{hihihi_now_trade_Data_sell_check_data[idx].buy_order_price}</Text>
                      <Text style={[styles.cell_selling]}>{hihihi_now_trade_Data_sell_check_data[idx].limit_price}</Text>
                      <Text style={[styles.cell_selling]}>{hihihi_now_trade_Data_sell_check_data[idx].chage_rate_anal}</Text>
                      <Text style={[styles.cell_selling]}>{(hihihi_now_trade_Data_sell_check_data[idx].sell_benefit_rate) * 100}</Text>
                      <Text style={[styles.cell_selling]}>{hihihi_now_trade_Data_sell_check_data[idx].buy_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매수중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header_wait, { width: '10%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: hihihi_now_trade_Data_buy_check_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={[styles.header_wait, { width: '10%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {hihihi_now_trade_Data_buy_check_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{hihihi_now_trade_Data_buy_check_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{hihihi_now_trade_Data_buy_check_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{hihihi_now_trade_Data_buy_check_data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{hihihi_now_trade_Data_buy_check_data[idx].order_elap_data}</Text>
                    </View>
                  );
                })}
              </View>



              <Text style={[styles.subtitle, { width: '88%' }]}>매수 대기 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: hihihi_now_trade_Data_buy_order_wait_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      <Text style={[styles.cell_selling]}> {hihihi_now_trade_Data_buy_order_wait_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{hihihi_now_trade_Data_buy_order_wait_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{hihihi_now_trade_Data_buy_order_wait_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{hihihi_now_trade_Data_buy_order_wait_data[idx].buy_order_wait_price}</Text>
                      <Text style={styles.cell_selling}>{hihihi_now_trade_Data_buy_order_wait_data[idx].order_wait_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

            </ScrollView>
          </View>
        );
      };



      if (i === 3) {
        const formattedNumber = new Intl.NumberFormat('en-US').format(kokoko_total_benefit_Data.now_total_value);
        const run_is_data = kokoko_run_is == 'run' ? '작동중' : '중지'; // 
        const backgroundColor = kokoko_run_is == 'run' ? '#CCFF66' : '#ffcccb';
        return (
          <View key={i} style={[styles.page, { width: screenWidth }]}>
            <ScrollView >
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text style={[styles.title_2, { width: '88%' }, { backgroundColor }]}>kokoko{'('}{run_is_data}{')'}</Text>
              <View style={[styles.memo, { width: '88%' }]}>
                <Text style={styles.memo_text}>{kokoko_memo}</Text>
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>수익률 정보{'(현재 '}{formattedNumber}{'원)'}</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={styles.header_benefit}>오늘</Text>
                  <Text style={styles.header_benefit}>어제</Text>
                  <Text style={styles.header_benefit}>이번주</Text>
                  <Text style={styles.header_benefit}>지난주</Text>
                  <Text style={styles.header_benefit}>이번달</Text>
                  <Text style={styles.header_benefit}>지난달</Text>
                </View>
                {Array.from({ length: 1 }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      <Text style={styles.cell_benefit}> {kokoko_total_benefit_Data.today_benefit}</Text>
                      <Text style={styles.cell_benefit}>{kokoko_total_benefit_Data.yesterday_benefit}</Text>
                      <Text style={styles.cell_benefit}>{kokoko_total_benefit_Data.this_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{kokoko_total_benefit_Data.last_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{kokoko_total_benefit_Data.this_month_benefit}</Text>
                      <Text style={styles.cell_benefit}>{kokoko_total_benefit_Data.last_month_benefit}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>오늘 거래 리스트</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_trade]}>종목</Text>
                  <Text style={[styles.header_trade]}>매수시간</Text>
                  <Text style={[styles.header_trade]}>매수가</Text>
                  <Text style={[styles.header_trade]}>매수로직</Text>
                  <Text style={[styles.header_trade]}>매도시간</Text>
                  <Text style={[styles.header_trade]}>매도가</Text>
                  <Text style={[styles.header_trade]}>매도금액</Text>
                  <Text style={[styles.header_trade]}>매도로직</Text>
                  <Text style={[styles.header_trade]}>수익률</Text>

                </View>
                {Array.from({ length: kokoko_today_trade_Data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={styles.cell}> {idx+1}</Text>  */}
                      <Text style={styles.cell_selling}> {kokoko_today_trade_Data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{kokoko_today_trade_Data[idx].buy_time}</Text>
                      <Text style={styles.cell_selling}>{kokoko_today_trade_Data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{kokoko_today_trade_Data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{kokoko_today_trade_Data[idx].sell_time}</Text>
                      <Text style={styles.cell_selling}> {kokoko_today_trade_Data[idx].sell_order_price}</Text>
                      <Text style={styles.cell_selling}>{kokoko_today_trade_Data[idx].sell_order_funds}</Text>
                      <Text style={styles.cell_selling}>{kokoko_today_trade_Data[idx].sell_logic}</Text>
                      <Text style={styles.cell_selling}>{kokoko_today_trade_Data[idx].benefit_rate}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매도중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow_0, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={[styles.header_benefit]}>매수로직</Text>
                  <Text style={[styles.header_benefit]}>현재가</Text>
                  <Text style={[styles.header_benefit]}>매수가</Text>
                  <Text style={[styles.header_benefit]}>매도가</Text>
                  <Text style={[styles.header_benefit]}>수익률</Text>
                  <Text style={[styles.header_benefit]}>익졀률</Text>
                  <Text style={[styles.header_benefit]}>경과시간</Text>
                </View>
                {Array.from({ length: kokoko_now_trade_Data_sell_check_data.length }).map((_, idx) => {
                  const chage_rate_anal = kokoko_now_trade_Data_sell_check_data[idx].chage_rate_anal;
                  const backgroundColor = chage_rate_anal > 0 ? '#ffcccb' : '#3366FF'; // 

                  return (
                    <View key={idx} style={[styles.sub_row_0, { width: '88%' }, { backgroundColor }]}>
                      {/* <Text style={[styles.cell_selling, { width: '6%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {kokoko_now_trade_Data_sell_check_data[idx].ticker}</Text>
                      <Text style={[styles.cell_selling]}>{kokoko_now_trade_Data_sell_check_data[idx].buy_logic}</Text>
                      <Text style={[styles.cell_selling]}>{kokoko_now_trade_Data_sell_check_data[idx].now_ticker_price}</Text>
                      <Text style={[styles.cell_selling]}>{kokoko_now_trade_Data_sell_check_data[idx].buy_order_price}</Text>
                      <Text style={[styles.cell_selling]}>{kokoko_now_trade_Data_sell_check_data[idx].limit_price}</Text>
                      <Text style={[styles.cell_selling]}>{kokoko_now_trade_Data_sell_check_data[idx].chage_rate_anal}</Text>
                      <Text style={[styles.cell_selling]}>{(kokoko_now_trade_Data_sell_check_data[idx].sell_benefit_rate) * 100}</Text>
                      <Text style={[styles.cell_selling]}>{kokoko_now_trade_Data_sell_check_data[idx].buy_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매수중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header_wait, { width: '10%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: kokoko_now_trade_Data_buy_check_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={[styles.header_wait, { width: '10%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {kokoko_now_trade_Data_buy_check_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{kokoko_now_trade_Data_buy_check_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{kokoko_now_trade_Data_buy_check_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{kokoko_now_trade_Data_buy_check_data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{kokoko_now_trade_Data_buy_check_data[idx].order_elap_data}</Text>
                    </View>
                  );
                })}
              </View>



              <Text style={[styles.subtitle, { width: '88%' }]}>매수 대기 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: kokoko_now_trade_Data_buy_order_wait_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      <Text style={[styles.cell_selling]}> {kokoko_now_trade_Data_buy_order_wait_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{kokoko_now_trade_Data_buy_order_wait_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{kokoko_now_trade_Data_buy_order_wait_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{kokoko_now_trade_Data_buy_order_wait_data[idx].buy_order_wait_price}</Text>
                      <Text style={styles.cell_selling}>{kokoko_now_trade_Data_buy_order_wait_data[idx].order_wait_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

            </ScrollView>
          </View>
        );
      };


      if (i === 4) {
        const formattedNumber = new Intl.NumberFormat('en-US').format(sim_1_total_benefit_Data.now_total_value);
        const run_is_data = sim_1_run_is == 'run' ? '작동중' : '중지'; // 
        const backgroundColor = sim_1_run_is == 'run' ? '#CCFF66' : '#ffcccb';
        return (
          <View key={i} style={[styles.page, { width: screenWidth }]}>
            <ScrollView >
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text style={[styles.title_2, { width: '88%' }, { backgroundColor }]}>sim_1{'('}{run_is_data}{')'}</Text>
              <View style={[styles.memo, { width: '88%' }]}>
                <Text style={styles.memo_text}>{sim_1_memo}</Text>
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>수익률 정보{'(현재 '}{formattedNumber}{'원)'}</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={styles.header_benefit}>오늘</Text>
                  <Text style={styles.header_benefit}>어제</Text>
                  <Text style={styles.header_benefit}>이번주</Text>
                  <Text style={styles.header_benefit}>지난주</Text>
                  <Text style={styles.header_benefit}>이번달</Text>
                  <Text style={styles.header_benefit}>지난달</Text>
                </View>
                {Array.from({ length: 1 }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      <Text style={styles.cell_benefit}> {sim_1_total_benefit_Data.today_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_1_total_benefit_Data.yesterday_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_1_total_benefit_Data.this_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_1_total_benefit_Data.last_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_1_total_benefit_Data.this_month_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_1_total_benefit_Data.last_month_benefit}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>오늘 거래 리스트</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_trade]}>종목</Text>
                  <Text style={[styles.header_trade]}>매수시간</Text>
                  <Text style={[styles.header_trade]}>매수가</Text>
                  <Text style={[styles.header_trade]}>매수로직</Text>
                  <Text style={[styles.header_trade]}>매도시간</Text>
                  <Text style={[styles.header_trade]}>매도가</Text>
                  <Text style={[styles.header_trade]}>매도금액</Text>
                  <Text style={[styles.header_trade]}>매도로직</Text>
                  <Text style={[styles.header_trade]}>수익률</Text>

                </View>
                {Array.from({ length: sim_1_today_trade_Data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={styles.cell}> {idx+1}</Text>  */}
                      <Text style={styles.cell_selling}> {sim_1_today_trade_Data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{sim_1_today_trade_Data[idx].buy_time}</Text>
                      <Text style={styles.cell_selling}>{sim_1_today_trade_Data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{sim_1_today_trade_Data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{sim_1_today_trade_Data[idx].sell_time}</Text>
                      <Text style={styles.cell_selling}> {sim_1_today_trade_Data[idx].sell_order_price}</Text>
                      <Text style={styles.cell_selling}>{sim_1_today_trade_Data[idx].sell_order_funds}</Text>
                      <Text style={styles.cell_selling}>{sim_1_today_trade_Data[idx].sell_logic}</Text>
                      <Text style={styles.cell_selling}>{sim_1_today_trade_Data[idx].benefit_rate}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매도중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow_0, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={[styles.header_benefit]}>매수로직</Text>
                  <Text style={[styles.header_benefit]}>현재가</Text>
                  <Text style={[styles.header_benefit]}>매수가</Text>
                  <Text style={[styles.header_benefit]}>매도가</Text>
                  <Text style={[styles.header_benefit]}>수익률</Text>
                  <Text style={[styles.header_benefit]}>익졀률</Text>
                  <Text style={[styles.header_benefit]}>경과시간</Text>
                </View>
                {Array.from({ length: sim_1_now_trade_Data_sell_check_data.length }).map((_, idx) => {
                  const chage_rate_anal = sim_1_now_trade_Data_sell_check_data[idx].chage_rate_anal;
                  const backgroundColor = chage_rate_anal > 0 ? '#ffcccb' : '#3366FF'; // 

                  return (
                    <View key={idx} style={[styles.sub_row_0, { width: '88%' }, { backgroundColor }]}>
                      {/* <Text style={[styles.cell_selling, { width: '6%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {sim_1_now_trade_Data_sell_check_data[idx].ticker}</Text>
                      <Text style={[styles.cell_selling]}>{sim_1_now_trade_Data_sell_check_data[idx].buy_logic}</Text>
                      <Text style={[styles.cell_selling]}>{sim_1_now_trade_Data_sell_check_data[idx].now_ticker_price}</Text>
                      <Text style={[styles.cell_selling]}>{sim_1_now_trade_Data_sell_check_data[idx].buy_order_price}</Text>
                      <Text style={[styles.cell_selling]}>{sim_1_now_trade_Data_sell_check_data[idx].limit_price}</Text>
                      <Text style={[styles.cell_selling]}>{sim_1_now_trade_Data_sell_check_data[idx].chage_rate_anal}</Text>
                      <Text style={[styles.cell_selling]}>{(sim_1_now_trade_Data_sell_check_data[idx].sell_benefit_rate) * 100}</Text>
                      <Text style={[styles.cell_selling]}>{sim_1_now_trade_Data_sell_check_data[idx].buy_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매수중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header_wait, { width: '10%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: sim_1_now_trade_Data_buy_check_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={[styles.header_wait, { width: '10%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {sim_1_now_trade_Data_buy_check_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{sim_1_now_trade_Data_buy_check_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{sim_1_now_trade_Data_buy_check_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{sim_1_now_trade_Data_buy_check_data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{sim_1_now_trade_Data_buy_check_data[idx].order_elap_data}</Text>
                    </View>
                  );
                })}
              </View>



              <Text style={[styles.subtitle, { width: '88%' }]}>매수 대기 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: sim_1_now_trade_Data_buy_order_wait_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      <Text style={[styles.cell_selling]}> {sim_1_now_trade_Data_buy_order_wait_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{sim_1_now_trade_Data_buy_order_wait_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{sim_1_now_trade_Data_buy_order_wait_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{sim_1_now_trade_Data_buy_order_wait_data[idx].buy_order_wait_price}</Text>
                      <Text style={styles.cell_selling}>{sim_1_now_trade_Data_buy_order_wait_data[idx].order_wait_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

            </ScrollView>
          </View>
        );
      };






      if (i === 5) {
        const formattedNumber = new Intl.NumberFormat('en-US').format(sim_2_total_benefit_Data.now_total_value);
        const run_is_data = sim_2_run_is == 'run' ? '작동중' : '중지'; // 
        const backgroundColor = sim_2_run_is == 'run' ? '#CCFF66' : '#ffcccb';
        return (
          <View key={i} style={[styles.page, { width: screenWidth }]}>
            <ScrollView >
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text style={[styles.title_2, { width: '88%' }, { backgroundColor }]}>sim_2{'('}{run_is_data}{')'}</Text>
              <View style={[styles.memo, { width: '88%' }]}>
                <Text style={styles.memo_text}>{sim_2_memo}</Text>
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>수익률 정보{'(현재 '}{formattedNumber}{'원)'}</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={styles.header_benefit}>오늘</Text>
                  <Text style={styles.header_benefit}>어제</Text>
                  <Text style={styles.header_benefit}>이번주</Text>
                  <Text style={styles.header_benefit}>지난주</Text>
                  <Text style={styles.header_benefit}>이번달</Text>
                  <Text style={styles.header_benefit}>지난달</Text>
                </View>
                {Array.from({ length: 1 }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      <Text style={styles.cell_benefit}>{sim_2_total_benefit_Data.today_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_2_total_benefit_Data.yesterday_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_2_total_benefit_Data.this_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_2_total_benefit_Data.last_week_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_2_total_benefit_Data.this_month_benefit}</Text>
                      <Text style={styles.cell_benefit}>{sim_2_total_benefit_Data.last_month_benefit}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>오늘 거래 리스트</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_trade]}>종목</Text>
                  <Text style={[styles.header_trade]}>매수시간</Text>
                  <Text style={[styles.header_trade]}>매수가</Text>
                  <Text style={[styles.header_trade]}>매수로직</Text>
                  <Text style={[styles.header_trade]}>매도시간</Text>
                  <Text style={[styles.header_trade]}>매도가</Text>
                  <Text style={[styles.header_trade]}>매도금액</Text>
                  <Text style={[styles.header_trade]}>매도로직</Text>
                  <Text style={[styles.header_trade]}>수익률</Text>

                </View>
                {Array.from({ length: sim_2_today_trade_Data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={styles.cell}> {idx+1}</Text>  */}
                      <Text style={styles.cell_selling}>{sim_2_today_trade_Data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{sim_2_today_trade_Data[idx].buy_time}</Text>
                      <Text style={styles.cell_selling}>{sim_2_today_trade_Data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{sim_2_today_trade_Data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{sim_2_today_trade_Data[idx].sell_time}</Text>
                      <Text style={styles.cell_selling}>{sim_2_today_trade_Data[idx].sell_order_price}</Text>
                      <Text style={styles.cell_selling}>{sim_2_today_trade_Data[idx].sell_order_funds}</Text>
                      <Text style={styles.cell_selling}>{sim_2_today_trade_Data[idx].sell_logic}</Text>
                      <Text style={styles.cell_selling}>{sim_2_today_trade_Data[idx].benefit_rate}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매도중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow_0, { width: '88%' }]}>
                  {/* <Text style={[styles.header, { width: '6%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={[styles.header_benefit]}>매수로직</Text>
                  <Text style={[styles.header_benefit]}>현재가</Text>
                  <Text style={[styles.header_benefit]}>매수가</Text>
                  <Text style={[styles.header_benefit]}>매도가</Text>
                  <Text style={[styles.header_benefit]}>수익률</Text>
                  <Text style={[styles.header_benefit]}>익졀률</Text>
                  <Text style={[styles.header_benefit]}>경과시간</Text>
                </View>
                {Array.from({ length: sim_2_now_trade_Data_sell_check_data.length }).map((_, idx) => {
                  const chage_rate_anal = sim_2_now_trade_Data_sell_check_data[idx].chage_rate_anal;
                  const backgroundColor = chage_rate_anal > 0 ? '#ffcccb' : '#3366FF'; // 

                  return (
                    <View key={idx} style={[styles.sub_row_0, { width: '88%' }, { backgroundColor }]}>
                      {/* <Text style={[styles.cell_selling, { width: '6%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}>{sim_2_now_trade_Data_sell_check_data[idx].ticker}</Text>
                      <Text style={[styles.cell_selling]}>{sim_2_now_trade_Data_sell_check_data[idx].buy_logic}</Text>
                      <Text style={[styles.cell_selling]}>{sim_2_now_trade_Data_sell_check_data[idx].now_ticker_price}</Text>
                      <Text style={[styles.cell_selling]}>{sim_2_now_trade_Data_sell_check_data[idx].buy_order_price}</Text>
                      <Text style={[styles.cell_selling]}>{sim_2_now_trade_Data_sell_check_data[idx].limit_price}</Text>
                      <Text style={[styles.cell_selling]}>{sim_2_now_trade_Data_sell_check_data[idx].chage_rate_anal}</Text>
                      <Text style={[styles.cell_selling]}>{(sim_2_now_trade_Data_sell_check_data[idx].sell_benefit_rate) * 100}</Text>
                      <Text style={[styles.cell_selling]}>{sim_2_now_trade_Data_sell_check_data[idx].buy_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

              <Text style={[styles.subtitle, { width: '88%' }]}>매수중 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  {/* <Text style={[styles.header_wait, { width: '10%' }]}>No</Text> */}
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: sim_2_now_trade_Data_buy_check_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      {/* <Text style={[styles.header_wait, { width: '10%' }]}> {idx+1}</Text>  */}
                      <Text style={[styles.cell_selling]}> {sim_2_now_trade_Data_buy_check_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{sim_2_now_trade_Data_buy_check_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{sim_2_now_trade_Data_buy_check_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{sim_2_now_trade_Data_buy_check_data[idx].buy_order_price}</Text>
                      <Text style={styles.cell_selling}>{sim_2_now_trade_Data_buy_check_data[idx].order_elap_data}</Text>
                    </View>
                  );
                })}
              </View>



              <Text style={[styles.subtitle, { width: '88%' }]}>매수 대기 정보</Text>
              <View style={styles.subtable}>
                <View style={[styles.sub_headerRow, { width: '88%' }]}>
                  <Text style={[styles.header_benefit]}>종목</Text>
                  <Text style={styles.header_benefit}>매수로직</Text>
                  <Text style={styles.header_benefit}>현재가</Text>
                  <Text style={styles.header_benefit}>매수가</Text>
                  <Text style={styles.header_benefit}>경과시간</Text>
                </View>
                {Array.from({ length: sim_2_now_trade_Data_buy_order_wait_data.length }).map((_, idx) => {
                  return (
                    <View key={idx} style={[styles.sub_row, { width: '88%' }]}>
                      <Text style={[styles.cell_selling]}>{sim_2_now_trade_Data_buy_order_wait_data[idx].ticker}</Text>
                      <Text style={styles.cell_selling}>{sim_2_now_trade_Data_buy_order_wait_data[idx].buy_logic}</Text>
                      <Text style={styles.cell_selling}>{sim_2_now_trade_Data_buy_order_wait_data[idx].now_ticker_price}</Text>
                      <Text style={styles.cell_selling}>{sim_2_now_trade_Data_buy_order_wait_data[idx].buy_order_wait_price}</Text>
                      <Text style={styles.cell_selling}>{sim_2_now_trade_Data_buy_order_wait_data[idx].order_wait_elap_data}</Text>
                    </View>
                  );
                })}
              </View>

            </ScrollView>
          </View>
        );
      };



    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {basic_Data.length > 0 ? (
          renderPages()
        ) : (

          <Text >{"\n\n\n"} Loading...</Text>
        )}

      </ScrollView>
      <View style={styles.tabsContainer}>
        {renderTabs()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    padding: 2,
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: '#000',
    paddingTop: 50,
    fontSize: 16,
  },

  title_2: {
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: '#000',
    color: "#003333",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,

  },


  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#eee',
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#3498db',
    opacity: 0.5 // 비활성화된 탭의 투명도 설정
  },
  activeTab: {
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#3498db',
    opacity: 1, // 활성화된 탭의 투명도 설정
  },
  tabWithMargin: {
    marginLeft: 10, // 탭 간 여백 설정
    marginRight: 10, // 탭 간 여백 설정
  },

  table: {
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: '#000',
    padding: 7,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#000',
  },
  header: {
    fontWeight: 'bold',
    width: '16%',
    textAlign: 'center',
    paddingVertical: 5,
    borderWidth: 0.5,
    // borderBlockColor : "FFCC99",
    borderColor: '#000',
    fontSize: 11,
    backgroundColor: '#ccc'
  },

  header_wait: {
    fontWeight: 'bold',
    width: '24%',
    textAlign: 'center',
    paddingVertical: 5,
    borderWidth: 0.5,
    // borderBlockColor : "FFCC99",
    borderColor: '#000',
    fontSize: 11,
    backgroundColor: '#ccc'
  },

  header_benefit: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    paddingVertical: 5,
    borderWidth: 0.5,
    // borderBlockColor : "FFCC99",
    borderColor: '#000',
    fontSize: 11,
    backgroundColor: '#ccc'
  },

  header_trade: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    paddingVertical: 5,
    borderWidth: 0.5,
    // borderBlockColor : "FFCC99",
    borderColor: '#000',
    fontSize: 10,
    backgroundColor: '#ccc'
  },

  cell_benefit: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    borderWidth: 0.4,

    borderColor: '#000',
    paddingVertical: 5,
    fontSize: 11
  },

  cell_selling: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 0.4,

    borderColor: '#000',
    paddingVertical: 5,
    fontSize: 9
  },

  cell_wait: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 0.4,
    width: '24%',

    borderColor: '#000',
    paddingVertical: 5,
    fontSize: 10,
  },




  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderWidth: 0,
    borderColor: '#000',

  },



  sub_headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    width: '115%',
  },

  sub_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderWidth: 0,
    borderColor: '#000',
    width: '115%',
  },

  sub_headerRow_0: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    // width: '115%',
  },

  sub_row_0: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderWidth: 0,
    borderColor: '#000',
    // width: '115%',
  },


  cell: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 0.4,
    borderColor: '#000',
    paddingVertical: 5,
    fontSize: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    // padding: 2,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16,
    marginBottom: 1,
  },
  subtable: {
    marginTop: 0,
    marginBottom: 5,
    // width : "100%",
    padding: 7,
  },


  head_text: {
    fontWeight: 'bold',
    margin: 6,
    fontSize: 9,
    textAlign: 'center'
  },

  dataWrapper: {
    marginTop: -1
  },

  memo: {
    marginTop: 0,
    marginBottom: 1,
    // width : "100%",
    padding: 1,
  },
  memo_text:
  {
    fontSize: 11,
  }
});

export default YourComponent;
