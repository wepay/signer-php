Signing Algorithm
=================

Documentation for how to implement your own Request Signer for languages
where we do not already have an Request Signer SDK. This implementation is based on
a stripped-down version of `AWS Signature
v4 <http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html>`__,
and uses `SHA-512 <https://en.wikipedia.org/wiki/SHA-512>`__ for
hashing.

scope
-----

Source:

.. code:: php

    # WePay/client_id/signer
    scope = "WePay/" + client_id + "/signer"

Example:

::

    WePay/client_id/signer

canonical\_context
------------------

Source:

.. code:: php

    # Your input data, as key-value pairs
    key_value_pairs = [
        "client_id": client_id,
        "client_secret": client_secret,
        "token": your_token,
        "page": wepay_page_to_visit,
        "redirect_uri": partner_page_to_return_to,
    ]

    # 1. Go though each of the key-value pairs
    # 2. Convert all keys & values to lowercase
    # 3. Turn the value into a string of "key=value", indexed by the lowercased key
    for (key, value) in key_value_pairs {
        lower_key = key.lowercase()
        lower_value = value.lowercase()

        list_of_lowercase_keys.push(lower_key)
        sanitized_key_value_pairs[lower_key] = lower_key + "=" + lower_value
    }

    # Ensure that all keys are in true alphabetical order
    sanitized_key_value_pairs = sanitized_key_value_pairs.sort_by_keys()

    # Get a string, consisting of a list of keys delimited by semicolons
    signed_headers_string = list_of_lowercase_keys.join_as_string_with_delimiter(";")

    # Get the canonical "context" for the signature that will be used for signing
    canonical_context = sanitized_key_value_pairs.join_as_string_with_delimiter("\n")
                      + "\n\n"
                      + signed_headers_string

Example:

::

    client_id={client_id}
    client_secret={client_secret}
    page={wepay_page_to_visit}
    redirect_uri={partner_page_to_return_to}

    client_id;client_secret;page;redirect_uri

string\_to\_sign
----------------

Source:

.. code:: php

    # Determine the string that will ultimately be signed
    # hash_sha512() produces a 128-character hexadecimal hash
    string_to_sign = "SIGNER-HMAC-SHA512" + "\n"
                   + "WePay" + "\n"
                   + client_id + "\n"
                   + hash_sha512(scope) + "\n"
                   + hash_sha512(canonical_context)

Example:

::

    SIGNER-HMAC-SHA512
    WePay
    {client_id}
    EXAMPLE01452722F2366BC72EBBEF736D832F06765373D8445514573A5B411ABA042D0A97EDDA068187A8BE5B581EB24E0EAED7B937F77767593DA789EXAMPLE
    EXAMPLE6E214454FAC7A639C3F793B7991EB98A755C701B45BB5AA4DE328455B5B5F072D14CF828A63BBE3CA392D397609AF6C203EE163CCAF26D84ADEXAMPLE

signing\_key
------------

Source:

.. code:: php

    # raw_hmac_sha512(data, secret) returns raw binary data
    self_key_sign  = raw_hmac_sha512("WePay", client_secret)
    client_id_sign = raw_hmac_sha512(client_id, self_key_sign)
    salt           = raw_hmac_sha512("signer", client_id_sign)

    # Convert the raw binary data to a hexadecimal value
    signing_key = hex_encode(salt)

Example:

::

    EXAMPLE6E214454FAC7A639C3F793B7991EB98A755C701B45BB5AA4DE328455B5B5F072D14CF828A63BBE3CA392D397609AF6C203EE163CCAF26D84ADEXAMPLE

signature
---------

Source:

.. code:: php

    # raw_hmac_sha512(data, secret) returns raw binary data
    signature = raw_hmac_sha512(string_to_sign, signing_key)

Example:

::

    EXAMPLE01452722F2366BC72EBBEF736D832F06765373D8445514573A5B411ABA042D0A97EDDA068187A8BE5B581EB24E0EAED7B937F77767593DA789EXAMPLE
