
    function chambers(parent,args,context){
        return context.prisma.chambers()
    }
    
    function users(parent,args,context){
        return context.prisma.users()
    }
    module.exports={
        chambers,users
    }