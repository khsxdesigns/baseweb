/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {Combobox} from '../index.js';
import {useStyletron} from '../../styles/index.js';

type OptionT = {label: string, id: string};
const options: OptionT[] = [
  {label: 'AliceBlue', id: '#F0F8FF'},
  {label: 'AntiqueWhite', id: '#FAEBD7'},
  {label: 'Aqua', id: '#00FFFF'},
  {label: 'Aquamarine', id: '#7FFFD4'},
  {label: 'Azure', id: '#F0FFFF'},
  {label: 'Beige', id: '#F5F5DC'},
];

function ReplacementNode({isSelected, option}) {
  const [css] = useStyletron();
  return (
    <div
      className={css({display: 'flex', alignItems: 'center', height: '36px'})}
    >
      <div
        className={css({
          backgroundColor: option.id,
          height: '12px',
          width: '12px',
        })}
      />
      {option.label}
    </div>
  );
}

function Example() {
  const [value, setValue] = React.useState('');
  return (
    <div>
      <Combobox
        value={value}
        onChange={setValue}
        mapOptionToString={o => o.label}
        mapOptionToNode={ReplacementNode}
        options={options}
      />
    </div>
  );
}

export default Example;