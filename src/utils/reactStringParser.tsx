import { ReactElement } from 'react';

type Key = string | number | null;
type Node = ReactElement | string;
type Renderer = (match: string, key: Key) => Node;

export class ReactStringParser {
  private nodes: Node[];

  constructor(text: string) {
    this.nodes = [text];
  }

  getNodes() {
    return this.nodes;
  }

  parse(splitter: string | RegExp, renderer: Renderer): this {
    const regExpSplitter = splitter instanceof RegExp ? splitter : new RegExp(`(${splitter})`);
    this.nodes = ReactStringParser.parseNodes(this.nodes, regExpSplitter, renderer, '');
    return this;
  }

  private static parseNodes(nodes: Node[], splitter: RegExp, renderer: Renderer, key: Key): Node[] {
    return nodes.map((n, idx) => this.parseNode(n, splitter, renderer, `${key}-${idx}`)).flat();
  }

  private static parseNode(
    node: Node,
    splitter: RegExp,
    renderer: Renderer,
    key: Key
  ): Node[] | Node {
    return typeof node === 'string'
      ? this.parseTextNode(node, splitter, renderer, key)
      : this.parseElementNode(node, splitter, renderer, key);
  }

  private static parseTextNode(
    text: string,
    splitter: RegExp,
    renderer: Renderer,
    key: Key
  ): Node[] {
    const result = text.split(splitter);
    if (result.length < 2) return result;
    return result.map((n, idx) => (idx % 2 ? renderer(n, `${key}-${idx}`) : n));
  }

  private static parseElementNode(
    element: ReactElement,
    splitter: RegExp,
    renderer: Renderer,
    key: Key
  ): ReactElement {
    const { children }: { children: Node | Node[] } = element.props;
    if (!children) return element;

    return {
      ...element,
      props: {
        ...element.props,
        children: Array.isArray(children)
          ? this.parseNodes(children, splitter, renderer, key)
          : this.parseNode(children, splitter, renderer, key),
      },
    };
  }
}
