import React from 'react';

const Workbench = (props) => {
  const highlightMe = React.useRef();
  const highlightColor = React.useRef();

  const Highlight = () => {
    const string = highlightMe.current.value;
    const color = highlightColor.current.value;
    if (string === '') {
      return;
    }

    const simpletext = new RegExp('(' + string + ')', 'gi');

    var textHigh = document.getElementById('text');
    textHigh.innerHTML = textHigh.innerHTML.replace(
      simpletext,
      '<span style="background: ' + color + '">$1</span>'
    );
  };

  const InputField = (props) => {
    const aaa = React.useState();
    return (
      <>
        <p>aaaaaaaa</p>
        <p>asd asd replace</p>
        <p>aaaaaaaa asd</p>
        <p>aaaaaaaa</p>
      </>
    );
  };

  const text_displayer = InputField();
  const highlight_displayer = text_displayer;

  return (
    <div>
      <input ref={highlightMe} placeholder="text"></input>
      <input ref={highlightColor} placeholder="color"></input>
      <button onClick={Highlight}>aaaa!</button>
      <div
        id="text"
        className="main_workbench"
        contentEditable="true"
        aria-disabled="false"
        spellCheck="true"
      >
        {text_displayer}
      </div>
      <div
        className="main_workbench"
        contentEditable="true"
        aria-disabled="false"
        spellCheck="true"
      >
        {highlight_displayer}
      </div>
    </div>
  );
};

export { Workbench };
