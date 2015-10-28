Deploying
=========

1. The ``Makefile`` (yes, ``Makefile``) has a series of commands to
   simplify the development and deployment process.
2. Also install `Chag`_. This is used for managing the CHANGELOG and annotating
   the Git release correctly.

Updating the CHANGELOG
----------------------

Make sure that the ``CHANGELOG.md`` is human-friendly. See
http://keepachangelog.com if you don’t know how.

make
--------

Running ``make`` by itself will show you a list of available sub-commands.

.. code:: bash

    $ make
    all
    docs
    install
    pushdocs
    tag
    test
    version

make pushdocs
-----------------

You will need to have write-access to the ``wepay/signer-php`` repository on
GitHub. You should have already set up:

-  Your SSH key with your GitHub account.
-  Had your GitHub user given write-access to the repository.

Then you can run:

.. code:: bash

    make pushdocs

You can view your changes at https://wepay.github.io/signer-php/.

make version
----------------

This allows you to set the version number for the next release.

make tag
------------

You will need to have a `Keybase`_ account first, including setting-up the
`Keybase CLI tool`_.

Then you can run:

.. code:: bash

    make tag

You can view your changes in the ``SIGNED.md`` file.

Drafting a GitHub release
-------------------------

1. Go to https://github.com/wepay/signer-php/tags
2. Find the new tag that you just pushed. Click the ellipsis (``…``) to
   see the commit notes. Copy these.
3. To the right, choose *Add release notes*. Your *Tag version* should
   be pre-filled.
4. The *Release title* should match your *Tag version*.
5. Inside *Describe this release*, paste the notes that you copied on
   the previous page.
6. Choose *Publish release*.
7. Your release should now be the latest.
   https://github.com/wepay/signer-php/releases/latest

.. _Chag: https://github.com/mtdowling/chag
.. _Keybase: https://keybase.io
.. _Keybase CLI tool: https://keybase.io/docs/command_line/prerequisites
