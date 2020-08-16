type Size = {
  mobileS: string
  mobileM: string
  mobileL: string
  tablet: string
  laptop: string
  laptopL: string
  desktop: string
}

type mq = {
  mobileS: (style: TemplateStringsArray) => any
  mobileM: (style: TemplateStringsArray) => any
  mobileL: (style: TemplateStringsArray) => any
  tablet: (style: TemplateStringsArray) => any
  laptop: (style: TemplateStringsArray) => any
  laptopL: (style: TemplateStringsArray) => any
  desktop: (style: TemplateStringsArray) => any
}

const size: Size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = Object.keys(size).reduce((acc, key) => {
  acc[key] = style => `
    @media (min-width: ${size[key]}) {
      ${style};
    }
  `
  return acc
}, {} as mq)
