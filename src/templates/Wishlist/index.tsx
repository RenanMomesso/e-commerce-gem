import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlights'
import ProductCard, { ProductCardProps } from 'components/ProductCard'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'

export type WishlistTemplateProps = {
  products?: ProductCardProps[]
  recommendedProducts: ProductCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  products = [],
  recommendedHighlight,
  recommendedProducts
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="primary">
        Favoritos
      </Heading>

      {products?.length >= 1 ? (
        <Grid>
          {products?.map((product, index) => {
            return <ProductCard key={`wishlist-${index}`} {...product} />
          })}
        </Grid>
      ) : (
        <Empty
          title="Nenhum produto cadastrado como favoritos"
          description="Volta para a home e favorite seus produtos"
          hasLink
        />
      )}
      <Divider />
    </Container>

    <ShowCase
      title="Talvez você possa gostar"
      products={recommendedProducts}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
