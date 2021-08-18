const wsLink = new WebSocketLink({
    uri: "https://free-turtle-47.hasura.app/v1/graphql",
    options: {
        reconnect: true,
        lazy: true
    },
    connectionParams: () => {
        return { headers: getHeaders() };
    },
});

const httpLink = new HttpLink({
    uri: "https://free-turtle-47.hasura.app/v1/graphql",
    headers: getHeaders()
});