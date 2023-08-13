const config = {
    verbose: true,
    reporters: [
      'default',
      ['jest-junit', {outputDirectory: 'reports', outputName: 'report.pdf'}],
    ],
};
  
  module.exports = config;