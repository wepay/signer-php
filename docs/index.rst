WePay Signer for PHP
====================

|Source|
|Latest Stable Version|
|Total Downloads|
|Open Issues|
|Build Status|
|Coverage Status|
|Code Climate|
|Code Quality|
|Dependency Status|
|SensioLabs Insight|
|HHVM Support|
|Documentation Status|
|MIT License|
|Author|

This is a WePay-specific wrapper around the `skyzyx/signer <https://github.com/skyzyx/signer>`__ package.

Installation
------------

Add the following information to your ``composer.json`` file (if you don't know
how ``composer.json`` works, `read the instructions
<https://getcomposer.org/doc/02-libraries.md#publishing-to-a-vcs>`__).

.. code:: json

    {
        "require": {
            "wepay/signer": "^1.0"
        }
    }

Testing
-------

Firstly, run ``composer install --optimize-autoloader`` to download and install the
dependencies.

You can run the tests as follows:

.. code:: bash

    bin/phpunit

API Reference
-------------

The API Reference is generated by a tool called `phpDocumentor 2.x <http://phpdoc.org>`__.
You should install it locally on your system with:

.. code:: bash

    cd /usr/local/bin &&
    wget http://phpdoc.org/phpDocumentor.phar &&
    chmod +x phpDocumentor.phar &&
    mv phpDocumentor.phar phpdoc

Once it's installed, you can generate updated documentation by running the following
command in the root of the repository.

.. code:: bash

    phpdoc

User guide
----------

.. toctree::
    :maxdepth: 2

   usage
   signing-algorithm

Coding Standards
----------------

-  https://github.com/skyzyx/php-coding-standards

.. |Source| image:: http://img.shields.io/badge/source-wepay/signer–php-blue.svg?style=flat-square
   :target: https://github.com/wepay/signer-php
.. |Latest Stable Version| image:: http://img.shields.io/packagist/v/wepay/signer.svg?style=flat-square
   :target: https://packagist.org/packages/wepay/signer
.. |Total Downloads| image:: http://img.shields.io/packagist/dt/wepay/signer.svg?style=flat-square
   :target: https://packagist.org/packages/wepay/signer
.. |Open Issues| image:: http://img.shields.io/github/issues/wepay/signer-php.svg?style=flat-square
   :target: https://github.com/wepay/signer-php
.. |Build Status| image:: http://img.shields.io/travis/wepay/signer-php/master.svg?style=flat-square
   :target: https://travis-ci.org/wepay/signer-php
.. |Coverage Status| image:: http://img.shields.io/coveralls/wepay/signer-php/master.svg?style=flat-square
   :target: https://coveralls.io/r/wepay/signer-php?branch=master
.. |Code Climate| image:: http://img.shields.io/codeclimate/github/wepay/signer-php.svg?style=flat-square
   :target: https://codeclimate.com/github/wepay/signer-php
.. |Code Quality| image:: http://img.shields.io/scrutinizer/g/wepay/signer-php.svg?style=flat-square
   :target: https://scrutinizer-ci.com/g/wepay/signer-php
.. |Dependency Status| image:: https://www.versioneye.com/user/projects/54dc5ab6c1bbbd9bd700050e/badge.svg?style=flat-square
   :target: https://www.versioneye.com/user/projects/54dc5ab6c1bbbd9bd700050e
.. |SensioLabs Insight| image:: https://insight.sensiolabs.com/projects/0bd1cdc9-be1b-445c-9fdc-358a57874ee2/mini.png
   :target: https://insight.sensiolabs.com/projects/0bd1cdc9-be1b-445c-9fdc-358a57874ee2
.. |HHVM Support| image:: http://img.shields.io/hhvm/wepay/signer-php.svg?style=flat-square
   :target: https://hhvm.com
.. |Documentation Status| image:: https://readthedocs.org/projects/shared-utilities/badge/?version=master&style=flat-square
   :target: https://readthedocs.org/projects/shared-utilities/?badge=master
.. |MIT License| image:: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
   :target: http://opensource.org/licenses/MIT
.. |Author| image:: http://img.shields.io/badge/author-@skyzyx-blue.svg?style=flat-square
   :target: https://twitter.com/skyzyx