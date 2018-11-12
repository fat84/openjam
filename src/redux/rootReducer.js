import { combineReducers } from 'redux';

import layout from './modules/layout';
import auth from './modules/auth';
import errors from './modules/error';
import pageExplore from './modules/page-explore';
import pageTrack from './modules/page-track';
import pageAlbum from './modules/page-album';
import profile from './modules/profile';
import post from './modules/post';
import github from './modules/github';
import artist from './modules/artist';
import album from './modules/album';
import label from './modules/label';
import track from './modules/track';
import player from './modules/player';
import playlist from './modules/playlist';

const reducers = {
  layout,
  auth,
  errors,
  pageExplore,
  pageTrack,
  pageAlbum,
  profile,
  post,
  github,
  artist,
  album,
  label,
  playlist,
  track,
  player,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
