<div align="center">
  <h1><code>konnect-wasm</code></h1>
  <strong>Flattening JSON objects using<code> Rust Webassembly</code> 
</div>

## About

Calling rust-wasm from Javascript and rendering the results on a static webpage.

Some tested JSON files

- https://shopify.dev/api/admin-rest (smaller example)
- https://gist.githubusercontent.com/tuldok89/cf99b808ba0168054970bc60fbfb25c4/raw/ed635c262124fe88491ae25e56919b644994e66a/shopify.json (larger 2.5mb example)

The library accepts an argument of a stringifed JSON object which uses under the hood the  <a href="https://crates.io/crates/flatten-json-object">flatten-json-object</a> crate.

## 🚴 Usage

Running 
```
npm install && npm run start
```
will start the webpack-dev-server, navigate to http://localhost:8080 


To import into your own project simply run

```
npm install @teekm/konnectwasm
```

Examples 
```
import * as wasm from "@teekm/konnectwasm";

let someObj = {
  "bar": "baz",
  "foobar": ["qux","foo1","bar1"],
  "quux": [{
    "bar2": "bar3"
  },{
    "bar4": "bar5"
  }]
};

console.log(wasm.process(JSON.stringify(someObj)))
>> {"bar":"baz","foobar[0]":"qux","foobar[1]":"foo1","foobar[2]":"bar1","quux[0].bar2":"bar3","quux[1].bar4":"bar5"}

```
## License

Licensed under either of

* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
