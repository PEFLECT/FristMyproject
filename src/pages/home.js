import React from 'react' 8.5K (gzipped: 3.4K)
import {Link} from 'react-router-dom' 25K (gzipped: 8.3K)

class Home extends React.Component{

  render(){
    return(
      <div>Home Page</div>
      <Link to={'/login'}>Login</Link>
    )
  }
}
export default Home
