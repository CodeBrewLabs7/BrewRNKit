import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CustomTextInput from './CustomTextInput';

describe('CustomTextInput', () => {
  test('renders correctly with placeholder', () => {
    const { getByPlaceholderText } = render(<CustomTextInput placeholder="Enter Text" />);
    const input = getByPlaceholderText('Enter Text');
    expect(input).toBeTruthy();
  });

  test('handles text change', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(<CustomTextInput placeholder="Enter Text" onChangeText={onChangeTextMock} />);
    const input = getByPlaceholderText('Enter Text');
    fireEvent.changeText(input, 'Test Input');
    expect(onChangeTextMock).toHaveBeenCalledWith('Test Input');
  });

  test('passes additional props to TextInput', () => {
    const { getByTestId } = render(<CustomTextInput placeholder="Enter Text" testID="customTextInput" />);
    const input = getByTestId('customTextInput');
    expect(input.props.placeholder).toBe('Enter Text');
  });
});
