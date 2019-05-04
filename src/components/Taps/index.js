// import React from 'react'

// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const TapbasSimple =() =>{
//     return(

       
//         <Tabs
//           value={0}
//           indicatorColor="#1e90ff"
//           textColor="#2d3436"
//           variant='fullWidth'
//           style={{marginTop : 50}}
//         >
//           <Tab label="Fratured" />
//           <Tab label="Top" />
//           <Tab label="Topic" />
//         </Tabs>
      

//     )
// }
// export {
//     TapbasSimple
// }
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../../styles/main.css'

const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          style={{marginTop : 50}}
        >
             <Tab label="Fratured" />
             <Tab label="Top" />
             <Tab label="Topic" />
        </Tabs>
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};
const TapbasSimple =  withStyles(styles)(CenteredTabs);
export {
    TapbasSimple
}