import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import EpisodeList from './EpisodeList';
import WelcomePage from './WelcomePage';
import LocationList from './LocationList';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters/' component={CharacterList} />
      <Route path='/locations/' component={LocationList} />
      <Route path='/episodes/' component={EpisodeList} />
    </Switch>
  </div>
}
