import React from 'react'
import { connect } from 'react-redux'
import './Orders.css'
import { getCategories } from '../actions/categories';

class Orders extends React.Component {

  componentDidMount = () => {
    this.props.getCategories()
  }

  render() {
    const { categories, isFetching } = this.props

    return (
      <div>
        <h3>Page Orders</h3>
        {
          isFetching ? 
            <span>Loading...</span>
            : 
            <div className="Items">
              { categories.map(category => (
                  <span key={ category.id }>{ category.name }</span>
                ))}
            </div>
        }
      </div>
    )
  }
}

const mapDispatchToProps = { getCategories }

const mapStateToProps = ({ categories }) => ({
  categories: categories.items,
  isFetching: categories.isFetching
})

const ConnectOrders = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)

export default ConnectOrders