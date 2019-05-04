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
        //   style={{marginTop : 0}}
        >
             <Tab style={{fontSize : 1}} label="Recomment" icon={<img width={18} height={18} src={process.env.PUBLIC_URL + '/assets/icons/sc_icon_tj.png'}/>}/>/>
             <Tab style={{fontSize : 1}} label="Collect" icon={<img width={18} height={18} src={process.env.PUBLIC_URL + '/assets/icons/sc_icon_sc.png'}/>}/>/>
             <Tab style={{fontSize : 1}} label="Rating" icon={<img width={18} height={18} src={process.env.PUBLIC_URL + '/assets/icons/sc_icon_pf.png'}/>}/>/>
             <Tab style={{fontSize : 1}} label="Completed" icon={<img width={18} height={18} src={process.env.PUBLIC_URL + '/assets/icons/sc_icon_wj.png'}/>}/>/>
             <Tab style={{fontSize : 1}} label="Popular" icon={<img width={18} height={18} src={process.env.PUBLIC_URL + '/assets/icons/sc_icon_rg.png'}/>}/>/>
        </Tabs>
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};
const Buttommenu =  withStyles(styles)(CenteredTabs);
export {
    Buttommenu
}