import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {setFilter} from '../actions';
class Link extends Component {
  render() {
    console.log(this.props, 'link');
    let {active, filter, onClick} = this.props;
    return (
      <TouchableOpacity
        style={{
          marginLeft: 4,
          height: 40,
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onClick}>
        <Text style={{fontSize: 10, color: active ? 'black' : '#cccccc'}}>
          {filter}
        </Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visiFilter,
  filterText: ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.filter)),
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

const Filters = () => {
  return (
    <>
      <FilterLink filter={'SHOW_ALL'} />
      <FilterLink filter={'SHOW_COMPLETED'} />
      <FilterLink filter={'SHOW_ACTIVE'} />
    </>
  );
};

export default Filters;
