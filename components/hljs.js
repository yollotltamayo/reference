var hljs = require('highlight.js/lib/core');
hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
hljs.registerLanguage('js', require('highlight.js/lib/languages/javascript'));
module.exports = hljs;



