testUnit:;@echo "Running unit tests..."; \
        ./node_modules/.bin/mocha ./test/*.Unit.js \
        --reporter spec \
        --recursive \
        --globals ""


testInt:;@echo "Running integration tests..."; \
        ./node_modules/.bin/mocha ./test/*.Integration.js \
        --reporter spec \
        --recursive \
        --globals ""


jsduck:;@echo "Running jsduck to build documentation..."; \
        jsduck --config=jsduckConfig.json
