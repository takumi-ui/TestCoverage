// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

let project = process.env['npm_config_project'];
const fromCI = process.env['npm_config_ci'];
if (project == null) {
  project = process.argv[3];
  console.log(project);
}

console.log('Args: ', process.argv);
let reporters = [
  { type: 'text-summary' }
]

if (!fromCI) {
  reporters = [
    { type: 'html' },
    {type: 'text-summary'}
  ]
}

console.log('FromCI: ', fromCI);

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
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
    coverageReporter: {
      dir: require('path').join(__dirname, `./coverage/${project}`),
      subdir: '.',
      reporters: [
        { type: 'text-summary' }
      ],
      includeAllSources: true,
      file: 'coverage.txt'
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['Chrome'],
    restartOnFileChange: true
  });
};
