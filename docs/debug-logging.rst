Debug Logging
=============

**NOTE:** You should *only* use logging during development — never in
production.

Signer implements the `PSR-3`_ ``Psr\Log\LoggerAwareInterface``. Because
of this, you can inject any PSR-3-compatible logging package, and Signer
will use it to log ``DEBUG``-level messages.

.. code:: php

    use Monolog\Logger;
    use Monolog\Handler\StreamHandler;
    use Skyzyx\Signer\Signer;

    // create a log channel
    $log = new Logger('name');
    $log->pushHandler(new StreamHandler('path/to/your.log', Logger::DEBUG));

    // inject a logger
    $signer = new Signer();
    $signer->setLogger($log);

    $signer->sign( ... );

.. _PSR-3: https://github.com/php-fig/log
