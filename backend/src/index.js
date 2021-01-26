require('dotenv').config();
const app = require('./server');
require('./database');


app.listen(app.get('port'), ()=>{
    console.log('servidor corriendo en el puerto', app.get('port'));
});
/* ;

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
); */