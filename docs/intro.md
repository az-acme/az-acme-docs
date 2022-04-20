---
sidebar_position: 1
title: Home
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Welcome

While there are many ACMI clients that exist, ```az-acme``` is different in that it has been designed from the outset with a focus on Microsoft Azure and aligned to the following goals.

- Replicate certificate management capabilities for ACMI based certificate issuers that exist natively between Azure Key Vault and Digicert / GlobalSign.
- Store certificates in Azure Key Vault to enable existing Azure native integrations between services and Azure Key Vault to operate as expected.
- Separate TLS certificate management processes from Azure compute resources. This means *only* ACME DNS challenges are supported.

The following shows how ```az-acme``` fits within the wider certificate management context. To certificate consumers, there is no difference between using a certificate managed by an Azure Key Vault native issuer (Digicert / GlobalSign) and those obtained from an ACMI based issuer via ```az-acme```(s).

![](https://raw.githubusercontent.com/az-acme/az-acme-cli/main/docs/context.drawio.svg)

## Getting Started

### What you'll need

- [Azure Account](https://portal.azure.com) or free trial.
- Azure Key Vault and Azure DNS Resources.
  - For a step by step guide see here
- A domain you own and can configure DNS for. 

### Download az-acme cli

The latest version of the ```az-acme``` cli is available for download from the GitHub.

<Tabs>
  <TabItem value="browser" label="Browser" default>
    Download the latest CLI for your OS from GitHub
  </TabItem>
  <TabItem value="ps" label="Powershell Core">

```
console.log('Every repo must come with a mascot.');
```
  </TabItem>
  <TabItem value="bash" label="Bash">

```bash
console.log('Every repo must come with a mascot.');
```
  </TabItem>
</Tabs>

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
