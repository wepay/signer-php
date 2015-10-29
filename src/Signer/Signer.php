<?php
/**
 * Copyright (c) 2015 WePay.
 *
 * http://opensource.org/licenses/Apache2.0
 */

namespace WePay\Signer;

use Psr\Log\LoggerAwareInterface;
use Psr\Log\LoggerAwareTrait;
use Skyzyx\Signer\Signer as WrappedSigner;
use Skyzyx\Signer\SignerInterface;

/**
 * @see Skyzyx\Signer\Signer
 */
class Signer implements SignerInterface, LoggerAwareInterface
{
    use LoggerAwareTrait;


    /**************************************************************************/
    // PROPERTIES

    /** @var string */
    private $self_key;

    /** @var string */
    private $client_id;

    /** @var string */
    private $client_secret;

    /** @var string */
    private $hash_algo;

    /** @var \Skyzyx\Signer\Signer */
    private $signer;


    /**************************************************************************/
    // PUBLIC METHODS

    /**
     * Constructs a new instance of this class.
     *
     * @param string $client_id     A string which is the public portion of the keypair identifying the client party.
     *                              The pairing of the public and private portions of the keypair should only be known
     *                              to the client party and the signing party.
     * @param string $client_secret A string which is the private portion of the keypair identifying the client party.
     *                              The pairing of the public and private portions of the keypair should only be known
     *                              to the client party and the signing party.
     * @see http://php.net/hash_algos
     */
    public function __construct($client_id, $client_secret)
    {
        $this->self_key      = 'WePay';
        $this->client_id     = $client_id;
        $this->client_secret = $client_secret;
        $this->hash_algo     = 'sha512';

        $this->signer = new WrappedSigner(
            $this->self_key,
            $this->client_id,
            $this->client_secret,
            $this->hash_algo
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getSelfKey()
    {
        /** @var string */
        return $this->signer->getSelfKey();
    }

    /**
     * {@inheritdoc}
     */
    public function getClientId()
    {
        /** @var string */
        return $this->signer->getClientId();
    }

    /**
     * {@inheritdoc}
     */
    public function getClientSecret()
    {
        /** @var string */
        return $this->signer->getClientSecret();
    }

    /**
     * {@inheritdoc}
     */
    public function sign(array $payload)
    {
        $payload = array_merge($payload, [
            'client_id' => $this->getClientId(),
            'client_secret' => $this->getClientSecret(),
        ]);

        return $this->signer->sign($payload);
    }

    /**
     * Signs and generates the query string URL parameters to use when making a request.
     *
     * @param  array  $payload The data to generate a signature for.
     * @return string          The query string parameters to append to the end of a URL.
     */
    public function generateQueryStringParams(array $payload)
    {
        $token = $this->sign($payload);

        $payload['client_id'] = $this->getClientId();
        $payload['stoken']    = $token;

        ksort($payload);

        return http_build_query($payload);
    }
}
