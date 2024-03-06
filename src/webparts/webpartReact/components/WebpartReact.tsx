import * as React from 'react';
import styles from './WebpartReact.module.scss';
import type { IWebpartReactProps } from './IWebpartReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import 'rc-tree/assets/index.css';
import Tree from 'rc-tree';

const treeData = [
  {
    key: '0-0',
    title: 'parent 1',
    children: [
      { key: '0-0-0', title: 'parent 1-1', children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }] },
      {
        key: '0-0-1',
        title: 'parent 1-2',
        children: [
          { key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true },
          { key: '0-0-1-1', title: 'parent 1-2-1' },
          { key: '0-0-1-2', title: 'parent 1-2-2' },
          { key: '0-0-1-3', title: 'parent 1-2-3' },
          { key: '0-0-1-4', title: 'parent 1-2-4' },
          { key: '0-0-1-5', title: 'parent 1-2-5' },
          { key: '0-0-1-6', title: 'parent 1-2-6' },
          { key: '0-0-1-7', title: 'parent 1-2-7' },
          { key: '0-0-1-8', title: 'parent 1-2-8' },
          { key: '0-0-1-9', title: 'parent 1-2-9' },
          { key: 1128, title: 1128 },
        ],
      },
    ],
  },
];

export default class WebpartReact extends React.Component<IWebpartReactProps, {}> {
  public render(): React.ReactElement<IWebpartReactProps> {
    const {
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.webpartReact} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h4>Hi, {escape(userDisplayName)}!</h4>
          <div>{environmentMessage}</div>
        </div>
        <div>
        <Tree
          className="myCls"
          showLine
          checkable
          selectable={false}
          defaultExpandAll
          treeData={treeData}
        />
        </div>
      </section>
    );
  }
}
