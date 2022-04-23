---
sidebar_position: 2
title: Architecture
description: Architecture and designs goals for Az-Acme
---

While there are many ACMI clients that exist, ```az-acme``` is different in that it has been designed from the outset with a focus on Microsoft Azure and aligned to the following goals.

- Replicate certificate management capabilities for ACMI based certificate issuers that exist natively between Azure Key Vault and Digicert / GlobalSign.
- Store certificates in Azure Key Vault to enable existing Azure native integrations between services and Azure Key Vault to operate as expected.
- Separate TLS certificate management processes from Azure compute resources. This means *only* ACME DNS challenges are supported.

The following shows how ```az-acme``` fits within the wider certificate management context. To certificate consumers, there is no difference between using a certificate managed by an Azure Key Vault native issuer (Digicert / GlobalSign) and those obtained from an ACMI based issuer via ```az-acme```(s).

![](https://raw.githubusercontent.com/az-acme/az-acme-cli/main/docs/context.drawio.svg)
