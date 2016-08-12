<?php

use Sami\Sami;
use Sami\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('tests')
    ->in(dirname(__DIR__) . '/src')
    ->in(dirname(__DIR__) . '/vendor/psr')
    ->in(dirname(__DIR__) . '/vendor/skyzyx/signer/src')
;

$repo = dirname(__DIR__);

$versions = GitVersionCollection::create($repo)
    ->addFromTags('1.*')
    ->addFromTags('feature/*')
    ->add('master', 'master branch')
;

return new Sami($iterator, array(
    // 'theme'                => 'symfony',
    'versions'             => $versions,
    'title'                => 'WePay Signer for PHP',
    'build_dir'            => __DIR__.'/api-build/%version%',
    'cache_dir'            => __DIR__.'/api-cache/%version%',
    'default_opened_level' => 2,
));
