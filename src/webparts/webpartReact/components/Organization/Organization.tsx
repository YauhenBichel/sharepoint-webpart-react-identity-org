import * as React from 'react';
import 'rc-tree/assets/index.css';
import Tree from 'rc-tree';
import { OrganizationProps } from './OrganizationProps';
import { OrganizationState } from './OrganizationState';
import { OrganisationService } from '../../../../service/OrganizationService';

export class Organization extends React.Component<OrganizationProps, OrganizationState> {

    orgnasationService: OrganisationService;

    constructor(props: OrganizationProps, state: OrganizationState) {
        super(props);

        this.orgnasationService = new OrganisationService();

        this.state = {
            items: [
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
              ],
        }
    }

    private async getItems() {
        const response = await this.orgnasationService.getOrganisation(this.props.context.httpClient);
        console.log(response);
    }

    public componentDidMount(): void {
        this.getItems();
    }

    public render(): React.ReactElement<OrganizationProps> {
        return (
            <>
                <Tree
                    className="myCls"
                    showLine
                    checkable
                    selectable={true}
                    defaultExpandAll
                    treeData={this.state.items}
                />
            </>
        );
    }
}