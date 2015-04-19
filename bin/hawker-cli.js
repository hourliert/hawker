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
        LoaderType = require('../build/js/Hawker').LoaderType,
        hawker = new (require('../build/js/Hawker').Hawker)(argv.verbose),
        logger = hawker.getLogger();

    switch(argv._[0]) {
        case 'init':
            logger.debug('Init Command');
            logger.warn('This command is not implemented yet.');
            process.exit(0);
            break;
        case 'launch':
            logger.debug('Launch Command');

            if (argv.f) hawker.defineLoader(LoaderType.File);
            else if (argv.u) hawker.defineLoader(LoaderType.Url);

            hawker.launch(argv.f || argv.u);
            break;
        default:
            console.warn('Unsupported command');
            process.exit(0);
    }
})();