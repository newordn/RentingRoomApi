function users(parent,args,context){
    return context.prisma.chamber({id:parent.id}).users()
}

module.exports={
    users
}