// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    junitReporter: {
      outputDir: 'artifacts/tests',
      outputFile: 'junit-test-results.xml',
      useBrowserName: false,
    },
    coverageIstanbulReporter: {
      // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/73c25ce79f91010d1ff073aa6ff3fd01114f90db/packages/istanbul-reports/lib
      reports: ['html', 'lcovonly', 'text-summary', 'cobertura'],
 
      // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
      dir: path.join(__dirname, 'artifacts/coverage'),
       // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true, 
      // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbuljs/blob/73c25ce79f91010d1ff073aa6ff3fd01114f90db/packages/istanbul-reports/lib/html/index.js#L257-L261
        'text-summary': {
          file: 'text-summary.txt'
        }
      },
 
      // enforce percentage thresholds
      // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
      thresholds: {
        emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
        // thresholds for all files
        global: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100
        },
        // thresholds per file
        each: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100,
          overrides: {
            'baz/component/**/*.js': {
              statements: 98
            }
          }
        }
      },
 
      verbose: true // output config used by istanbul for debugging
    },
    reporters: ['progress', 'kjhtml', 'junit', 'coverage-istanbul'],
    browsers: ['Chrome', 'Chrome_no_sandbox'],
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--single-run']
      }
    },
    restartOnFileChange: true
  });
};
