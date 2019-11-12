
    function chambers(parent,args,context){
        return context.prisma.chambers()
    }
    function chamber(parent,args,context){
        return context.prisma.chamber({id:args.id})
    }
    function users(parent,args,context){
        return context.prisma.users()
    }
    module.exports={
        chambers,users,chamber
    }