# Nest GraphQL Gateway

### yarn start:dev posts

```graphql
# Queries and mutation
# get single post
query GetPost($postId: String!) {
  post(id: $postId) {
    id
    body
    authorId
  }
}
{
  "postId": "002"
}


# get all posts
query{
  posts{
    id
    body
    authorId
  }
}

```

### yarn start:dev users

```graphql
# Queries and mutation
```
