#Comparator
Interactive comparing widget

[Demo](http://colomolome.com/projects/comparator)

###Installation

Download:
- [comparator.js](https://raw.githubusercontent.com/colomolo/comparator/master/comparator.js)
- [comparator.css](https://raw.githubusercontent.com/colomolo/comparator/master/comparator.css)

Include it on your page:
```html
<script src="path/to/comparator.js"></script>
```
```html
<link rel="stylesheet" href="path/to/comparator.css">
```

###Usage
Add div with class `comparator` with two `img` elements inside:
```html
<div class="comparator">
  <img src="path/to/left/image.png">
  <img src="path/to/right/image.png">
<div>
```

###Options
You can add some options via `data` attributes:
- `data-return` — whether to return divider to center when the mouse cursor leaves the area. Possible values: `true`, `false`.

--
[Drop me a line](mailto:mail@colomolome.com) if you use Comparator.

###License
[MIT license](http://opensource.org/licenses/MIT)
