import React from 'react';

const MusicContext = React.createContext({
  musicList: [],

  addMusicTrack: (items: any) => {},
  handleDelete: (id: number) => {},
});

export default MusicContext;
