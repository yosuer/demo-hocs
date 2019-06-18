import React from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories';

const withCategories = WrapperComponent => {

  class WithCategories extends React.Component {
    componentDidMount = () => {
      this.props.getCategories()
    }

    render() {
      return <WrapperComponent { ...this.props } />
    }
  }

  const mapDispatchToProps = { getCategories }

  const mapStateToProps = ({ categories }) => ({
    categories: categories.items,
    isFetching: categories.isFetching
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithCategories)
}

export default withCategories