<?php
/**
 * Copyright (c) 2015 WePay
 *
 * http://opensource.org/licenses/Apache2.0
 */

namespace WePay\Test\Signer;

use \PHPUnit_Framework_TestCase;
use WePay\Signer\Signer;

class SignerTest extends PHPUnit_Framework_TestCase
{
    /** @var string */
    const DEFAULT_CLIENT_ID = 'k3qDQy0Tr56v1ceo';

    /** @var string */
    const DEFAULT_CLIENT_SECRET = 'O5j@pG@Jt%AzyiJTEfo!£LS';

    /** @var string */
    const DEFAULT_SIGNATURE = 'f083db795a34994a173435f73657e2c5cc2e318daae6bc15df8d76a6edd5b0fb4ce442f1f85a66d0e20ebc5e2f57eb3334d12f55661f1bad20953c05fbc2db16';

    /** @var string */
    const DEFAULT_PAGE = 'https://wepay.com/account/12345';

    /** @var string */
    const DEFAULT_REDIRECT_URI = 'https://partnersite.com/home';

    /** @var string */
    const DEFAULT_QS = 'client_id=%s&page=%s&redirect_uri=%s&token=%s';

    /** @var \WePay\Signer\Signer */
    public $signer;

    public function setUp()
    {
        $this->signer = new Signer(self::DEFAULT_CLIENT_ID, self::DEFAULT_CLIENT_SECRET);
    }

    public function testAttributes()
    {
        $this->assertEquals(self::DEFAULT_CLIENT_ID, $this->readAttribute($this->signer, 'client_id'));
        $this->assertEquals(self::DEFAULT_CLIENT_SECRET, $this->readAttribute($this->signer, 'client_secret'));
    }

    public function testGetClientKey()
    {
        $this->assertEquals(self::DEFAULT_CLIENT_ID, $this->signer->getClientId());
    }

    public function testGetClientSecret()
    {
        $this->assertEquals(self::DEFAULT_CLIENT_SECRET, $this->signer->getClientSecret());
    }

    public function testSign()
    {
        $signature = $this->signer->sign([
            'page'         => 'https://wepay.com/account/12345',
            'redirect_uri' => 'https://partnersite.com/home',
        ]);

        $this->assertEquals(self::DEFAULT_SIGNATURE, $signature);
    }

    public function testGenerateQueryStringParams()
    {
        $querystring = $this->signer->generateQueryStringParams([
            'page'         => 'https://wepay.com/account/12345',
            'redirect_uri' => 'https://partnersite.com/home',
        ]);

        $this->assertEquals(
            sprintf(
                self::DEFAULT_QS,
                self::DEFAULT_CLIENT_ID,
                self::DEFAULT_PAGE,
                self::DEFAULT_REDIRECT_URI,
                self::DEFAULT_SIGNATURE
            ),
            $querystring
        );
    }
}
