lw-timeago
==========

A lightweight implementation of the [Timeago jQuery plugin](http://timeago.yarp.com/), allowing fuzzy timestamps to be dynamically generated and displayed.

Example
-------

#### Original
```html
<time datetime="2012-02-11T22:05:00-05:00">Feb 11, 2012</time>
```

#### Outputs
```html
<time title="Feb 11, 2012" datetime="2012-02-11T22:05:00-05:00">3 years ago</time>
<time title="2/11/2012, 10:05:00 PM" datetime="2012-02-11T22:05:00-05:00">3 years ago on Feb 11, 2012</time>
```

Configuration
-------------
In the `config` section of the script there are a few options that can be configured.
- `whitelist`: Only process `<time>` tags with this attribute. Setting it to `null` disables whitelisting (all `<time>` tags are processed).
- `keepDate`: If `true`, don't replace the date in the `<time>` tags, prepend the fuzzy time to it (see the second example above).

Additionally, the text can all be customized.

Usage
-----
Step 2 can be skipped if `whitelist` is set to `null` in the config.

1. Markup times in the HTML source with `<time>` tags, making sure they have a `datetime` attribute. The datetime attribute *MUST* be ISO 8601 formatted.
2. For all `<time>` tags that should be converted to fuzzy times, add `data-timeago` attributes to them.
3. Include the `lw-timeago.js` file in the html head (`<script src="lw-timeago.js" type="text/javascript"></script>`).
4. Call the `lw_timeago()` function when the page loads (`<script type="text/javascript">window.addEventListener("load", lw_timeago);</script>`).

License
-------
```
Copyright (c) 2008-2015, Ryan McGeary
Copyright (c) 2015 Carey Metcalfe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
