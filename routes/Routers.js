var dataItem =require( '../data-Items')
const Routers = (fastify,Options,done) =>
{
    fastify.get('/getItems',(request,result)=>{
        result.code(200).send(dataItem);
    })
    fastify.post('/addItem',(request,result)=>{
        const {id,name}=request.body;
        dataItem.push({"id":id,"name":name})
        result.code(201).send(dataItem);
    })
    fastify.delete('/removeItem',(request,result)=>{
        dataItem.shift();
        result.code(201).send(dataItem);
    })
    done();
}
module.exports=Routers;
