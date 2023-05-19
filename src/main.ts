import Reveal from "reveal.js";

// Plugins
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

// Styles
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./style.scss";

let deck = new Reveal({
  progress: true,
  plugins: [Markdown, RevealHighlight],
});

deck.initialize();
