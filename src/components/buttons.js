import React from "react";
import _ from "lodash";
import { mainInfo } from "./data";
import { aboutMe } from "./data";
import { result } from "./data";
import { video } from "./data";
import { gymPictures } from "./data";
import { price } from "./data";

export default class Buttons extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  createButtonGroup = (props) => {
    const { createButtonGroup } = props;
    // const main = createButtonGroup.main;
    return createButtonGroup.buttons.map((el) => (
      <button
      type={'button'}
        id={el}
        key={_.uniqueId(el)}
        onClick={(e) => {
          const targetId = e.target.id;
          if (targetId === "Главная") {
            return this.props.setNewState(mainInfo);
          }
          if (targetId === "О себе") {
            return this.props.setNewState(aboutMe);
          }
          if (targetId === "Результат") {
            return this.props.setNewState(result);
          }
          if (targetId === "Видео") {
            return this.props.setNewState(video);
          }
          if (targetId === "Зал") {
            return this.props.setNewState(gymPictures);
          }
          if (targetId === "Цены") {
            return this.props.setNewState(price);
          }
        }}
        className="col-3 col-sm-3 col-md btn btn-primary m-1">
        {el}
      </button>
    ));
  };
  render() {
    return <div className="row justify-content-around"> {this.createButtonGroup(this.props)} </div>;
  }
}
