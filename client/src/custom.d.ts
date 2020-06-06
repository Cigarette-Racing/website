declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<React.SVGAttributes<
    SVGElement
  >>
  export default string
}

declare module '*.jpeg' {
  export default string
}
