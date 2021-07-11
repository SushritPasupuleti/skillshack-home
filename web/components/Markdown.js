import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import React from 'react'
import styles from './Markdown.module.css';
import DOMPurify from 'isomorphic-dompurify';

export default function MarkdownPreview(props) {
    const md = new MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                        hljs.highlight(lang, str, true).value +
                        '</code></pre>';
                } catch (err) { console.log(err) }
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        },
        html: true,
        linkify: true,
    });

    return (
        <div className={styles.markdownParent}>
            <div
                className={styles.markdownDiv}
                // style={{maxWidth: '275'}} 
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(md.render(props.input), { ADD_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] }) }}>
            </div>
        </div>
    )
}