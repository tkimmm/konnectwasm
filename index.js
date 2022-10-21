import * as wasm from "@teekm/konnectwasm";

const valueCSSFormatter = (obj, elementId) => {
  let colorDiv = document.getElementById(elementId);
  for (const [key, value] of Object.entries(obj)) {
    let keyspan = document.createElement('span');
    keyspan.classList.add('key');
    keyspan.innerHTML = key + ": ";
    colorDiv.appendChild(keyspan);
    let valspan = document.createElement('span');
    valspan.classList.add('value');
    valspan.innerHTML = value ? value + '<br>' : "null" + '<br>';
    colorDiv.appendChild(valspan);
  }
};

const getData = () => {
  let url = document.getElementById("url").value;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let d = wasm.process(JSON.stringify(data));
      let e = JSON.parse(d);
      valueCSSFormatter(e, "output");
    })
    .catch(err => document.getElementById("output").innerHTML = `Failed to parse JSON, check formatting of input - ${err}`);
};

const clearData = () => {
  const list = document.getElementById("output");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  };
};

document.getElementById("button").addEventListener("click", getData, false);
document.getElementById("clear").addEventListener("click", clearData, false);
