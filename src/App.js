import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Activity from "./components/Activity";
import TopCategories from "./components/TopCategories";
import Educations from "./components/Educations";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="container">
       <div className="main">
       <Header />
        <Content />
       </div>
        <Activity />
        <TopCategories />
        
      </div>
      <div className="educations">
          <div className="container">
            <Educations />
            <Subscribe />
          </div>
      </div>
      <Footer />

   
     
    </div>
  );
}

export default App;
