import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div className='container col-md-10 col-md-offset-1'>
            <h4>Welcome to T-Mobile</h4>
            <h6>We're excited to meet you</h6>
            <img src='/assets/imgs/welcome_img.png' />
         </div>
      );
   }
}

export default App;
