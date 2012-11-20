var client = require('../build/build.js');
var server = require('../');
var assert = require('better-assert');

it('encodes to the same data on client and server', function () {
  assert(client('foo') === server('foo'));
  assert(client('foo bar') === server('foo bar'));
  assert(client('foo/bar\\bosh') === server('foo/bar\\bosh'));
});