import React from 'react';
import Header from '../Header';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const styles = {
  root: {
    width: 500,
    margin: 'auto'
  }
}
const Bill = ({ products, total }) => (

  <div style={styles.root}>
    < Header />
    {
      products.map((product, index) => {
        return (
          <List key={index}>
            <ListItem primaryText={product.name}
              secondaryText={
                <p>
                  <span>{product.quantity}</span>  X  ( <span>{product.price}<b> CH</b></span> /
              {product.name})
              <b> = </b> <span>{product.finalPrice}<b> CH</b></span>
                </p>
              }
              secondaryTextLines={2} />
            <Divider />
          </List>
        )
      })
    }
    <Divider />
    <div>
      <p>Your total:  {total.toFixed(2)}<b> CH</b></p>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  products: Object.values(state.products),
  total: state.products.reduce((acc, val) => acc + val.finalPrice, 0)
})
export default connect(mapStateToProps)(withRouter(Bill));
