import expect from 'expect';
import * as actions from './actions';
import { actionNames } from '../util/constants';

describe('jPlayer actions', () => {
  const id = 'jPlayer-1';

  it('should create an action to set the jPlayer defaultOptions', () => {
    const key = 'verticalVolume';
    const value = true;
    const expectedAction = {
      type: actionNames.SET_OPTION,
      key,
      value,
      id,
    };

    expect(actions.setOption(key, value, id)).toEqual(expectedAction);
  });

  it('should create an action to set the media', () => {
    const media = {
      mp3: 'test',
      poster: 'test-poster',
    };
    const expectedAction = {
      type: actionNames.SET_MEDIA,
      media,
      id,
    };

    expect(actions.setMedia(media, id)).toEqual(expectedAction);
  });

  it('should create an action to clear the media', () => {
    const expectedAction = {
      type: actionNames.CLEAR_MEDIA,
      id,
    };

    expect(actions.clearMedia(id)).toEqual(expectedAction);
  });

  it('should create an action to play the media', () => {
    const time = 30;
    const expectedAction = {
      type: actionNames.PLAY,
      time,
      id,
    };

    expect(actions.play(time, id)).toEqual(expectedAction);
  });

  it('should create an action to pause the media', () => {
    const time = 30;
    const expectedAction = {
      type: actionNames.PAUSE,
      time,
      id,
    };

    expect(actions.pause(time, id)).toEqual(expectedAction);
  });

  it('should create an action to set the play head', () => {
    const percent = 30;
    const expectedAction = {
      type: actionNames.PLAY_HEAD,
      percent,
      id,
    };

    expect(actions.setPlayHead(percent, id)).toEqual(expectedAction);
  });

  it('should create an action to set the volume', () => {
    const volume = 0.8;
    const expectedAction = {
      type: actionNames.VOLUME,
      volume,
      id,
    };

    expect(actions.setVolume(volume, id)).toEqual(expectedAction);
  });

  it('should create an action to mute the media', () => {
    const mute = true;
    const expectedAction = {
      type: actionNames.MUTE,
      mute,
      id,
    };

    expect(actions.setMute(mute, id)).toEqual(expectedAction);
  });

  it('should create an action to set the duration', () => {
    const remainingDuration = true;
    const expectedAction = {
      type: actionNames.DURATION,
      remainingDuration,
      id,
    };

    expect(actions.setDuration(remainingDuration, id)).toEqual(expectedAction);
  });

  it('should create an action to set the playbackRate', () => {
    const playbackRate = 3.2;
    const expectedAction = {
      type: actionNames.PLAYBACK_RATE,
      playbackRate,
      id,
    };

    expect(actions.setPlaybackRate(playbackRate, id)).toEqual(expectedAction);
  });

  it('should create an action to set the loop', () => {
    const loop = true;
    const expectedAction = {
      type: actionNames.LOOP,
      loop,
      id,
    };

    expect(actions.setLoop(loop, id)).toEqual(expectedAction);
  });

  it('should create an action to set the fullScreen', () => {
    const fullScreen = true;
    const expectedAction = {
      type: actionNames.FULL_SCREEN,
      fullScreen,
      id,
    };

    expect(actions.setFullScreen(fullScreen, id)).toEqual(expectedAction);
  });

  it('should create an action to set the focus', () => {
    const expectedAction = {
      type: actionNames.FOCUS,
      id,
    };

    expect(actions.setFocus(id)).toEqual(expectedAction);
  });
});