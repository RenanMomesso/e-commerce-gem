import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ProductCard, { ProductCardProps } from 'components/ProductCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import * as S from './styles'

export type ProductsTemplateProps = {
  products?: ProductCardProps[]
  filterItems: ItemProps[]
}

const Products = ({ products = [], filterItems }: ProductsTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSideBar
        items={filterItems}
        onFilter={() => console.log('filter')}
      />

      <section>
        <Grid>
          {products?.map((item) => (
            <ProductCard key={item.title} {...item} />
          ))}
        </Grid>

        <S.ShowMore role="button" onClick={() => console.log('show more')}>
          <p>Show more</p>
          <ArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default Products
