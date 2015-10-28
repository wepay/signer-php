# WePay Signer for PHP

[![Source](http://img.shields.io/badge/source-wepay/signer–php-blue.svg?style=flat-square)](https://github.com/wepay/signer-php)
[![Latest Stable Version](http://img.shields.io/packagist/v/wepay/signer.svg?style=flat-square)](https://packagist.org/packages/wepay/signer)
[![Total Downloads](http://img.shields.io/packagist/dt/wepay/signer.svg?style=flat-square)](https://packagist.org/packages/wepay/signer)
[![Open Issues](http://img.shields.io/github/issues/wepay/signer-php.svg?style=flat-square)](https://github.com/wepay/signer-php/issues)
[![Build Status](http://img.shields.io/travis/wepay/signer-php/master.svg?style=flat-square)](https://travis-ci.org/wepay/signer-php)
[![Coverage Status](http://img.shields.io/coveralls/wepay/signer-php/master.svg?style=flat-square)](https://coveralls.io/r/wepay/signer-php?branch=master)
[![Code Climate](http://img.shields.io/codeclimate/github/wepay/signer-php.svg?style=flat-square)](https://codeclimate.com/github/wepay/signer-php)
[![Code Quality](http://img.shields.io/scrutinizer/g/wepay/signer-php.svg?style=flat-square)](https://scrutinizer-ci.com/g/wepay/signer-php)
[![Dependency Status](https://www.versioneye.com/user/projects/54dc5ab6c1bbbd9bd700050e/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/54dc5ab6c1bbbd9bd700050e)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/0bd1cdc9-be1b-445c-9fdc-358a57874ee2/mini.png)](https://insight.sensiolabs.com/projects/0bd1cdc9-be1b-445c-9fdc-358a57874ee2)
[![HHVM Support](http://img.shields.io/hhvm/wepay/signer-php.svg?style=flat-square)](https://hhvm.com)
[![Documentation Status](https://readthedocs.org/projects/wepay-signer-php/badge/?version=master&style=flat-square)](http://wepay-signer-php.readthedocs.org)
[![License](http://img.shields.io/packagist/l/wepay/signer-blue.svg?style=flat-square)](https://packagist.org/packages/wepay/signer)
[![Author](http://img.shields.io/badge/author-@skyzyx-blue.svg?style=flat-square)](https://twitter.com/skyzyx)

The **Signer** class is designed for those who are signing data on behalf of a public-private keypair.

This is a thin wrapper around the [skyzyx/signer](https://github.com/skyzyx/signer) package.

This project uses [Semantic Versioning](http://semver.org) for managing backwards-compatibility.

* [Documentation](http://wepay-signer-php.readthedocs.org)
* [API Reference](https://wepay.github.io/signer-ruby/)


## Examples

```php
use WePay\Signer\Signer;

$client_id = 'k3qDQy0Tr56v1ceo';
$client_secret = 'O5j@pG@Jt%AzyiJTEfo!£LSz8yqSj)JX)S6FvW%58KjlS9bc%Fi7&&C4KSCT8hxd';

$signer = new Signer($client_id, $client_secret);
$signature = $signer->sign([
    'ClientID' => $client_id,
    'Domain'   => 'foo.com',
    'Path'     => '/',
    'Expires'  => 'Wed, 13 Jan 2021 22:23:01 GMT',
    'Secure'   => null,
    'HttpOnly' => null,
]);

$signature = wordwrap($signature, 64, "\n", true);
#=> dfbffab5b6f7156402da8147886bba3eba67bd5baf2e780ba9d39e8437db7c47
#=> 35e9a0b834aa21ac76f98da8c52a2a0cd1b0192d0f0df5c98e3848b1b2e1a037
```


## Installation

Using [Composer]:
```bash
composer require wepay/signer=^1.0.0
```

And include it in your scripts:

```php
require_once 'vendor/autoload.php';
```


## Testing

Firstly, run `make install` to download and install the dependencies.

You can run the tests as follows:
```bash
make test
```


## Debug Logging

> **NOTE:** You should _only_ use logging during development — never in production.

Signer implements the [PSR-3](https://github.com/php-fig/log) `Psr\Log\LoggerAwareInterface`. Because of this,
you can inject any PSR-3-compatible logging package, and Signer will use it to log `DEBUG`-level messages.

```php
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use WePay\Signer\Signer;

// create a log channel
$log = new Logger('name');
$log->pushHandler(new StreamHandler('path/to/your.log', Logger::DEBUG));

// inject a logger
$signer = new Signer();
$signer->setLogger($log);

$signer->sign( ... );
```


## Testing

Firstly, run `make install` to download and install the dependencies.

You can run the tests as follows:

```bash
make test
```


## API Reference

The API Reference is generated by a tool called [Sami](https://github.com/FriendsOfPHP/Sami). Once it's installed, you 
can generate updated documentation by running the following command in the root of the repository.

```bash
make docs
```


## Deploying
The `Makefile` (yes, `Makefile`) has a series of commands to simplify the development and deployment process.

### `make`

Running `make` by itself will show you a list of available sub-commands.

```bash
$ make
all
docs
install
pushdocs
tag
test
version
```

### `make pushdocs`
You will need to have write-access to the `wepay/signer-php` repository on GitHub. You should have already set up:

* Your SSH key with your GitHub account.
* Had your GitHub user given write-access to the repository.

Then you can run:

```bash
make pushdocs
```

You can view your changes at <https://wepay.github.io/signer-php/>.

### `make version`
This allows you to set the version number for the next release.

### `make tag`
You will need to have a [Keybase](https://keybase.io) account first, including setting-up the
[`keybase` CLI tool](https://keybase.io/docs/command_line/prerequisites).

Then you can run:

```bash
make tag
```

You can view your changes in the `SIGNED.md` file.


## Contributing
Here's the process for contributing:

1. Fork Signer-PHP to your GitHub account.
2. Clone your GitHub copy of the repository into your local workspace.
3. Write code, fix bugs, and add tests with 100% code coverage.
4. Commit your changes to your local workspace and push them up to your GitHub copy.
5. You submit a GitHub pull request with a description of what the change is.
6. The contribution is reviewed. Maybe there will be some banter back-and-forth in the comments.
7. If all goes well, your pull request will be accepted and your changes are merged in.


## Authors, Copyright & Licensing

* Copyright (c) 2015 [WePay](http://wepay.com)

See also the list of [contributors](https://github.com/wepay/signer-ruby/graphs/contributors) who participated in this project.

Licensed for use under the terms of the [Apache 2.0] license.

  [Apache 2.0]: http://opensource.org/licenses/Apache-2.0


## Coding Standards

PSR-0/1/2 are a solid foundation, but are not an entire coding style by themselves. I have taken the time to document all of the nitpicky patterns and nuances of my personal coding style. It goes well-beyond brace placement and tabs vs. spaces to cover topics such as docblock annotations, ternary operations and which variation of English to use. It aims for thoroughness and pedanticism over hoping that we can all get along.

<https://github.com/skyzyx/php-coding-standards>
