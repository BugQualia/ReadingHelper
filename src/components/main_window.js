import React from 'react';

const Workbench = (props) => {
  const [writemode, setWritemode] = React.useState(false);
  const regInput = React.useRef();

  const Highlight = () => {
    const string = regInput.current.value;
    const simpletext = new RegExp('(' + string + ')', 'gi');

    var textHigh = document.getElementById('text');
    textHigh.innerHTML = textHigh.innerHTML.replace(
      simpletext,
      '<span style="color: red">$1</span>'
    );
  };

  return (
    <div>
      <input ref={regInput}></input>
      <button onClick={Highlight}>aaaa!</button>
      <div
        id="text"
        contenteditable="true"
        aria-disabled="false"
        spellcheck="true"
      >
        <p>aaaaaaaa</p>
        <p>asd asd replace</p>
        <p>aaaaaaaa asd</p>
        <p>aaaaaaaa</p>
      </div>
    </div>
  );
};

export { Workbench };
