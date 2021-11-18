/* eslint-disable @next/next/no-img-element */
import * as S from './styles'
import { Download } from '@styled-icons/boxicons-solid/Download'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type ProductItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const ProductItem = ({
  img,
  price,
  title,
  downloadLink = '/',
  paymentInfo
}: ProductItemProps) => (
  <S.Wrapper>
    <S.ProductContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        {!!downloadLink && (
          <S.DownloadLink
            href={downloadLink}
            target="_blank"
            aria-label={`${title}`}
          >
            <Download size={22} />
          </S.DownloadLink>
        )}
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.ProductContent>

    {!!paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          {!!paymentInfo.img && !!paymentInfo.flag && (
            <img src={paymentInfo.img} alt={paymentInfo.flag} />
          )}
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default ProductItem
