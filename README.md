<div align="center">
  <h1><code>konnect-wasm</code></h1>
  <strong>A <code>Rust Webassembly</code> static site demonstrating json array flattening client-side.</strong>
</div>

## About

A static HTML page which should handle the pre-processing of a deeply nested JSON on the client side
- https://shopify.dev/api/admin-rest (smaller example)
- https://gist.githubusercontent.com/tuldok89/cf99b808ba0168054970bc60fbfb25c4/raw/ed635c262124fe88491ae25e56919b644994e66a/shopify.json (larger 2.5mb example)

The wasm accepts a ```JSON.stringify(obj)``` and under the hood is using <a href="https://crates.io/crates/flatten-json-object">flatten-json-object</a>

## 🚴 Usage

```
npm install && npm run start
```
Will start the webpack-dev-server, navigate to http://localhost:8080 


To import into your own project simply run

```
npm install @teekm/konnectwasm
```

## License

Licensed under either of

* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
