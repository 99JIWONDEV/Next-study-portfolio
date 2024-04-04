import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component }) {

  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장
  })

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  )
}