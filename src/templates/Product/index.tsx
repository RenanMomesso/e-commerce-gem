import Gallery, { GalleryImageProps } from 'components/Gallery'
import Base from 'templates/Base'
import * as S from './styles'
import ProductInfo, { ProductInfoProps } from 'components/ProductInfo'
import TextContent, { TextContentProps } from 'components/TextContent'
import ProductDetails, { ProductDetailsProps } from 'components/ProductDetails'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlights'
import ShowCase from 'components/ShowCase'

export type ProductTemplateProps = {
  productInfo: ProductInfoProps
  gallery?: GalleryImageProps[]
  description: TextContentProps
  details: ProductDetailsProps
  upcomingProducts: ProductCardProps[]
  upcomingHighlight: HighlightProps
  RecommendedProducts: ProductCardProps[]
}

const Product = ({
  productInfo,
  gallery,
  description,
  details,
  RecommendedProducts,
  upcomingHighlight,
  upcomingProducts
}: ProductTemplateProps) => {
  return (
    <Base>
      <S.Main>
        <S.ProductGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.ProductGallery>

        <S.ProductInfo>
          {/* <Gallery items={MockItems} /> */}
          <ProductInfo {...productInfo} />
        </S.ProductInfo>

        <S.SectionDescription>
          {!!description && (
            <TextContent
              content={description.content}
              title={description.title}
            />
          )}
        </S.SectionDescription>

        <S.SectionProductDetails>
          <ProductDetails {...details} />
        </S.SectionProductDetails>

        <ShowCase
          title="Lançamentos"
          highlight={upcomingHighlight}
          products={upcomingProducts}
        />

        <ShowCase
          title="Talvez você possa gostar"
          products={RecommendedProducts}
        />
      </S.Main>
    </Base>
  )
}

export default Product
