# 🪙 PicknGet Smart Contract

The **PicknGet** contract is a **decentralized application (dApp)** that allows users to **recycle items in exchange for U2U coins**.  
It also includes an **e-commerce component**, where recycled materials can be transformed into various **eco-green products**.

---

## 🧱 Contract Structure

The main contract is implemented in **`PicknGet.sol`** and inherits functionality from the following Solidity files:

- **`User.sol`** – Handles user registration and management.
- **`Admin.sol`** – Manages administrative privileges and operations.
- **`Product.sol`** – Defines product-related logic and marketplace interactions.

---

## 🧩 Technology Stack

- **Language:** Solidity  
- **Framework:** Hardhat v2  
- **Network:** U2U Nebulas Test Network  

---

## ⚙️ Compilation

To compile the contracts, run:

```shell
npx hardhat compile
```

## 🔧 Hardhat Configuration

The **`hardhat.config.js`** (or **`hardhat.config.ts`**) file contains key project configurations, including:

- **RPC URL** for the U2U Nebulas test network.  
- **Solidity compiler settings.**  
- **Etherscan verification setup** (with the **U2UScan** custom chain URL).  

## 🚀 Deployment

The contract is deployed using **Hardhat Ignition** on the **U2U Nebulas Test Network**.

Run the following command to deploy:

```shell
npx hardhat ignition deploy ./ignition/modules/PicknGet.cjs  --network nebulas --deployment-id u2u-deployment
```

**Details:**

- **Deployment Tool:** Hardhat Ignition  
- **Network Name:** `nebulas`  
- **Deployment ID:** `u2u-deployment`  


## deployed Address
```shell
Deployed Addresses

PicknGetModule#PicknGet - 0x2001f7f7112FB0e7DeC73586f494c6dEcB790636
```

## ✅ Verification

After deployment, verify the contract on **U2UScan** using:
```shell
npx hardhat verify u2u-deployment
```


## verified Address
```shell
   https://testnet.u2uscan.xyz/address/0x2001f7f7112FB0e7DeC73586f494c6dEcB790636#code
  ```


## 📘 Summary

- **Project Name:** PicknGet  
- **Purpose:** Recycling-to-earn and eco-commerce platform on the U2U blockchain.  
- **Language:** Solidity  
- **Deployment Network:** U2U Nebulas Testnet  
- **Deployment Tool:** Hardhat Ignition  
- **Verification:** U2UScan (custom Etherscan chain)  
