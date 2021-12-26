import Products, { ProductsTemplateProps } from 'templates/Products'
import filterItemsMock from 'components/ExploreSideBar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/products'
import {
  products,
  productsVariables,
  products_products
} from 'graphql/generated/products'
import FormatPrice from 'utils/format-price'
import { productsMapper } from 'utils/mappers'

export default function CartPage(props: ProductsTemplateProps) {
  return <Products {...props} />
}

//usar o getStaticProps pois como os produtos não são alterados a todo momento, nao adianta ficar fazendo requisição aoservidor pois pode ser mto custoso e pesado

//revalidate para retornar novamente as informações do servidor em tempo definido

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<products, productsVariables>({
    query: QUERY_GAMES,
    variables: { limit: 4, start: 0 }
  })
  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}

// id: '1',
// title: 'Anel Ouro Branco Ouro Amarelo e Ouro Rosé 4mm',
// slug: 'population-zero',
// category: 'Rockstar Games',
// img: 'https://images.vivara.com.br/Stores/Fotos/PU00016409-v1.png',
// price: 235,
// promotionalPrice: 215
