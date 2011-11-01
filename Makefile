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

.PHONY : node_modules node_modules/handlebars
