'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-xamarin:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
     'Xamarin_app/AssemblyInfo.cs',
    'Xamarin_app/App.cs',
    'Xamarin_app/Constant.cs',
    'Xamarin_app/packages.config',
    'Xamarin_app/Xamarin_app.csproj',
    'Xamarin_app.sln'
    ]
  });
});
