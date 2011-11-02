update :
	$(MAKE) node_modules
	$(MAKE) node_modules/handlebars

JISON = node $(shell pwd)/node_modules/jison/bin/jison
HANDLEBARS = node $(shell pwd)/node_modules/handlebars/bin/handlebars
UGLIFYJS = node $(shell pwd)/node_modules/uglify-js/bin/uglifyjs

node_modules :
	@git submodule init && git submodule update

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

export/handlebars.min.js : node_modules/handlebars
	-mkdir export
	cd node_modules/handlebars/ && \
	rake -f ../../Rakefile.handlebars release && \
	cd ../../ && \
	mv $(HANDLEBARS_DIST) $(HANDLEBARS_DIST_VM) export/ && \
	cd export/ && \
	$(UGLIFYJS) handlebars.js > handlebars.min.js && \
	$(UGLIFYJS) handlebars.vm.js > handlebars.vm.min.js

export/cui2.js : lib_ui/lib_ui.js export/handlebars.min.js
	printf "\n/* $< */\n" | \
		cat export/handlebars.min.js - $< > $@

.PHONY : node_modules node_modules/handlebars export/handlebars.min.js
