const {GraphQLServer} = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const {prisma} = require('./prisma/generated/prisma-client')
const User = require('./resolvers/User')
const Chamber = require('./resolvers/Chamber')
const resolvers = {
Query,
Mutation,
User,
Chamber
}


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request=> ({...request,prisma})
})

server.start(()=>console.log(`Server is running on localhost:4000`))