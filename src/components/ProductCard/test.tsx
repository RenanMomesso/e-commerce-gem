import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/helper'

import ProductCard, { ProductCardProps } from '.'

const props: ProductCardProps = {
  title: 'Prata colar do sol',
  category: 'Prata colar do sol',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<ProductCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ProductCard {...props} />)

    // renderizar o title rendezirado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // renderizar o category
    expect(
      screen.getByRole('heading', { name: props.category })
    ).toBeInTheDocument()

    // renderizar o img renderizado
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // renderizar o price renderizado
    expect(screen.getByText(props.price)).toBeInTheDocument()

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()
  })

  it('should render price in the label', () => {
    renderWithTheme(<ProductCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through;'
    })
    // expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
    //preço nao tenha line-throguh
    //preco nao tenah cor cinza
    // preco tenha o background secundario
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<ProductCard {...props} promotionalPrice="15" />)

    const price = screen.getByText(props.price)
    expect(price).toHaveStyle({ textDecoration: 'line-through' })
    expect(screen.getByText(/15/i)).not.toHaveStyle({
      textDecoration: 'line-through',
      textColor: theme.colors.gray
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<ProductCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<ProductCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
  })

  it('should render a ribbon', () => {
    renderWithTheme(
      <ProductCard
        {...props}
        ribbon="20%"
        ribbonColor="secondary"
        ribbonSizes="small"
      />
    )
    const ribbon = screen.getByText(/20/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })
})
