---
sidebar_position: 1
title: Certificate Operations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

bla

## Authentication

Internally, the CLI leveages the .NET [DefaultAzureCredential](https://docs.microsoft.com/en-us/dotnet/api/azure.identity.defaultazurecredential?view=azure-dotnet) class which will attempt to athenticate based on various approaches automatically. Two of the most common are outlined in the following sections. 

:::note

**Visual Studio** and **Visual Studio Code** credential sources for **DefaultAzureCredential** are disabled.

:::

### Azure CLI

Use the Azure CLI to perform login to the Azure environment. 

```bash
az login
```

### Environment Variables

Credentials for a service principal can be set using the following environment variables.

```AZURE_TENANT_ID``` - The tenant from the service principal.<br/>
```AZURE_CLIENT_ID``` - The appId from the service principal.<br/>
```AZURE_CLIENT_SECRET``` - The password from the service principal.<br/>

## Registration

How to register...

### Simple Registration

ACMI issuers that only require an email address can be registered to 

<Tabs groupId="console-type">
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

### External Account Binding (EAB)

<Tabs groupId="console-type">
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

## Order Certificate

How to register for a certificate

### Order or Renew

<Tabs groupId="console-type">
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

### Force Renewal

<Tabs groupId="console-type">
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

