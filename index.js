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
      // document.getElementById("output").innerHTML = JSON.stringify(e, undefined, 2);
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

/* Shopify example taken from https://shopify.dev/api/admin-rest */
let example = {
  "customers": [
    {
      "id": 207119551,
      "email": "bob.norman@hostmail.com",
      "accepts_marketing": false,
      "created_at": "2021-02-12T13:48:32-05:00",
      "updated_at": "2021-02-12T13:48:32-05:00",
      "first_name": "Bob",
      "last_name": "Norman",
      "orders_count": 1,
      "state": "disabled",
      "total_spent": "199.65",
      "last_order_id": 450789469,
      "note": null,
      "verified_email": true,
      "multipass_identifier": null,
      "tax_exempt": false,
      "phone": "+16136120707",
      "tags": "",
      "last_order_name": "#1001",
      "currency": "USD",
      "addresses": [
        {
          "id": 207119551,
          "customer_id": 207119551,
          "first_name": null,
          "last_name": null,
          "company": null,
          "address1": "Chestnut Street 92",
          "address2": "",
          "city": "Louisville",
          "province": "Kentucky",
          "country": "United States",
          "zip": "40202",
          "phone": "+1(800)-555-2181",
          "name": "",
          "province_code": "KY",
          "country_code": "US",
          "country_name": "United States",
          "default": true
        }
      ],
    },
  ],
  "accepts_marketing_updated_at": "2005-06-12T11:57:11-04:00",
  "marketing_opt_in_level": null,
  "tax_exemptions": [],
  "admin_graphql_api_id": "gid://shopify/Customer/207119551",
  "default_address": {
    "id": 207119551,
    "customer_id": 207119551,
    "first_name": null,
    "last_name": null,
    "company": null,
    "address1": "Chestnut Street 92",
    "address2": "",
    "city": "Louisville",
    "province": "Kentucky",
    "country": "United States",
    "zip": "40202",
    "phone": "+1(800)-555-2181",
    "name": "",
    "province_code": "KY",
    "country_code": "US",
    "country_name": "United States",
    "default": true
  }
}

document.getElementById("button").addEventListener("click", getData, false);
document.getElementById("clear").addEventListener("click", clearData, false);
