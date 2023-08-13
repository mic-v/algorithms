const config = {
    verbose: true,
    reporters: [
      'default',
      ['jest-junit', {outputDirectory: 'reports', outputName: 'report.xml'}],
    ],
};
  
  module.exports = config;