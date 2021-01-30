const Stock = require('./../../models/Stock');

module.exports = {
    Query: {
        async getStocks(){
            try{
                const stocks = await Stock.find();
                return stocks
            }catch (err){
                throw new Error(err);
            }
        },
        async getCategoria(_,categoria){
            try{
                const categoria = await Stock.find({categoria});
                if(categoria){
                    return categoria;
                }else{
                    throw new Error('categoria no encontrada')
                }
            }catch(err){
                throw new Error(err);
            }
        },
        async getStock(_,{stockId}){
            try{
                const stock = await Stocks.findById(stockId);
                if(stock){
                    return stock;
                }else{
                    throw new Error('este producto ya no se encuentra disponible')
                }
            }catch(err){
                throw new Error(err);
            }
        },
        async getCategorias(){
        },
    },
    Mutation: {
        async createStock(_, {body}, context){
            
        },
        async updateStock(){

        },
        async deleteStock(){

        }
    }
}