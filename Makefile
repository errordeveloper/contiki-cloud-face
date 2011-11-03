JISON = node $(shell pwd)/node_modules/jison/bin/jison
HANDLEBARS = node $(shell pwd)/node_modules/handlebars/bin/handlebars
UGLIFYJS = node $(shell pwd)/node_modules/uglify-js/bin/uglifyjs

import :
	@git submodule init && \
	git submodule update && \
	$(MAKE) node_modules/handlebars && \
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

$(EXPORT)/handlebars.min.js : node_modules/handlebars
	cd node_modules/handlebars/ && \
	rake -f ../../Rakefile.handlebars release && \
	cd ../../ && \
	mv $(HANDLEBARS_DIST) $(HANDLEBARS_DIST_VM) $(EXPORT) && \
	cd $(EXPORT) && \
	$(UGLIFYJS) handlebars.js > handlebars.min.js && \
	$(UGLIFYJS) handlebars.vm.js > handlebars.vm.min.js

$(EXPORT)/cui.js : lib_ui/lib_ui.js $(EXPORT)/handlebars.min.js
	printf "\n/* $< */\n" | \
		cat $(EXPORT)/handlebars.min.js - $< > $@

export-push : $(EXPORT)/cui.js
	cd $(EXPORT) && \
	git status

.PHONY : node_modules node_modules/handlebars $(EXPORT)/handlebars.min.js
