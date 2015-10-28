##### Signed by https://keybase.io/skyzyx
```
-----BEGIN PGP SIGNATURE-----

iQEcBAABCgAGBQJWMUaHAAoJEP9Zal5eC0aCFEkH/3HAv71GXa2CcN7KjxxahKoj
TP+YAjeSbuKzUiNMQpjSVofbi4nBgomChCZpGtVrLPT7SVmZ4WFgEw+nBcmYZ/4V
BoSCVRJU7wRPRJwzCl6xZ+AkmLinaaSV4bAFxPPdDANbt9QT9gIxA0wkv4c9CNnC
HQpKKh0yoVQEZ3ex7WAtmVpsWM0pbXsL4bKXppHPC46BnTFlekKX+ueX2VBOopKd
Ir9eQ9qlbZfOVuKnCZmMPFaKaVP5VlyUOAvNg0vzwi0EuzHATY57YOhv/8TaGweE
k2Xn3sUiOB4K+VzDc6y79VyLVW0fObADyxbb07VifKgfEwBaZ4afCisz4dYTHnw=
=XjZe
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
1375          .travis.yml              623d4196c94be73a10da60ca4c724a7120b6f427fc5f3a63ca0995d3a8417101
1169          composer.json            f965d8ff63ce1ff75d6dc2b4ef1c747b5b6966a8f394fe9593bbca19f4a86909
              docs/                                                                                    
                _templates/                                                                            
66                nav_links.html       ccef138d8114bb3085cb1a4fb0fa14ddbcc84ea048bb0e6b162620e6a0f7c50e
355             api-reference.rst      aa3ffc09b91455cb5eebad9eeefb6d59c068359ffed134ff2c09ff38115022fe
511             coding-standards.rst   1b759910f3caf3a06ba139d1840c2b8bd8f08885380b57948f0e22ae91075a68
796             conf.py                e99036ba2343921f49cb7155a9e0672cba0ec7cc9766c16a4bdef2356e57f5e2
615             contributing.rst       76f8201d09dbb325b248b206ca37652ba16a06afca878a3260ccfdc4aced794f
385             copyright.rst          e08ebd3f0ac48a092b9571f3d538a88aed23d13f92218e494ae22eade08b9fd2
702             debug-logging.rst      778b315df327a8319ab9e9daa750a6419716915b82ed04421df669d0bee532f1
383             gpg.rst                f8e6f83a01350abebb350330f807e3dd4bb80ac008fbc5fc3d41598e5904e6bf
2947            index.rst              17bdde1cdc66ebb3136219db15669af26578fc1811c2536bb24a7375eedabac0
233             installation.rst       e2fecf1a2e2f37c8f504a8efc17913031b7017d008e593d2dadf8c1b496a4d9a
6810            Makefile               3d84bf77fc52d894d87a1c546204788263787038f665c2064db2ab52ed55b37d
798             sami-config.php        bb3a3a541244fb4f372681e07434ed1607158db4cfeb67f620559a53944f44ff
3649            signing-algorithm.rst  b3116d6d8e6ba77719bf07d0b1427940d2de2541d9031353f4e3a324d044d52b
268             testing.rst            dacf8f543ed651f62d2c36837403fe806b7fc4af133e87d8e5423ba3dffa16f3
1174            usage.rst              bd602d05b99e7706ffe6d632424b39faa0a26ec071c7da1cf9d61f131bb7fffd
9202          LICENSE.md               d86082393c045c6ee8fcef26a1680e31c72b2afb07f687ac337325747f341585
1713          Makefile                 2f198af6b37cf8e45c2eca4595a24b49d5a291d4af2b74f9d66ed7c7667431df
1689          phpmd.xml.dist           cec5d7d165acbc22340cac7c1177c24ac62c9a634024d0a68700c4db918b33b3
1311          phpunit.xml.dist         f19fe3e5b139c0b369ec6d96ba618929f390b0e511a9ecdf93ea43aba0aedab5
2334          README.md                dff5d64118dd110845d02882db500d14f8714f74e0a0af4105807aac951efd34
              src/                                                                                     
                Signer/                                                                                
3446              Signer.php           a66b5725a3c78fc2c7a2b75d03157958f88644c78d7b1a78eaff07ea4ce33d32
              tests/                                                                                   
141             bootstrap.php          e09df3d25de8fb6c9f4f89e7275a0f470899189593c33cbd3412411bd94e2992
                Signer/                                                                                
2796              SignerTest.php       63254b749f72e228ac11a40d9c271477a0d9388f4b4146bfc3a0b1cb7d536e03
6             VERSION                  cc52f678848b814373757b460383bf61960e4943c203735adde0a350b3e50989
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