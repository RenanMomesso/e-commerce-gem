import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import { bannersMap, highlightMapper, productsMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newProducts, upcomingProducts, onWished, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  console.log('new Products', newProducts)

  return {
    props: {
      revalidate: 60,
      initialApoloState: apolloClient.cache.extract(),
      banners: bannersMap(banners),
      newsProducts: productsMapper(newProducts),
      newsProductsTitle: sections!.newProducts?.title,
      mostPopularHighlights: highlightMapper(
        sections!.favoritesProducts?.highlight
      ),
      mostPopularProducts: productsMapper(onWished),
      mostPopularProductsTitle: sections!.popularProducts?.title,
      upcomingProducts: productsMapper(upcomingProducts),
      wishedProductsTitle: sections!.favoritesProducts?.title,
      upcomingProductsTitle: sections!.upcomingProducts?.title,
      upcomingHighlights: highlightMapper(sections!.newProducts?.highlight),
      upcomingMoreProducts: productsMapper(sections!.popularProducts!.products)
    }
  }
}
