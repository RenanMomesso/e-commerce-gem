import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import { products, productsVariables } from 'graphql/generated/products'
import {
  QueryBySlug,
  QueryBySlugVariables
} from 'graphql/generated/QueryBySlug'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/products'

import Product, { ProductTemplateProps } from 'templates/Product'
import galleryMock from 'components/Gallery/mock'
import productCardMock from 'components/ProductCardSlider/mock'
import HighlightMock from 'components/Highlights/mock'
import { GetStaticProps } from 'next'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { highlightMapper, productsMapper } from 'utils/mappers'
import { QueryUpcomming } from 'graphql/generated/QueryUpcomming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'

const apolloClient = initializeApollo()

export default function ProductPage(props: ProductTemplateProps) {
  const router = useRouter()

  //if route hasn't been generated
  //you can show a loading
  // or anything else, like an skeleton

  if (router.isFallback) return null

  return <Product {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<products, productsVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9, start: 0 }
  })

  const paths = data.products.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('slug product', params)
  const { data } = await apolloClient.query<QueryBySlug, QueryBySlugVariables>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })
  console.log('data', data)

  if (!data.products.length) {
    return { notFound: true }
  }

  const product = data.products[0]

  const { data: recommendData } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  const { data: upcomming } = await apolloClient.query<QueryUpcomming>({
    query: QUERY_UPCOMING
  })

  return {
    props: {
      revalidate: 60,
      upcomingHighlightTitle: upcomming.showcase?.upcomingProducts?.title,
      upcomingProducts: productsMapper(upcomming.upcomingProducts),
      recommendedTitle: recommendData.recommended.section?.title,
      upcomingHighlight: highlightMapper(
        recommendData.recommended.section?.highlight[0]
      ),
      RecommendedProducts: productsMapper(
        recommendData.recommended.section?.products
      ),
      details: {
        categoria: product.category?.name || null,
        releaseDate: '2020-12-10T23:00:00',
        publisher: 'CD PROJEKT RED',
        rating: 'BR18',
        genres: ['Action', 'Role-playing']
      },
      description: {
        content: product.description
      },
      gallery: product.gallery.map((galery) => ({
        src: `http://localhost:1337${galery.src}`,
        label: galery.label
      })),
      productInfo: {
        title: product.name,
        price: product.price,
        description: product.short_description
      },
      cover: `http://localhost:1337${product.cover?.src}`
    }
  }
}
