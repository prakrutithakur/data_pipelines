import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  themeReducer,
  rtlReducer,
  customizerReducer,
  sidebarReducer,
  roundBordersReducer,
  blocksShadowsReducer,

  //Form Type Reducer
  formTypeReducer,
  sendConfigReducer,
} from '@/redux/reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  theme: themeReducer,
  rtl: rtlReducer,
  border: roundBordersReducer,
  shadow: blocksShadowsReducer,
  customizer: customizerReducer,
  sidebar: sidebarReducer,
  //Form Type Reducer
  formTypeReducer: formTypeReducer,
  sendConfigReducer: sendConfigReducer,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
/* eslint-enable */
export default store;
