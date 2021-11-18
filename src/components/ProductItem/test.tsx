import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import ProductItem, { PaymentInfoProps } from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Product Colar',
  price: 'R$ 215,00'
}

describe('<ProductItem />', () => {
  it('should render the default itens', () => {
    renderWithTheme(<ProductItem {...props} />)

    expect(screen.getByRole('img', { name: 'Product Colar' })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByText('Product Colar')).toBeInTheDocument()
    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://linkitem'

    renderWithTheme(<ProductItem {...props} downloadLink={downloadLink} />)

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      downloadLink
    )
  })

  it('should render payment info', () => {
    const paymentInfo: PaymentInfoProps = {
      flag: 'mastercard',
      img: 'mastercard',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/02/2020 at 20:32'
    }

    renderWithTheme(<ProductItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
