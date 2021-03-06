// @flow
import * as React from 'react';
import {
  getByTestId,
  getByName,
  getByType,
  getByText,
  getByProps,
  getAllByName,
  getAllByType,
  getAllByText,
  getAllByProps,
} from './getByAPI';
import { logDeprecationWarning } from './errors';

export const queryByName = (instance: ReactTestInstance) => (
  name: string | React.ComponentType<*>
) => {
  logDeprecationWarning('queryByName', 'getByName');
  try {
    return getByName(instance)(name);
  } catch (error) {
    return null;
  }
};

export const queryByType = (instance: ReactTestInstance) => (
  type: React.ComponentType<*>
) => {
  try {
    return getByType(instance)(type);
  } catch (error) {
    return null;
  }
};

export const queryByText = (instance: ReactTestInstance) => (
  text: string | RegExp
) => {
  try {
    return getByText(instance)(text);
  } catch (error) {
    return null;
  }
};

export const queryByProps = (instance: ReactTestInstance) => (props: {
  [propName: string]: any,
}) => {
  try {
    return getByProps(instance)(props);
  } catch (error) {
    return null;
  }
};

export const queryByTestId = (instance: ReactTestInstance) => (
  testID: string
) => {
  try {
    return getByTestId(instance)(testID);
  } catch (error) {
    return null;
  }
};

export const queryAllByName = (instance: ReactTestInstance) => (
  name: string | React.ComponentType<*>
) => {
  logDeprecationWarning('queryAllByName', 'getAllByName');
  try {
    return getAllByName(instance)(name);
  } catch (error) {
    return [];
  }
};

export const queryAllByType = (instance: ReactTestInstance) => (
  type: React.ComponentType<*>
) => {
  try {
    return getAllByType(instance)(type);
  } catch (error) {
    return [];
  }
};

export const queryAllByText = (instance: ReactTestInstance) => (
  text: string | RegExp
) => {
  try {
    return getAllByText(instance)(text);
  } catch (error) {
    return [];
  }
};

export const queryAllByProps = (instance: ReactTestInstance) => (props: {
  [propName: string]: any,
}) => {
  try {
    return getAllByProps(instance)(props);
  } catch (error) {
    return [];
  }
};

export const queryByAPI = (instance: ReactTestInstance) => ({
  queryByTestId: queryByTestId(instance),
  queryByName: queryByName(instance),
  queryByType: queryByType(instance),
  queryByText: queryByText(instance),
  queryByProps: queryByProps(instance),
  queryAllByName: queryAllByName(instance),
  queryAllByType: queryAllByType(instance),
  queryAllByText: queryAllByText(instance),
  queryAllByProps: queryAllByProps(instance),
});
