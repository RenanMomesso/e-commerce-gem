import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'
import { useMemo } from 'react'

let apollotClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            products: concatPagination(['where', 'sort'])
          }
        }
      }
    })
  })
}

export function initializeApollo(initialState = null) {
  //verifica se já existe uma instância, para ñ criar outra
  const apolloClientGlobal = apollotClient ?? createApolloClient()

  //recuperando dados do cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  //sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  apollotClient = apollotClient ?? apolloClientGlobal

  return apollotClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
