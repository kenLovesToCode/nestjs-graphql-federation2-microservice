# Nest GraphQL Gateway

## Steps to recreate

```bash
# create new project
$ nest g project gateway

# convert to monorepo
$ nest g app (users, posts)

$ nest g resource (users, posts)

$ yarn add @apollo/gateway @apollo/subgraph @nestjs/apollo @nestjs/graphql graphql apollo-server-express

# create global gateway/auth.context for authorization

```

## Running the app (users - 4300)

```bash
$ yarn start:dev users

# creating user in localhost:4300/graphql
mutation{
  createUser(createUserInput:{id:"123", email:"test1@email.com", password:"test1"}){
    id
    email
    password
  }
}

# getting user in localhost:4300/graphql
query{
  user(id:"123"){
    id
    email
    password
  }
}


```

## Running the app (posts - 4301)

```bash
$ yarn start:dev posts

# creating post in localhost:4200/graphql
mutation{
  createPost(createPostInput:{authorId:"123", id:"234", body:"body of post"}){
    id
    authorId
    body
  }
}

# getting post in localhost:4200/graphql
query{
  post(id:"234"){
    id
    authorId
    body
  }
}

# getting all posts
query{
  posts{
    id
    authorId
    body
  }
}

```

## Running the app (gateway - 4302)

```bash
# setup federation @app.module.ts
# run the gateway
$ yarn start:dev

# can run any query and mutation from posts and users

# 1. to connect, add @Directive on users/user.entity
# 2. add ResolveReference at users/user.resolver
# 3. create posts/user.entity
# 4. add user field on posts/post.entity
# 5. add @ResolveField() user on posts/posts.resolver
# 6. create posts/users.resolver

# get users with posts
query{
  users{
    id
    email
    password
    posts{
      id
      authorId
      body
    }
  }
}


# get posts with users
query{
  posts{
    id
    authorId
    body
    user{
      id
      email
      password
    }
  }
}
```
