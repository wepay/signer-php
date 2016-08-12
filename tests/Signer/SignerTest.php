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
    const DEFAULT_CLIENT_ID = '12173158495';

    /** @var string */
    const DEFAULT_CLIENT_SECRET = '1594122c5c36f438f8ba';

    /** @var string */
    const DEFAULT_SIGNATURE = 'c2de34c15cd76f797cf80781747da3874639a827a4cb79dcd862cc17b35cf2e2c721ea7d49ab9f60590d637ae0f51fd4ed8ddb551b922e0cd7e35a13b86de360';

    /** @var string */
    const DEFAULT_PAGE = 'https://wepay.com/account/12345';

    /** @var string */
    const DEFAULT_REDIRECT_URI = 'https://partnersite.com/home';

    /** @var string */
    const DEFAULT_QS = 'client_id=%s&page=%s&redirect_uri=%s&stoken=%s&token=%s';

    /** @var string */
    const DEFAULT_TOKEN = '10c936ca-5e7c-508b-9e60-b211c20be9bc';

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

    public function testGetSelfKey()
    {
        $this->assertEquals('WePay', $this->signer->getSelfKey());
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
            'token'        =>  self::DEFAULT_TOKEN,
        ]);

        $this->assertEquals(self::DEFAULT_SIGNATURE, $signature);
    }

    public function testGenerateQueryStringParams()
    {
        $querystring = $this->signer->generateQueryStringParams([
            'page'         => 'https://wepay.com/account/12345',
            'redirect_uri' => 'https://partnersite.com/home',
            'token'        =>  self::DEFAULT_TOKEN,
        ]);

        $this->assertEquals(
            sprintf(
                self::DEFAULT_QS,
                self::DEFAULT_CLIENT_ID,
                self::DEFAULT_PAGE,
                self::DEFAULT_REDIRECT_URI,
                self::DEFAULT_SIGNATURE,
                self::DEFAULT_TOKEN
            ),
            $querystring
        );
    }

    public function testGenerateQueryStringParamsClientSecret()
    {
        $querystring = $this->signer->generateQueryStringParams([
            'page'          => 'https://wepay.com/account/12345',
            'redirect_uri'  => 'https://partnersite.com/home',
            'token'         =>  self::DEFAULT_TOKEN,
            'client_id'     =>  self::DEFAULT_CLIENT_ID,
            'client_secret' =>  self::DEFAULT_CLIENT_SECRET,
        ]);

        $this->assertEquals(
            sprintf(
                self::DEFAULT_QS,
                self::DEFAULT_CLIENT_ID,
                self::DEFAULT_PAGE,
                self::DEFAULT_REDIRECT_URI,
                self::DEFAULT_SIGNATURE,
                self::DEFAULT_TOKEN
            ),
            $querystring
        );
    }
}
