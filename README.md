# 🌐 catfordgreen.org.uk DNS Management

This repository contains the DNS configuration for **catfordgreen.org.uk**, managed with [DNSControl](https://dnscontrol.org).

## 🚀 How it works

- All DNS records are defined in this repository.
- Pull Requests trigger a CI workflow that:
  - ✅ Runs `dnscontrol check` to validate changes.
  - 🔍 Shows a **preview** of what changes would be applied.
- Once a Pull Request is merged into `main`:
  - ⚡ The CI workflow automatically pushes the DNS changes to Cloudflare.

## 🤝 Contributing

We welcome improvements and fixes to the DNS configuration.

- 📝 Propose changes by opening a **Pull Request**.
- 🐛 Found an issue? Please open an **Issue**.

All contributions are reviewed before being merged and applied.

## 📦 Continuous Integration

- 🛠️ **Preview**: On every Pull Request, the CI checks for syntax errors and shows the proposed DNS changes.
- 🚢 **Deploy**: On merge to `main`, the CI automatically applies the DNS updates.

## 🔒 Notes

- This repository controls live DNS for `catfordgreen.org.uk`.
- Please make changes carefully, as incorrect DNS can disrupt services.

---
✨ Managed with care, powered by [DNSControl](https://dnscontrol.org) ✨
