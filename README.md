# fuck-cors
Remove CORS issues from (almost) any fetch request!

## STOP DOING THIS
```js
await (await fetch("https://api.example.com/", { method: "GET", mode: "cors" })).text(); // NetworkError
```
## THIS WON'T WORK EITHER
```js
await (await fetch("https://api.example.com/", { method: "GET", mode: "no-cors" })).text(); // Returns an empty string
```
## DO THIS INSTEAD!!1!1
```js
await (await fetch("https://api.example.com/", { method: "GET", mode: "fuck-cors" })).text();
//                                                                     ^^^^^^^^^
```
