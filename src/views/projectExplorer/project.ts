/*
 * (c) Copyright IBM Corp. 2023
 */

import { ThemeIcon, TreeItem, TreeItemCollapsibleState, WorkspaceFolder } from "vscode";

export default class Project extends TreeItem {
  static contextValue = `project`;
  constructor(public workspaceFolder: WorkspaceFolder, description?: string) {
    super(workspaceFolder.name, TreeItemCollapsibleState.Collapsed);

    this.resourceUri = workspaceFolder.uri;
    this.iconPath = new ThemeIcon(`root-folder`);
    this.contextValue = Project.contextValue;
    this.description = description;
  }
}