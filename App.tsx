import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [movies, setMovieData] = useState([]);


  const getMovies = async () => {
    try {
      const API1 = 'https://reactnative.dev/movies.json';
      const API2 = "https://api.open-meteo.com/v1/forecast?latitude=38.00&longitude=42.00&current_weather=true";
      const API3 = "http://118.219.142.14:8001/api/get_total_data";

      const response = await fetch(API1);

      console.log(response.ok);

      const json = await response.json();

      // sleep 1 sec
      console.log("-------- sleep 1 sec --------")
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log(json);

      setData(json);
      setMovieData(json.movies[0]);

      console.log("-----------------------------------");
      console.log(json.title);
      console.log(json.description);
      console.log("-----------------------------------");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <>
          <Text>Loading</Text>
        </>
      ) : (
        <>
          <Text>Completed</Text>
          <Text>[{data['title']}]</Text>
          <Text>[{movies['title']}]</Text>
          <Text>[{movies['releaseYear']}]</Text>
        </>
      )}
    </View>
  );
};

export default App;