# <%= appName %> [![Build Status](https://secure.travis-ci.org/<%= userName %>/<%= appNameSlug %>.png?branch=master)](https://travis-ci.org/<%= userName %>/<%= appNameSlug %>) [![NPM version](https://badge-me.herokuapp.com/api/npm/<%= appNameSlug %>.png)](http://badges.enytc.com/for/npm/<%= appNameSlug %>)

> <%= appDescription %>

## Getting Started
Install the module with: 

```bash
$ npm install -g <%= appNameSlug %>
```

Example:

```javascript
var Api = require('<%= appNameSlug %>');
//Create new instance of <%= appName %>
var api = new Api('access_token');
```

## Documentation

#### .prompt(prompts, cb)

**Parameter**: `prompts`
**Type**: `Array`
**Example**: 

```javascript
var prompts = [
{
	type: 'input',
	name: 'name',
	message: 'What\'s your name?'
}, 
{
	type: 'input',
	name: 'email',
	message: 'What\'s your email?'
}];
```

**Parameter**: `cb`
**Type**: `Function`
**Example**:

```javascript
function(answers) {
	
}
```

The 'prompt' method is responsible for asking questions

How to use this method

```javascript
var prompts = [
{
	type: 'input',
	name: 'name',
	message: 'What\'s your name?'
}, 
{
	type: 'input',
	name: 'email',
	message: 'What\'s your email?'
}];

api.prompt(prompts, function(answers) {
	console.log(answers);
}); 
```

#### .signup(name, email, password)

**Parameter**: `name`
**Type**: `String`
**Example**: `myname`


**Parameter**: `email`
**Type**: `String`
**Example**: `example@example.com`


**Parameter**: `password`
**Type**: `String`
**Example**: `123456test`


The 'signup' method is responsible for create accounts

How to use this method

```javascript

api.signup('myname', 'email', '123456test');
```

#### .status(pureJson)

**Parameter**: `pureJson`
**Type**: `Boolean`
**Example**: `true`


The 'status' method is responsible for showing the status of api

How to use this method

```javascript

api.status(true);
```


## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/<%= userName %>/<%= appNameSlug %>/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/<%= userName %>/<%= appNameSlug %>/issues).

## License <% if (license === 'MIT') { %>

The MIT License

Copyright (c) <%= year %>, <%= authorName %>

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.<% } %>
<% if (license === 'BSD') { %>
The BSD License

Copyright (c) <%= year %>, <%= authorName %>

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the <%= authorName %> nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<% } %>
