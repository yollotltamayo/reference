import namedCodeBlocks from 'markdown-it-named-code-blocks'
import hljs from '../components/hljs'
var tm = require('markdown-it-texmath');
let md = require('markdown-it')({
    breaks:       true,        // Convert '\n' in paragraphs into <br>
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre><code class="lang-${lang}">` +
                    hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                    '</code></pre>';
            } catch (__) {}
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    },
    html:false
})
    .use(require('markdown-it-multimd-table'))
    .use(namedCodeBlocks)
    .use(tm, { engine: require('katex'),
    delimiters:'dollars',
    katexOptions: { macros: {"\\RR": "\\mathbb{R}"} }
    });
//return md.render
    //}
//}
export default md
