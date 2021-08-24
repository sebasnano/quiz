import app from './app'
import './datebase'


app.listen( app.get('port'), () => {
    console.log('server on port', app.get('port'));    
})
