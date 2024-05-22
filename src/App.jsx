import Wrapper from "./components/Wrapper";
import WeatherBox from "./components/WeatherBox";
import SearchBox from "./components/SearchBox";
import WeatherProvider from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Wrapper>
        <SearchBox />
        <WeatherBox />
      </Wrapper>
    </WeatherProvider>
  );
}

export default App;
