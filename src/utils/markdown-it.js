import MarkdownIt from 'markdown-it';

const handlePlugin = (plugin) => plugin.default || plugin;
const md = new MarkdownIt('default', {
  html: true,
  javascript: true,
  css: true,
  bash: true,
  linkify: true,
  xhtmlOut: true,
  breaks: true,
  typographer: true,
})

export default md; 
