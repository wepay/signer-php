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
    const DEFAULT_SIGNATURE = '1f3bac3e0ecdc2c613ece06c6c6d8646f83f6d985c287a7a4a23f4b936379450c0cdc9b1784951576b3d412f37f4578a755e56abdbf637359290e344ff31d1de';

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
