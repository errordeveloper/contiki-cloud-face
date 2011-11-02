../export/cui.js : lib_ui.js
	printf "\n/* $< */\n" | \
		cat ../export/handlebars.min.js - $< > $@
