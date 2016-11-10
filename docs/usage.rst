Usage
=====

Generate a signature
--------------------

.. code-block:: php

    use WePay\Signer\Signer;

    $client_id = 'your_client_id';
    $client_secret = 'your_client_secret';

    $signer = new Signer($client_id, $client_secret);
    $signature = $signer->sign([
        'token'        => $your_token,
        'page'         => $wepay_page_to_visit,
        'redirect_uri' => $partner_page_to_return_to,
    ]);

    $signature = wordwrap($signature, 64, "\n", true);
    #=> dfbffab5b6f7156402da8147886bba3eba67bd5baf2e780ba9d39e8437db7c47
    #=> 35e9a0b834aa21ac76f98da8c52a2a0cd1b0192d0f0df5c98e3848b1b2e1a037

Generate all of the query string parameters for the request
-----------------------------------------------------------

.. code-block:: php

    $querystring = $signer->generateQueryStringParams([
        'token'        => $your_token,
        'page'         => $wepay_page_to_visit,
        'redirect_uri' => $partner_page_to_return_to,
    ]);

    #=> client_id=your_client_id&
    #=> page=https%3A%2F%2Fwepay.com%2Faccount%2F12345&     // in url encoded format
    #=> redirect_uri=https://partnersite.com/home&          // in url encoded format
    #=> token=dfbffab5b6f7156402da8147886bba3eba67bd5baf2e780ba9d39e8437db7c47...

If you are generating the query string parameters by yourself, make sure that page and redirect_uri are in url encoded format