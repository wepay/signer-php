##### Signed by https://keybase.io/skyzyx
```
-----BEGIN PGP SIGNATURE-----

iQEcBAABCgAGBQJU5TcOAAoJEP9Zal5eC0aCSusIAIiamKd1rOa1FyMm1guydl0K
+s8bqL+nhJWsmqMp/yiC2fR/XvNab1l1od3LvgkPFXkgDuseIyAayMwdUTThbpsB
cZ/BNUtxrbhfhwLe8eHT+2aygEMadLq3LxKFydb3WhyGpXOvhelndDkPe0KL9c9r
6PtBV9p0ynWwE8lEnYyiYHn7Lc2Rk//cArfRKalo07KGqgxiMAabIxONKb+dEil+
KBCvOfOrfRLhQRD04CUvJiNCmT2CC17akunc5ja3Gckn7BNlEhsXrmPb3KGDn9le
9Qwdd+I2h913qoAv5SNQnhjopicDRTErz34/xRDc3Bk1g+1ZAQH3RNV1W4zZ1Jo=
=dSSz
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file                       contents                                                        
            ./                                                                                         
76            .coveralls.yml           9b154cb581255a3d8d244b342185826562937272667ab7f7fe69d3a9459550fa
130           .gitignore               24d6c7d562341af10eca841e50f2f4d6799935efecdd47ec24896ce6ec5b7614
6747          .scrutinizer.yml         bf3af3aad68cbcef1c2899b3c9b181abc108d3561eff4546b96486ea9fd60432
1233          .travis.yml              ca759ade5ecc71eeeb8860ef18285d27ad1caf20b69445c125e707c4c5a83eb3
1169          composer.json            f965d8ff63ce1ff75d6dc2b4ef1c747b5b6966a8f394fe9593bbca19f4a86909
              docs/                                                                                    
                _templates/                                                                            
66                nav_links.html       ccef138d8114bb3085cb1a4fb0fa14ddbcc84ea048bb0e6b162620e6a0f7c50e
283             api-reference.rst      55170c62479809e7cf9b79c72a0bce443891982d7e11a43340ce2cb71688152c
511             coding-standards.rst   1b759910f3caf3a06ba139d1840c2b8bd8f08885380b57948f0e22ae91075a68
796             conf.py                e99036ba2343921f49cb7155a9e0672cba0ec7cc9766c16a4bdef2356e57f5e2
615             contributing.rst       76f8201d09dbb325b248b206ca37652ba16a06afca878a3260ccfdc4aced794f
385             copyright.rst          e08ebd3f0ac48a092b9571f3d538a88aed23d13f92218e494ae22eade08b9fd2
702             debug-logging.rst      778b315df327a8319ab9e9daa750a6419716915b82ed04421df669d0bee532f1
324             gpg.rst                86515cf30d433193f6d1a11bd78a96cc4ba3683dcb7bed15e2f755a3cbc1a1c8
2947            index.rst              17bdde1cdc66ebb3136219db15669af26578fc1811c2536bb24a7375eedabac0
233             installation.rst       e2fecf1a2e2f37c8f504a8efc17913031b7017d008e593d2dadf8c1b496a4d9a
6810            Makefile               3d84bf77fc52d894d87a1c546204788263787038f665c2064db2ab52ed55b37d
798             sami-config.php        bb3a3a541244fb4f372681e07434ed1607158db4cfeb67f620559a53944f44ff
3591            signing-algorithm.rst  c44c66209f6f378c97e33b5d2a79f081c5b0f86961d410d0fbcadb509e893fb5
183             testing.rst            c8a839a4c5bb2b6ed1fdb6b8b4b6de61678e7602194f1cdd5f62ba2532f26d26
1174            usage.rst              bd602d05b99e7706ffe6d632424b39faa0a26ec071c7da1cf9d61f131bb7fffd
9202          LICENSE.md               d86082393c045c6ee8fcef26a1680e31c72b2afb07f687ac337325747f341585
              output/                                                                                  
1689          phpmd.xml.dist           cec5d7d165acbc22340cac7c1177c24ac62c9a634024d0a68700c4db918b33b3
1311          phpunit.xml.dist         f19fe3e5b139c0b369ec6d96ba618929f390b0e511a9ecdf93ea43aba0aedab5
2298          README.md                1a9ee25244c12951edeaa53b07dc97323e7a3836cf0b86cf743167da998ca127
              src/                                                                                     
                Signer/                                                                                
3446              Signer.php           8606d2660349ad92caf389cb48e7cb2ca616d227b38ae2e0b422417d7e92f33f
              tests/                                                                                   
141             bootstrap.php          e09df3d25de8fb6c9f4f89e7275a0f470899189593c33cbd3412411bd94e2992
                Signer/                                                                                
2564              SignerTest.php       132f346b6dea9889b3b13dfefeca1d644044b1ef2bb60ff6b5145f1e0ad34d8a
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing