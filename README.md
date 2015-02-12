# WePay Signer for PHP

[![Source](http://img.shields.io/badge/source-wepay/sso-php-blue.svg?style=flat-square)](https://github.com/wepay/sso-php)
[![Latest Stable Version](http://img.shields.io/packagist/v/wepay/sso-php.svg?style=flat-square)](https://packagist.org/packages/wepay/sso-php)
[![Total Downloads](http://img.shields.io/packagist/dt/wepay/sso-php.svg?style=flat-square)](https://packagist.org/packages/wepay/sso-php)
[![Open Issues](http://img.shields.io/github/issues/wepay/sso-php.svg?style=flat-square)](https://github.com/wepay/sso-php/issues)
[![Build Status](http://img.shields.io/travis/wepay/sso-php/master.svg?style=flat-square)](https://travis-ci.org/wepay/sso-php)
[![Coverage Status](http://img.shields.io/coveralls/wepay/sso-php/master.svg?style=flat-square)](https://coveralls.io/r/wepay/sso-php?branch=master)
[![Code Climate](http://img.shields.io/codeclimate/github/wepay/sso-php.svg?style=flat-square)](https://codeclimate.com/github/wepay/sso-php)
[![Code Quality](http://img.shields.io/scrutinizer/g/wepay/sso-php.svg?style=flat-square)](https://scrutinizer-ci.com/g/wepay/sso-php)
[![Dependency Status](https://www.versioneye.com/user/projects/!!!!!!!/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/!!!!!!!)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/!!!!!!!/mini.png)](https://insight.sensiolabs.com/projects/!!!!!!!)
[![HHVM Support](http://img.shields.io/hhvm/wepay/sso-php.svg?style=flat-square)](https://hhvm.com)
[![Documentation Status](https://readthedocs.org/projects/wepay-sso-php/badge/?version=master&style=flat-square)](https://readthedocs.org/projects/shared-utilities/?badge=master)
[![License](http://img.shields.io/packagist/l/wepay/sso-php-blue.svg?style=flat-square)](https://packagist.org/packages/wepay/sso-php)
[![Author](http://img.shields.io/badge/author-@skyzyx-blue.svg?style=flat-square)](https://twitter.com/skyzyx)

This is a thin wrapper around the [skyzyx/signer](https://github.com/skyzyx/signer) package.


## Examples
### Generate a signature
```php
use WePay\Signer\Signer;

$client_id = 'your_client_id';
$client_secret = 'your_client_secret';

$signer = new Signer($client_id, $client_secret);
$signature = $signer->sign([
    'page'         => $wepay_page_to_visit,
    'redirect_uri' => $partner_page_to_return_to,
]);

$signature = wordwrap($signature, 64, "\n", true);
#=> dfbffab5b6f7156402da8147886bba3eba67bd5baf2e780ba9d39e8437db7c47
#=> 35e9a0b834aa21ac76f98da8c52a2a0cd1b0192d0f0df5c98e3848b1b2e1a037
```

### Generate all of the query string parameters for the request
```php
$querystring = $signer->generateQueryStringParams([
    'page'         => $wepay_page_to_visit,
    'redirect_uri' => $partner_page_to_return_to,
]);

#=> client_id=your_client_id&
#=> page=https://wepay.com/account/12345&
#=> redirect_uri=https://partnersite.com/home&
#=> token=dfbffab5b6f7156402da8147886bba3eba67bd5baf2e780ba9d39e8437db7c47...
```


## Installation

Using [Composer]:
```bash
composer require wepay/signer-php=^1.0
```

And include it in your scripts:

```php
require_once 'vendor/autoload.php';
```


## Testing

Firstly, run `composer install --optimize-autoloader` to download and install the dependencies.

You can run the tests as follows:
```bash
bin/phpunit
```


## API Reference

The API Reference is generated by a tool called [phpDocumentor 2.x](http://phpdoc.org). You should install it locally
on your system with:

```bash
cd /usr/local/bin &&
wget http://phpdoc.org/phpDocumentor.phar &&
chmod +x phpDocumentor.phar &&
mv phpDocumentor.phar phpdoc
```

Once it's installed, you can generate updated documentation by running the following command in the root of the
repository.
```bash
phpdoc
```


## Contributing
Here's the process for contributing:

1. Fork WePay Signer for PHP to your GitHub account.
2. Clone your GitHub copy of the repository into your local workspace.
3. Write code, fix bugs, and add tests with 100% code coverage.
4. Commit your changes to your local workspace and push them up to your GitHub copy.
5. You submit a GitHub pull request with a description of what the change is.
6. The contribution is reviewed. Maybe there will be some banter back-and-forth in the comments.
7. If all goes well, your pull request will be accepted and your changes are merged in.


## Authors, Copyright & Licensing

* Copyright (c) 2015 [WePay](http://wepay.com).

See also the list of [contributors](/wepay/sso-php/contributors) who participated in this project.

Licensed for use under the terms of the [Apache 2.0] license.

  [PHP]: http://php.net
  [Composer]: https://getcomposer.org
  [MIT]: http://www.opensource.org/licenses/mit-license.php
  [Apache 2.0]: http://opensource.org/licenses/Apache-2.0


## Coding Standards

PSR-0/1/2 are a solid foundation, but are not an entire coding style by themselves. I have taken the time to document all of the nitpicky patterns and nuances of my personal coding style. It goes well-beyond brace placement and tabs vs. spaces to cover topics such as docblock annotations, ternary operations and which variation of English to use. It aims for thoroughness and pedanticism over hoping that we can all get along.

<https://github.com/skyzyx/php-coding-standards>

  [PHP]: http://php.net
  [Composer]: https://getcomposer.org
  [MIT]: http://www.opensource.org/licenses/mit-license.php
  [Apache 2.0]: http://opensource.org/licenses/Apache-2.0
