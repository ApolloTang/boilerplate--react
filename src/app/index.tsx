import React from 'react';

import FontTest from 'src/font-test/';
import img from './react.png';
import s from './style.module.less';

const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div className={`${s.imageContainer}`}>
      <img src={img} alt="react" />
    </div>
    <FontTest />
  </div>
);

export default App;
