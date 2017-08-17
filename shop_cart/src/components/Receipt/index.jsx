import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import DeleteButton from 'material-ui/svg-icons/action/delete';
import './index.css';
import { deleteFruit } from '../../store/actions';

const styles = {
  hover: {
    cursor: 'pointer'
  }
}
class Receipt extends Component {

  remove = (product) => {
    const removeAction = deleteFruit(product);
    this.props.dispatch(removeAction);
  }

  render() {
    const { products, total } = this.props;
    return (
      <div>
        <Table>
          <TableHeader displayRowCheckbox={false}
            adjustForCheckbox={false}
            displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Price per unit</TableHeaderColumn>
              <TableHeaderColumn>Discount</TableHeaderColumn>
              <TableHeaderColumn>Quantity</TableHeaderColumn>
              <TableHeaderColumn>Final Price</TableHeaderColumn>
              <TableHeaderColumn>Delete Product</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {
              products.map((product, index) => {
                return <TableRow key={index}>
                  <TableRowColumn>{product.name}</TableRowColumn>
                  <TableRowColumn>{product.price}</TableRowColumn>
                  <TableRowColumn>{product.discount && product.discount.text}</TableRowColumn>
                  <TableRowColumn>{product.quantity}</TableRowColumn>
                  <TableRowColumn>{product.finalPrice}</TableRowColumn>
                  <TableRowColumn>{<DeleteButton color="red" onClick={() => this.remove(product)} style={styles.hover} />}</TableRowColumn>
                </TableRow>
              })
            }
          </TableBody>
        </Table>
        <div className="price">
          <p> Total Price: {total.toFixed(2)}</p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  products: Object.values(state.products),
  total: state.products.reduce((acc, val) => acc + val.finalPrice, 0)
})
export default connect(mapStateToProps)(Receipt);
