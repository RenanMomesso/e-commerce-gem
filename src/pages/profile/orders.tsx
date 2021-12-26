import OrderList, { OrdersListProps } from 'components/OrderList'
import OrdersMock from 'components/OrderList/mock'
import Profile from 'templates/Profile'

export default function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrderList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: OrdersMock
    }
  }
}
