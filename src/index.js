import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Buttons from "./components/buttons";
import "./bootstrap.css";
import { mainInfo } from "./components/data";
import { resultCreator } from "./components/data";
import { videoBlockCreator } from "./components/data";
import { picturesBlockCreator } from "./components/data";
import { priceBlockCreator } from "./components/data";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: ["Главная", "О себе", "Результат", "Видео", "Зал", "Цены"],
      main: mainInfo,
    };
  }

  changeMainDisplay = (obj) => {
    const { type } = obj;
    if (type === "main") {
      const { pictures } = obj;
      const { arrInfo } = obj.info;
      return (
        <>
          {pictures.map((el) => el)}
          <div className="row">{arrInfo.map((el) => el)}</div>
        </>
      );
    }
    if (type === "about") {
      const { pictures } = obj;
      const { info } = obj;
      return (
        <div className="row">
          {pictures.map((el) => el)}
          {info.map((el) => el)}
        </div>
      );
    }
    if (type === "result") {
      let resultData = Object.keys(obj).map((client) => {
        if (client === "type") {
          return false;
        }
        let personalClient = client;
        return resultCreator(obj[personalClient]);
      });
      return <div className="row bg-dark justify-content-md-center">{resultData}</div>;
    }
    if(type === 'video'){

      return (<div className="row">{videoBlockCreator(obj)}</div>)
    }
    if(type === 'gym'){
      return (
        <div className="row">
          {picturesBlockCreator(obj)}
          </div>
       )
    }
    if(type === 'price'){
      return (
        <div className="row">
          {priceBlockCreator(obj)}
          </div>
       )
    }
  };

  setNewState = (value) => {
    // const { main } = this.state;
    return this.setState({ main: value });
  };

  render() {
    const data = this.state.main;

    return (
      <>
        <Buttons
          setNewState={this.setNewState}
          createButtonGroup={this.state}
        ></Buttons>
        {this.changeMainDisplay(data)}
      </>
    );
  }
}

ReactDOM.render(<MainComponent />, document.querySelector("#main-container"));
reportWebVitals();
