import React from 'react';
import renderer from 'react-test-renderer';
// import { TouchableOpacity } from 'react-native';
import GenderDropdown from '../src/components/atoms/Dropdown'

describe('GenderDropdown', () => {
  it('renders correctly when closed', () => {
    const tree = renderer.create(<GenderDropdown />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when opened', () => {
    const tree = renderer.create(<GenderDropdown />);
    tree.root.findByType('TouchableOpacity').props.onPress();
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders the selected gender', () => {
    const tree = renderer.create(<GenderDropdown />);
    tree.root.findByType('TouchableOpacity').props.onPress();
    tree.root.findAllByType('TouchableOpacity')[0].props.onPress();
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
