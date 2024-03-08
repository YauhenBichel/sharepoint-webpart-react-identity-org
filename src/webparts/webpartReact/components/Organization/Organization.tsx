import * as React from 'react';
import 'rc-tree/assets/index.css';
import Tree from 'rc-tree';
import { OrganizationProps } from './OrganizationProps';
import { OrganizationState } from './OrganizationState';
import { OrganisationService } from '../../../../service/OrganizationService';
import { OrganisationTreeMapper } from '../../../../mapper/OrganisationTreeMapper';
import { Organisation } from '../../../../model/Organisation';
import { RcOrgTree } from '../../../../model/RcOrgTree';
import { TreeItem } from '../../../../model/TreeItem';

export class Organization extends React.Component<OrganizationProps, OrganizationState> {

    orgnasationService: OrganisationService;
    orgTreeMapper: OrganisationTreeMapper;

    constructor(props: OrganizationProps, state: OrganizationState) {
        super(props);

        this.orgnasationService = new OrganisationService();
        this.orgTreeMapper = new OrganisationTreeMapper();

        this.state = {
            items: new Array<TreeItem>()
        }
    }

    private async getItems() : Promise<void> {
        let uclOrganisation: Organisation = await this.orgnasationService.getOrganisation(this.props.context.httpClient);
        let orgTree: RcOrgTree = this.orgTreeMapper.mapToTree(uclOrganisation);
        
        console.log("org tree: ", orgTree);
        this.setState({items: orgTree.items});
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