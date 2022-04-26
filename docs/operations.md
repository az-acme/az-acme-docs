---
sidebar_position: 1
title: Certificate Operations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The following sections describe the authentication process as well as the specific certificate operations that can be performed. As a general process ```az-acme``` needs to:

1. **Register** with an ACMI issuer as a one-time operation. The generated private key is stored to Key Vault as a secret.
2. Perform **Order or Renew** certificate processes for any number of configured certificate Subjects & SANs using the private key for authentication purposes with the ACMI issuer.

## Pre-Requisites 

### Authentication

Internally, the CLI leveages the .NET [DefaultAzureCredential](https://docs.microsoft.com/en-us/dotnet/api/azure.identity.defaultazurecredential?view=azure-dotnet) class which will attempt to authenticate based on various fallback approaches automatically. Two of the most common are outlined below: 

:::info

**Visual Studio** and **Visual Studio Code** credential sources for **DefaultAzureCredential** are disabled.

:::

#### Azure CLI

Use the Azure CLI to perform login to the Azure environment. 

```bash
az login
```

#### Environment Variables

Credentials for a service principal can be set using the following environment variables.

```AZURE_TENANT_ID``` - The tenant from the service principal.<br/>
```AZURE_CLIENT_ID``` - The appId from the service principal.<br/>
```AZURE_CLIENT_SECRET``` - The password from the service principal.<br/>

### Azure Key Vault

An instance of Azure Key Vault should already exist, with either RBAC or Access Policies configured. 

:::tip

Consider using an Azure Key Vault dedicated to TLS certificate management. This allows greater security isolation compared to a shared vault.

:::

The following provides information relating to the out of the box roles available for use.

- **Key Vault Certificates Officer** to create and manage certificates.
- **Key Vault Secrets Officer** to complete the registration process.
- **Key Vault Secrets User** if already registered to read the registration information.

## Registration

Registration with an ACME compliant issuer follows two standard approaches:
- Simple, where only an email address is required for registration.
- External Account Binding (EAB), where the issuer provides a Key ID and Key to use when registering. This allows the linking of an existing account during the registration process

In both scenarios, ```az-acme``` requires the expicit acceptance of the terms of service for the issuer via the ```--agree-tos``` flag.

### Simple Registration

Provide an email address as part of the registration process.

<Tabs groupId="console-type">
  <TabItem value="ps" label="Windows">
  

```text
  az-acme.exe register `
          --server https://acme-v02.api.letsencrypt.org/directory `
          --key-vault-uri https://kvazacmedev.vault.azure.net/ `
          --account-secret az-amce-registration `
          --email demo@azacme.dev `
          --agree-terms
```

```text
az-acme.exe help register 
```
  </TabItem>
  <TabItem value="bash" label="Linux">

```bash
az-acme register \
        --server https://acme-v02.api.letsencrypt.org/directory \
        --key-vault-uri https://kvazacmedev.vault.azure.net/ \
        --account-secret az-amce-registration \
        --email demo@azacme.dev \
        --agree-terms
```
For full options available run the help command.

```text
az-acme help register 
```
  </TabItem>
</Tabs>

### External Account Binding (EAB)

The EAB KID and HMAC Key are defined by the issuer. These are sensitive values which <b>should not be stored in clear text in production usage</b>. These values can also be provided via environment variables ```AZ_ACME_EAB_KID``` and ```AZ_ACME_EAB_KEY``` respecitively.

<Tabs groupId="console-type">
  <TabItem value="ps" label="Windows">


```text
az-acme.exe register `
        --server https://acme.zerossl.com/v2/DV90 `
        --key-vault-uri https://kvazacmedev.vault.azure.net/ `
        --account-secret az-amce-registration `
        --email demo@azacme.dev `
        --eab-kid [keyid] `
        --eab-hmac-key [key] `
        --agree-terms
```

The following shows the alternative approach to map enviroment variables to specific secrets from Azure Key Vault using the ```--env-from-secrets``` parameter.

```text
az-acme.exe register `
        --server https://acme.zerossl.com/v2/DV90 `
        --key-vault-uri https://kvazacmedev.vault.azure.net/ `
        --account-secret az-amce-registration `
        --email demo@azacme.dev `
        --env-from-secrets AZ_ACME_EAB_KID=zerossl-eab-kid AZ_ACME_EAB_KEY=zerossl-eab-key `
        --agree-terms
```

For full options available run the help command.

```text
az-acme.exe help register 
```

  </TabItem>
  <TabItem value="bash" label="Linux">

```bash
az-acme register \
        --server https://acme.zerossl.com/v2/DV90 \
        --key-vault-uri https://kvazacmedev.vault.azure.net/ \
        --account-secret az-amce-registration \
        --email demo@azacme.dev \
        --eab-kid [keyid] \
        --eab-hmac-key [key] \
        --agree-terms
```

The following shows the alternative approach to map enviroment variables to specific secrets from Azure Key Vault using the ```--env-from-secrets``` parameter.

```bash
az-acme register \
        --server https://acme.zerossl.com/v2/DV90 \
        --key-vault-uri https://kvazacmedev.vault.azure.net/ \
        --account-secret az-amce-registration \
        --email demo@azacme.dev \
        --env-from-secrets AZ_ACME_EAB_KID=zerossl-eab-kid AZ_ACME_EAB_KEY=zerossl-eab-key \
        --agree-terms
```

For full options available run the help command.

```bash
az-acme help register 
```
  </TabItem>
</Tabs>

## Order Certificate

How to register for a certificate

### Order or Renew

When ordering a certificate, the order will be placed with the issuer if the certificate does not exist within Azure Key Vault, or if the certificate will expire within X days as defined by the ```--renew-within-days``` parameter (defaults to 30 if not supplied).

<Tabs groupId="console-type">
  <TabItem value="ps" label="Windows">

```
az-acme.exe order `
        --server https://acme-v02.api.letsencrypt.org/directory `
        --key-vault-uri https://kvazacmedev.vault.azure.net/ `
        --certificate demo-certificate `
        --subject stgle01.demo.azacme.dev `
        --sans stgle002.demo.azacme.dev stgle003.demo.azacme.dev `
        --account-secret reg-le-stg-azacme-dev `
        --dns-provider azure `
        --azure-dns-zone /subscriptions/xxxxx/resourceGroups/xxxx/providers/Microsoft.Network/dnszones/demo.azacme.dev `
        --renew-within-days 30

```

For full options available run the help command.

```bash
az-acme.exe help order 
```


  </TabItem>
  <TabItem value="bash" label="Linux">

```bash
az-acme order \
        --server https://acme-v02.api.letsencrypt.org/directory \
        --key-vault-uri https://kvazacmedev.vault.azure.net/ \
        --certificate demo-certificate \
        --subject stgle01.demo.azacme.dev \
        --sans stgle002.demo.azacme.dev stgle003.demo.azacme.dev \
        --account-secret reg-le-stg-azacme-dev \
        --dns-provider azure \
        --azure-dns-zone /subscriptions/xxxxx/resourceGroups/xxxx/providers/Microsoft.Network/dnszones/demo.azacme.dev \
        --renew-within-days 30
```

For full options available run the help command.

```bash
az-acme help order 
```
  </TabItem>
</Tabs>
