/*
 * @Date: 2024-01-17 22:28:27
 * @Description: Modify here please
 */
import type MarkdownIt from "markdown-it";

export default (md: MarkdownIt): void => {
  md.renderer.rules.text = (tokens, idx) => {
    const token = tokens[idx];
    const tagRegExp = /^\^\(([^)]*)\)/;
    console.log(tagRegExp.test(token.content), token.content);
    if (tagRegExp.test(token.content)) {
      return `<span class="type-tag">${token.content.slice(5)}</span>`;
    } else {
      return token.content;
    }
  };
};
