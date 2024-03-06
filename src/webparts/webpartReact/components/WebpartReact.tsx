import * as React from 'react';
import styles from './WebpartReact.module.scss';
import type { IWebpartReactProps } from './IWebpartReactProps';
import { Organization } from './Organization/Organization';

export default class WebpartReact extends React.Component<IWebpartReactProps, {}> {
  public render(): React.ReactElement<IWebpartReactProps> {
    const {
      hasTeamsContext
    } = this.props;

    return (
      <section className={`${styles.webpartReact} ${hasTeamsContext ? styles.teams : ''}`}>
        <Organization context={this.props.context} />
      </section>
    );
  }
}
