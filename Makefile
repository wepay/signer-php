all:
	@cat Makefile | grep : | grep -v PHONY | grep -v @ | sed 's/:/ /' | awk '{print $$1}' | sort

#-------------------------------------------------------------------------------

.PHONY: install
install:
	composer self-update
	composer install -o

.PHONY: test
test:
	php bin/phpunit

#-------------------------------------------------------------------------------

.PHONY: docs
docs:
	@ echo "Building API reference…"
	php bin/sami.php update docs/sami-config.php -v

	@ echo "Building prose documentation…"
	cd docs && make html

.PHONY: showdocs
showdocs:
	open docs/api-build/master/index.html
	open docs/_build/html/index.html

.PHONY: pushdocs
pushdocs: docs
	rm -Rf /tmp/gh-pages
	git clone git@github.com:wepay/signer-php.git --branch gh-pages --single-branch /tmp/gh-pages
	cp -Rf ./docs/api-build/ /tmp/gh-pages/
	cd /tmp/gh-pages/ && git add . && git commit -a -m "Automated commit on $$(date)" && git push origin gh-pages

	@ echo " "
	@ echo "Prose documentation is automatically built by the Read The Docs service. https://readthedocs.org/projects/wepay-signer-php/"

#-------------------------------------------------------------------------------

.PHONY: tag
tag:
	@ if [ $$(git status -s -uall | wc -l) != 0 ]; then echo 'ERROR: Git workspace must be clean.'; exit 1; fi;

	@echo "This release will be tagged as: $$(cat ./VERSION)"
	@echo "This version should match your release. If it doesn't, re-run 'make version'."
	@echo "---------------------------------------------------------------------"
	@read -p "Press any key to continue, or press Control+C to cancel. " x;

	@echo " "
	@chag update $$(cat ./VERSION)
	@echo " "

	@echo "These are the contents of the CHANGELOG for this release. Are these correct?"
	@echo "---------------------------------------------------------------------"
	@chag contents
	@echo "---------------------------------------------------------------------"
	@echo "Are these release notes correct? If not, cancel and update CHANGELOG.md."
	@read -p "Press any key to continue, or press Control+C to cancel. " x;

	@echo " "

	git add .
	git commit -a -m "Preparing the $$(cat ./VERSION) release."
	chag tag

#-------------------------------------------------------------------------------

.PHONY: version
version:
	@echo "Current version: $$(cat ./VERSION)"
	@read -p "Enter new version number: " nv; \
	printf "$$nv" > ./VERSION
