import cliWorkspaces from "@webiny/cli-plugin-workspaces";
import cliPulumiDeploy from "@webiny/cli-plugin-deploy-pulumi";
import cliPageBuilder from "@webiny/api-page-builder/cli";
import cliAwsTemplate from "@webiny/cwp-template-aws/cli";
import cliScaffold from "@webiny/cli-plugin-scaffold";
import cliScaffoldGraphql from "@webiny/cli-plugin-scaffold-graphql-service";
import cliScaffoldAdminModule from "@webiny/cli-plugin-scaffold-admin-app-module";
import cliScaffoldReactComponent from "@webiny/cli-plugin-scaffold-react-component";

export default {
    template: "@webiny/cwp-template-aws@5.6.0",
    name: "super-project",
    cli: {
        plugins: [
            cliWorkspaces(),
            cliPulumiDeploy(),
            cliPageBuilder(),
            cliAwsTemplate(),
            cliScaffold(),
            cliScaffoldGraphql(),
            cliScaffoldAdminModule(),
            cliScaffoldReactComponent()
        ]
    }
};
