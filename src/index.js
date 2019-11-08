const {GraphQLServer} = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const {prisma} = require('./prisma/generated/prisma-client')

const resolvers = {
Query,
Mutation
}


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {prisma}
})

server.start(()=>console.log(`Server is running on localhost:4000`))