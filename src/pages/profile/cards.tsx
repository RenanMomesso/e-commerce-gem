import CardList, { CardListProps } from 'components/CardList'
import CardsMock from 'components/PaymentOptions/mock'
import Profile from 'templates/Profile'

export default function ProfileCards({ cards }: CardListProps) {
  return (
    <Profile>
      <CardList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: CardsMock
    }
  }
}
