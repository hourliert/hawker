#!/usr/bin/env node

;(function () { // wrapper in case we're in module_context mode
    process.title = "hawker";

    var argv = require('yargs')
            .usage('Usage: $0 <command> [options]')
            .command('init', 'Not yet implemented')
            .command('launch', 'Bootstrap your docker containers')
            .demand(1)

            .alias('f', 'file')
            .nargs('f', 1)
            .describe('f', 'Load a configuration file')

            .alias('u', 'url')
            .nargs('u', 1)
            .describe('u', 'Load a configuration file from an url')

            .help('h')
            .alias('h', 'help')

            .count('verbose')
            .alias('v', 'verbose')

            .check(function(argv) {
                if (argv._[0] !== 'init' &&
                    argv._[0] !== 'launch') {
                    throw 'This command is unsupported.';
                }
                return true;
            })
            .check(function(argv) {
                if (argv._[0] === 'launch' && !argv.u && !argv.f) {
                    throw 'You should provide -u or -f option.';
                }

                return true;
            })
            .check(function(argv) {
                if (argv._[0] === 'launch' && argv.u && argv.f) {
                    throw 'You should provide -u or -f option. Not both.';
                }

                return true;
            })
            .example('$0 launch -f foo.js', 'launch hawker using the given file as configuration')
            .example('$0 launch -u http://my.script.json', 'launch hawker using the given url as configuration')
            .epilog('Cnode 2015')
            .version(function() {
                return require('../package').version;
            })
            .argv,
        logger = require('../build/js/utils/logger').default,
        hawker = require('../build/js/hawker').default;

    logger.setLevel(argv.verbose);

    switch(argv._[0]) {
        case 'init':
            logger.debug('Init Command');
            logger.warn('This command is not implemented yet.');
            break;
        case 'launch':
            logger.debug('Launch Command');

            if (argv.f) {
                logger.debug('Launch from file');
                hawker.launchFromFile(argv.f);
            }
            if (argv.u) {
                logger.debug('Launch from url');
                hawker.launchFromUrl(argv.u);
            }
            break;
        default:
            console.warn('Insupported command');
    }
})();