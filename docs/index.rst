This is a thin wrapper around the `skyzyx/signer <https://github.com/skyzyx/signer>`__ package.

Examples
--------

Generate a signature
~~~~~~~~~~~~~~~~~~~~

.. code:: php

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

Generate all of the query string parameters for the request
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: php

    $querystring = $signer->generateQueryStringParams([
        'page'         => $wepay_page_to_visit,
        'redirect_uri' => $partner_page_to_return_to,
    ]);

    #=> client_id=your_client_id&
    #=> page=https://wepay.com/account/12345&
    #=> redirect_uri=https://partnersite.com/home&
    #=> token=dfbffab5b6f7156402da8147886bba3eba67bd5baf2e780ba9d39e8437db7c47...
