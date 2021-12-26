import {
  QueryHome_banners,
  QueryHome_newProducts,
  QueryHome_sections_popularProducts_highlight
} from 'graphql/generated/QueryHome'

export const bannersMap = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon?.text || null,
      ribbonColor: banner.ribbon?.color || null,
      ribbonSizes: banner.ribbon?.size || null
    })
  }))
}

export const productsMapper = (
  product: QueryHome_newProducts[] | null | undefined
) => {
  return (
    product &&
    product.map((productItem) => ({
      title: productItem.name,
      slug: productItem.slug,
      category: productItem.category,
      img: `http://localhost:1337${productItem.cover?.url}`,
      price: productItem.price
    }))
  )
}

export const highlightMapper = (
  highlight: QueryHome_sections_popularProducts_highlight | null | undefined
) => {
  return (
    highlight && {
      title: highlight?.title,
      subtitle: highlight?.subtitle,
      buttonLink: highlight?.buttonLink,
      buttonLabel: highlight?.buttonLabel,
      backgroundImage: `http://localhost:1337${highlight?.background?.url}`,
      alignment: highlight?.alignment,
      floatImage: highlight.floatImage
    }
  )
}
