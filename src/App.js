import "./App.css";
import React, { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imag, setImg] = useState("");

  const onChangeLinea1 = function (event) {
    setLinea1(event.target.value);
  };

  const onChangeLinea2 = function (event) {
    setLinea2(event.target.value);
  };

  const onChangeImg = function (event) {
    setImg(event.target.value);
  };

  const exportMeme = function (event) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let imgen = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = imgen;
      link.click();
    });
  };

  return (
    <div className="App">
      <input
        onChange={onChangeLinea1}
        type="text"
        placeholder="Línea 1"
      ></input>
      <input
        onChange={onChangeLinea2}
        type="text"
        placeholder="Línea 2"
      ></input>

      <select onChange={onChangeImg}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosofalraptor</option>
        <option value="smart">Smart Guy</option>
      </select>

      <button onClick={exportMeme}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"/img/" + imag + ".jpg"} alt="meme" />
      </div>
    </div>
  );
}

export default App;
