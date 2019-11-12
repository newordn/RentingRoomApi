const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {getUserId,APP_SECRET} = require('../helpers/auth')
async function signup(parent, args,context,info)
{
    const password = await bcrypt.hash(args.password,10)
    const user = await context.prisma.createUser({...args,password})
    const token = jwt.sign({userId: user.id},APP_SECRET)
    return {token,user}
}
async function login(parent,args,context,info)
{
    const user = await context.prisma.user({email: args.email})
    if(!user){
        throw new Error('No such user found')
    }
    const valid = await bcrypt.compare(args.password,user.password)
    if(!valid)
    {
        throw new Error('Invalid password')
    }
    const token = jwt.sign({userId: user.id},APP_SECRET)
    return {token,user}
}
async function createChamber(parent,args,context,info)
{
    const userId = getUserId(context)
    const {localisation,dimension,quartier,description,prix,nombreMois,aDoucheInterne,aCaution,aPlafond,estCarreler,estLibre} = args
    const chamber = await context.prisma.createChamber({
        localisation,
        dimension,
        quartier,
        description,
        prix,
        nombreMois,
        aDoucheInterne,
        aCaution,
        aPlafond,
        estCarreler,
        users: {connect: [{id:userId}]}
    })
   


    return chamber
}
    module.exports={
        signup,
        login,
        createChamber
    }