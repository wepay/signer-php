##### Signed by https://keybase.io/skyzyx
```
-----BEGIN PGP SIGNATURE-----

iQEcBAABCgAGBQJU5TCgAAoJEP9Zal5eC0aCE0cH/R+kTU6/ZwW03qg9+zGfrTjo
CPUqSlG/d0DDQv0MwdZOg05M2IOGU+lqGHNeqqnPCzmk6DD9FijXpBhV/+z1kP1p
EavduEoy3gxOGzcEgkhPoUM7VHCmq8zj6wcwycHdyQYQuquYGMuK6kjr7+W4/ZQc
EwbGKKrwsh9V3IOSlqQ8297uGRqkB0u7xw2sR5tA4f1PCayoSdEiG3iOOktHIl0g
ThipFDvJSURQ27nTO+wmCpjrPRiHLHz1a2VmlSpK/eYp6W31z8qxkYd2FoW93LpS
+9b3GCrgmJkG82bTExfJltXlPaeW460cl1WAAVz2hIm39spnjboYaWAfuIboLeU=
=YR3O
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
483             api-reference.rst      e5d8e0179a1d38f1ae9f0dc5682692c858da178799b40f5fd7495232a7d2e239
796             conf.py                e99036ba2343921f49cb7155a9e0672cba0ec7cc9766c16a4bdef2356e57f5e2
702             debug-logging.rst      778b315df327a8319ab9e9daa750a6419716915b82ed04421df669d0bee532f1
2976            index.rst              b5f2793ac7454baf99801bbde939017097677e115f9927bd662228c81763db17
333             installation.rst       07b71b1bf6b1d4deba90646f61c479494bb8b789f6e8431b1795ee9b25d62f6d
6810            Makefile               3d84bf77fc52d894d87a1c546204788263787038f665c2064db2ab52ed55b37d
798             sami-config.php        bb3a3a541244fb4f372681e07434ed1607158db4cfeb67f620559a53944f44ff
3591            signing-algorithm.rst  c44c66209f6f378c97e33b5d2a79f081c5b0f86961d410d0fbcadb509e893fb5
183             testing.rst            c112be25483d520fcec82226453aa032716c07c4aca76d08007aaac10c746dea
1096            usage.rst              9c5f0adf04e07586552d3471644ae48a757a543e9cf4b800cfd5c4ed5b6e307d
9202          LICENSE.md               d86082393c045c6ee8fcef26a1680e31c72b2afb07f687ac337325747f341585
              output/                                                                                  
1689          phpmd.xml.dist           cec5d7d165acbc22340cac7c1177c24ac62c9a634024d0a68700c4db918b33b3
1311          phpunit.xml.dist         f19fe3e5b139c0b369ec6d96ba618929f390b0e511a9ecdf93ea43aba0aedab5
5889          README.md                6c8d1b64c54a8b7d104f500f22cc8ff0d4704ed185c28e328eb923431f770ed9
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