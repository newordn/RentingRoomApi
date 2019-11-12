function chambers(parent,args,context){
    return context.prisma.user({id:parent.id}).chambers()
}

module.exports={
    chambers
}