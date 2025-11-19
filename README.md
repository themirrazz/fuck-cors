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
## DO THIS INSTEAD
```js
await (await fetch("https://api.example.com/", { method: "GET", mode: "fuck-cors" })).text();
//                                                                     ^^^^^^^^^
```

## INSTALL IT FOR FREE!!1!1
```html
<script src='https://themirrazz.nekoweb.org/lib/fuck-cors.js'></script>
```

## FOR IE ADDICTS
```html
<script>function Request() { }</script>
<script src='https://themirrazz.nekoweb.org/lib/polyf.js'></script>
<script src='https://themirrazz.nekoweb.org/lib/fuck-cors.js'></script>
```
