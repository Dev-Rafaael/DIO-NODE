
async function connectionDatabase(name,password) {
    if(name === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log('Conectado');
        
    }else{
        console.log('Deu errado');
        
    }
}

export default connectionDatabase