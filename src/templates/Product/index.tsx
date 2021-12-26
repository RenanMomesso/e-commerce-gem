import Gallery, { GalleryImageProps } from 'components/Gallery'
import Base from 'templates/Base'
import * as S from './styles'
import ProductInfo, { ProductInfoProps } from 'components/ProductInfo'
import TextContent, { TextContentProps } from 'components/TextContent'
import ProductDetails, { ProductDetailsProps } from 'components/ProductDetails'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlights'
import ShowCase from 'components/ShowCase'
import { Container } from 'components/Container'

export type ProductTemplateProps = {
  productInfo: ProductInfoProps
  gallery?: GalleryImageProps[]
  description: TextContentProps
  details: ProductDetailsProps
  upcomingProducts: ProductCardProps[]
  upcomingHighlight: HighlightProps
  RecommendedProducts: ProductCardProps[]
  cover: string
  recommendedTitle?: string
  upcomingHighlightTitle?: string
}

const Product = ({
  productInfo,
  gallery,
  description,
  details,
  RecommendedProducts,
  upcomingHighlight,
  upcomingProducts,
  cover,
  recommendedTitle = 'Talvez você goste',
  upcomingHighlightTitle = 'lançamentos'
}: ProductTemplateProps) => {
  return (
    <Base>
      <S.BrandCrumbWrapper>
        <S.BrandCrumbText>
          <p>asdasdasdasdasdsa</p>
          <p>asdasdasdasdasdsa</p>
        </S.BrandCrumbText>
      </S.BrandCrumbWrapper>
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
          title={upcomingHighlightTitle}
          highlight={upcomingHighlight}
          products={upcomingProducts}
        />

        <ShowCase title={recommendedTitle} products={RecommendedProducts} />
      </S.Main>
    </Base>
  )
}

export default Product
