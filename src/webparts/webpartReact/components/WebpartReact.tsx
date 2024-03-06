import * as React from 'react';
import styles from './WebpartReact.module.scss';
import type { IWebpartReactProps } from './IWebpartReactProps';
import { Organization } from './Organization/Organization';

export default class WebpartReact extends React.Component<IWebpartReactProps, {}> {
  public render(): React.ReactElement<IWebpartReactProps> {
    const {
      hasTeamsContext
    } = this.props;

    if(this.props.context) {
      console.log("webpartreact context: ", this.props.context);
    } else {
      console.log("webpartreact context is null");
    }

    return (
      <section className={`${styles.webpartReact} ${hasTeamsContext ? styles.teams : ''}`}>
        <Organization context={this.props.context} />
      </section>
    );
  }
}
