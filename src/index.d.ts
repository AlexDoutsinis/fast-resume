declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.ttf' {
  const content: any
  export default content
}

declare module '*.otf' {
  const content: any
  export default content
}

declare module '@react-pdf/styled-components'
