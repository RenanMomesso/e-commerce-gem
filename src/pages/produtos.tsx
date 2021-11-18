import Products, { ProductsTemplateProps } from 'templates/Products'
import filterItemsMock from 'components/ExploreSideBar/mock'
import productMock from 'components/ProductCardSlider/mock'

export default function CartPage(props: ProductsTemplateProps) {
  return <Products {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      products: productMock,
      filterItems: filterItemsMock
    }
  }
}
