import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddToCard from 'material-ui/svg-icons/action/add-shopping-cart';
import { buyFruit } from '../../store/actions';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)'
  },
  subhead: {
    color: '#42c5f4',
    fontSize: '18px'
  }
};

class ProductsList extends Component {

  buy = (product) => {
    const buyAction = buyFruit(product);
    this.props.dispatch(buyAction);
  }

  render() {
    const { fruits } = this.props;
    return (
      <div style={styles.root}>
        <Subheader style={styles.subhead}>Scroll right for more items</Subheader>
        <GridList style={styles.gridList} cols={2.2}>
          {fruits.map((fruit) => (
            <GridTile key={fruit.img}
              title={fruit.name}
              subtitle={<span>Price <b>{fruit.price}</b> each</span>}
              actionIcon={< IconButton >
                <AddToCard color="yellow" />
              </IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              onClick={() => this.buy(fruit)}>
              <img src={fruit.img} alt='' />
            </GridTile>
          ))}
        </GridList>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  fruits: Object.values(state.fruitsItems)
})
export default connect(mapStateToProps)(ProductsList);
