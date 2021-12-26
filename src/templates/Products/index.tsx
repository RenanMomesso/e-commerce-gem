import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ProductCard, { ProductCardProps } from 'components/ProductCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import * as S from './styles'
import { useQuery } from '@apollo/client'
import { QUERY_GAMES, useQueryProducts } from 'graphql/queries/products'
import { products, productsVariables } from 'graphql/generated/products'

export type ProductsTemplateProps = {
  products?: ProductCardProps[]
  filterItems: ItemProps[]
}

const ProductsTemplate = ({ filterItems }: ProductsTemplateProps) => {
  const { data, loading, fetchMore } = useQueryProducts({
    variables: { limit: 5, start: 0 }
  })
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 1, start: data?.products.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSideBar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {data &&
                data?.products.map((item) => (
                  <ProductCard
                    key={item.name}
                    {...item}
                    title={item.name}
                    img={`http://localhost:1337${item.cover?.url}`}
                  />
                ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default ProductsTemplate
