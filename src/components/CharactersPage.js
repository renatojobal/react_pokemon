import React from 'react';
import App from './TestModel'



  //  **No borrar el link**
  //  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7a0963902eb142154809d5cc40c93339&hash=c229dbb1995825313cb754f16b2ca602"


  class CharactersPage extends React.Component { 

    render(){
      return(
        <div>
          <App/>
        </div>
      )
    }
}

export default CharactersPage;