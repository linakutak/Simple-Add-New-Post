// import classes from "./Post.module.css";
// const names = ["Lina", "Kutak", "Payang", "Budu"];
// import { useState } from "react";
// const [count, setCount] = useState(0);
import pic from "../assets/whiteBtn.png";

import classes from "./PuzzleBG.module.css";
import PuzzleBG from "./PuzzleBG";
let total = 0;
let _lastIndex = 0;
const _list = [];

const checkInversion = (toCompare, _startAt) => {
  let _count = 0;
  for (let i = _startAt; i < list.length; i++) {
    if (toCompare !== this._nCount * this._nCount) {
      _count += toCompare > parseInt(list[i]._text) ? 1 : 0;
    }
  }
  return _count;
};
const shuffle = (arra1) => {
  for (let i = arra1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arra1[i], arra1[j]] = [arra1[j], arra1[i]];
  }
};
const doRandom = (total) => {
  console.log(total);
  _list.length = 0;
  for (let i = 0; i < total; i++) {
    const obj = {
      _text: i + 1,
      _x: i,
      _y: i,
    };
    _list.push(obj);
  }
  shuffle(_list);
  console.log(Math.sqrt(total));
  let _count = 0;
  for (let i = 0; i < Math.sqrt(total); i++) {
    for (let j = 0; j < Math.sqrt(total); j++) {
      _list[_count]._x = i;
      _list[_count]._y = j;
      if (_list[_count]._text === total) {
        _lastIndex = _count;
      }
      // console.log(_list[_count]);
      _count++;
    }
  }

  console.log(_list);
};
const doMove = (event) => {
  // console.log(item.target);
  let _element = event.target;
  let _lastElement;
  // console.log(_element);
  while (_element.className !== classes.bg) {
    // console.log(_element.parentNode.className + " ::: " + classes.bg);
    _element = _element.parentNode;
  }
  let _parent = _element.parentNode;
  Loop1: for (let i = 0; i < _parent.childNodes.length; i++) {
    // console.log(_parent.childNodes[i]);
    if (_parent.childNodes[i].className === classes.bg) {
      // console.log(_parent.childNodes[i].style.visibility === "hidden");
      if (_parent.childNodes[i].style.visibility === "hidden") {
        _lastElement = _parent.childNodes[i];
        // console.log(_lastElement);
        break Loop1;
      }
    }
  }
  console.log(_lastElement.childNodes[1].outerText);
  let _indexLast = _lastIndex;
  let _indexClicked = _list.findIndex(
    (x) => x._text === parseInt(_element.childNodes[1].outerText)
  );

  let _y =
    (_indexLast + 1) % Math.sqrt(total) === 0
      ? Math.sqrt(total)
      : (_indexLast + 1) % Math.sqrt(total);
  let _x = Math.ceil((_indexLast + 1) / Math.sqrt(total));
  // console.log(_x + "_" + _y);

  let xEmpty = _list[_indexLast]._x;
  let yEmpty = _list[_indexLast]._y;
  let xClick = _list[_indexClicked]._x;
  let yClick = _list[_indexClicked]._y;
  console.log(_list[_indexLast]);
  console.log(_list[_indexClicked]);
  // console.log(Math.abs(yClick - yEmpty));
  if (
    (Math.abs(xClick - xEmpty) === 1 && yClick === yEmpty) ||
    (Math.abs(yClick - yEmpty) === 1 && xClick === xEmpty)
  ) {
    console.log("iiiii");

    _list[_indexLast] = {
      _text: total,
      _x: xClick,
      _y: yClick,
    };
    _list[_indexClicked] = {
      _text: parseInt(_element.childNodes[1].outerText),
      _x: xEmpty,
      _y: yEmpty,
    };
    _lastElement.style.left = xClick * 100 + "px";
    _lastElement.style.top = yClick * 100 + "px";
    _element.style.left = xEmpty * 100 + "px";
    _element.style.top = yEmpty * 100 + "px";
  }
  let win = true;
  let _count = 0;
  console.log(_list);
  console.log(_parent.childNodes);
  Loop1: for (let i = 0; i < Math.sqrt(total); i++) {
    for (let j = 0; j < Math.sqrt(total); j++) {
      let _index = _list.findIndex((x) => x._text === _count + 1);
      // console.log(_index);
      // console.log(
      //   _list[_index]._x + " :: " + j + " :: " + _list[_index]._y + " :: " + i
      // );
      if (_list[_index]._x !== j || _list[_index]._y !== i) {
        win = false;
        break Loop1;
      }
      _count++;
    }
  }

  console.log(win);
};
function Display(props) {
  console.log(props.props._totalLength);
  total = props.props._totalLength;
  if (_list.length === 0) {
    doRandom(props.props._totalLength);
  }
  // console.log(_list);
  return (
    <>
      {_list.map((item) => (
        <PuzzleBG
          item={item}
          className={{ bg: classes.bg, img: classes.img, text: classes.text }}
          imageSrc={pic}
          onClick={(evt) => doMove(evt)}
          styles={{
            visibility: item._text === total ? "hidden" : "visible",
            left: item._x * 100,
            top: item._y * 100,
          }}
        ></PuzzleBG>
      ))}
    </>
  );
}
export default Display;
