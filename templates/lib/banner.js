/*
 * <%= appNameSlug %>
 * https://github.com/<%= userName %>/<%= appNameSlug %>
 *
 * Copyright (c) <%= year %>, <%= authorName %>
 * Licensed under the <%= license %> license.
 */

'use strict';

/*
 * Module dependencies
 */

require('colors');

module.exports = function() {

    console.log();
    console.log('  <%= appName %>: <%= appDescription %>');
    console.log();
    console.log('  Repo => '.bold.white + 'https://github.com/<%= userName %>/<%= appNameSlug %>'.white);
    console.log('  Powered by => '.bold.white + '<%= authorName %>'.white);
    console.log();

};
