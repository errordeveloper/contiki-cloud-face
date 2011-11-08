JISON = node $(shell pwd)/node_modules/jison/bin/jison
HANDLEBARS = node $(shell pwd)/node_modules/handlebars/bin/handlebars
UGLIFYJS = node $(shell pwd)/node_modules/uglify-js/bin/uglifyjs

## Hopefully this will be re-usable thing,
## unless this repo was the only one which
## would require such a trick :)
import :
	@git submodule init && \
	git submodule update && \
        grep -q master .gh-pages/.git/config && \
        $(MAKE) gh-pages-submodule-tweak

gh-pages-submodule-tweak :
	cd .gh-pages && \
	git checkout origin/gh-pages -b gh-pages && \
	git branch -d master

node_modules/handlebars :
	cd $@ && \
	$(JISON) \
	  ./src/handlebars.yy \
	  ./src/handlebars.l && \
	mv ./handlebars.js \
	  ./lib/handlebars/compiler/parser.js

## Not too sure which way would be better, but for now
## it will do just fine! Refoctor whent it gets complex.
# HANDLEBARS_DIST_DIR = node_modules/handlebars/dist/
# HANDLEBARS_DIST = handlebars.js handlebars.vm.js

HANDLEBARS_DIST = node_modules/handlebars/dist/handlebars.js
HANDLEBARS_DIST_VM = node_modules/handlebars/dist/handlebars.vm.js

EXPORT = .gh-pages/export

## XXX: Well, it took quite a bit of effort to get these
# goddamn "handlebars" done, hence I leave it here just
# in case it may be needed! TO BE DELETED SOON, THOUGH.
#$(EXPORT)/handlebars.min.js : node_modules/handlebars
#	cd node_modules/handlebars/ && \
#	rake -f ../../Rakefile.handlebars release && \
#	cd ../../ && \
#	mv $(HANDLEBARS_DIST) $(HANDLEBARS_DIST_VM) $(EXPORT) && \
#	cd $(EXPORT) && \
#	$(UGLIFYJS) handlebars.js > handlebars.min.js && \
#	$(UGLIFYJS) handlebars.vm.js > handlebars.vm.min.js
#
#$(EXPORT)/cui.js : lib_ui/lib_ui.js $(EXPORT)/handlebars.min.js
#	printf "\n/* $< */\n" | \
#		cat $(EXPORT)/handlebars.min.js - $< > $@

JSSHA1 = import/misc/jsSHA-1.3/src/sha1.js

$(EXPORT)/cloud-face-jquery.js : lib_ui/lib_ui.js
	curl http://www.google.com/jsapi | \
	cat - $(JSSHA1) $< > $@

export-push : $(EXPORT)/cloud-face-jquery.js
	cd $(EXPORT) && \
	git status

.PHONY : node_modules node_modules/handlebars $(EXPORT)/handlebars.min.js
