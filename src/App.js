
import './App.css';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section';
import TicTacToe from './components/tic-tact-toe';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
//import GithubProfileFinder from './components/github-profile-finder';
//import SearchAutocomplete from './components/search-autocomplete-with-api/index';
//import ModelTest from './components/custom-model-popup/model-test';
//import TabTest from './components/custom-tabs/tab-test';
//import ScrollIndicator from './components/scroll-indicator';
//import LightDarkMode from './components/light-dark-mode';
//import QRCodeGenerator from './components/qr-code-generator';
//import ImageSlider from './components/image-slider\'';
//import Accordian from './components/according';
//import RandomColor from './components/random-color';
//import StarRating from './components/star-rating';
//import LoadMoreData from './components/load-more-data';
// import TreeView from './components/tree-view';
// import menus from "./components/tree-view/data";
import UseWindowResizeTest from './components/use-window-resize/test';
import Weather from './components/weather-app/weather';
import './components/weather-app/styles.css';

function App() {
  return (
    <div className="App">
       {/* accordian component */}
      {/* <Accordian /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}
      {/* Star Rating */}
      {/* <StarRating noOfStars={10} /> */}
      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
       {/* Load more products component */}
      {/* <LoadMoreData/> */}

       {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

       {/* QR code generator */}
      {/* <QRCodeGenerator /> */}

       {/* light and dark theme switch */}
      {/* <LightDarkMode/> */}

       {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom tabs component */}
      {/* <TabTest /> */}

      {/* Custom Modal Component */}
      {/* <ModelTest /> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder/> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete/> */}

      {/* Tic tac toe */}
      {/* <TicTacToe/> */}

      {/* Feature Flag IMplementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook Test*/}
      {/* <UseFetchHookTest/> */}

      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnclickOutsideTest/> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to a Particular Section */}
      {/* <ScrollToSection/> */}

      {/* Weather app  */}
      <Weather />




    </div>
  );
}

export default App;
