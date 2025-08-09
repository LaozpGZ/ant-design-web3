# Ant Design Web3 Aptos 支持贡献计划

## 项目概述

为 `ant-design/ant-design-web3` 项目添加 Aptos 区块链支持，参考现有的 Solana 实现和 `aptos-labs/aptos-wallet-adapter`。

## 项目状态分析

### 当前状况
- ✅ 你的 fork: `https://github.com/LaozpGZ/ant-design-web3.git` 
- ✅ upstream 已配置: `https://github.com/ant-design/ant-design-web3.git`
- ✅ 本地已同步到最新的 upstream/main (commit: 64d8356e8)
- ⚠️ packages/aptos 目录存在但为空，需要重新创建

### 参考项目分析

#### Aptos Wallet Adapter 结构
- **Core包**: `@aptos-labs/wallet-adapter-core` - 核心钱包适配逻辑
- **React包**: `@aptos-labs/wallet-adapter-react` - React组件和hooks
- **支持的钱包**: OKX, AptosConnect, Petra, Nightly, Pontem, RimoSafe, MSafe
- **主要依赖**: `@aptos-labs/ts-sdk`, `@radix-ui/react-slot`, `eventemitter3`

#### Ant Design Web3 Solana 实现模式
- **模块化设计**: chains, provider, wallets, utils
- **统一接口**: 遵循项目约定的钱包接口规范
- **资源集成**: 钱包图标在 packages/assets 中统一管理
- **示例项目**: examples/solana 提供使用示例

## 开发计划

### 阶段一: 核心包开发 (1-2 commits)

**目标**: 创建 `@ant-design/web3-aptos` 核心包

**文件结构**:
```
packages/aptos/
├── .fatherrc.ts           # 构建配置
├── package.json           # 包配置
├── tsconfig.json          # TypeScript配置
├── README.md              # 包文档
├── CHANGELOG.md           # 变更日志
└── src/
    ├── index.ts           # 主导出文件
    ├── chains.tsx         # Aptos链配置
    ├── types.ts           # 类型定义
    ├── utils.ts           # 工具函数
    ├── provider/          # Provider组件
    │   └── index.tsx
    └── wallets/           # 钱包实现
        ├── built-in.ts    # 内置钱包
        ├── factory.ts     # 钱包工厂
        └── types.ts       # 钱包类型
```

**主要任务**:
1. **Commit 1**: 创建基础包结构和配置文件
   - 创建 package.json (参考 solana)
   - 配置构建脚本 .fatherrc.ts
   - 设置 TypeScript 配置
   - 创建基础 README 和 CHANGELOG

2. **Commit 2**: 实现核心功能
   - 实现 chains.tsx (mainnet, testnet, devnet)
   - 创建 provider 组件
   - 实现基础钱包工厂
   - 添加类型定义

### 阶段二: 钱包集成 (2-3 commits)

**目标**: 集成主要Aptos钱包

**钱包优先级**:
1. **高优先级**: Petra (官方推荐), AptosConnect
2. **中优先级**: OKX, MSafe
3. **低优先级**: Nightly, Pontem, RimoSafe

**主要任务**:
1. **Commit 3**: 实现核心钱包 (Petra, AptosConnect)
   - 创建钱包适配器
   - 实现连接、断开、签名等核心功能
   - 添加钱包配置

2. **Commit 4**: 添加资源文件
   - 在 packages/assets 中添加钱包图标
   - 更新 assets 包的导出

3. **Commit 5**: 扩展钱包支持 (OKX, MSafe等)
   - 实现额外钱包适配器
   - 完善钱包工厂

### 阶段三: 示例和文档 (2-3 commits)

**目标**: 创建完整的使用示例

**文件结构**:
```
examples/aptos/
├── package.json
├── tsconfig.json
├── .dumirc.ts
└── src/
    └── pages/
        └── demo.tsx       # 基础demo
```

**主要任务**:
1. **Commit 6**: 创建示例项目结构
   - 设置示例项目配置
   - 创建基础 demo 页面

2. **Commit 7**: 实现完整示例
   - 钱包连接示例
   - 交易签名示例
   - 链切换示例

3. **Commit 8**: 完善文档和测试 (可选)
   - 添加单元测试
   - 完善 README 文档
   - 添加 API 文档

### 阶段四: 集成和优化 (1-2 commits)

**目标**: 确保与主项目的完美集成

**主要任务**:
1. **Commit 9**: 项目集成
   - 更新根目录 package.json
   - 更新 pnpm-workspace.yaml
   - 确保构建通过

2. **Commit 10**: 最终优化 (可选)
   - 性能优化
   - 代码风格统一
   - 错误处理完善

## Git 工作流程

### 1. 分支管理
```bash
# 确保在最新状态
git checkout main
git pull upstream main
git push origin main

# 创建功能分支
git checkout -b feature/add-aptos-support
```

### 2. 开发流程
```bash
# 每个阶段完成后
git add .
git commit -m "feat: [stage] brief description

- Detailed change 1
- Detailed change 2

Refs: #issue-number"

# 推送到你的fork
git push origin feature/add-aptos-support
```

### 3. 提交信息规范

**格式**: `type(scope): description`

**类型**:
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式化
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**示例提交信息**:
```
feat(aptos): implement core aptos wallet adapter

- Add AptosProvider component with wallet connection management
- Implement chain configurations for mainnet/testnet/devnet
- Create wallet factory with Petra and AptosConnect support
- Add TypeScript types for Aptos wallet integration

Refs: #xxx
```

### 4. PR 准备流程

```bash
# 在提交PR前，确保代码质量
pnpm install
pnpm build
pnpm lint
pnpm test

# 创建PR前最后检查
git fetch upstream
git rebase upstream/main
git push origin feature/add-aptos-support --force-with-lease
```

## 提交策略建议

### 推荐方案: 10个精心设计的commits

1. **feat(aptos): add core package structure and configuration**
2. **feat(aptos): implement aptos chains and provider foundation**
3. **feat(aptos): add Petra and AptosConnect wallet adapters**
4. **feat(assets): add aptos wallet icons and exports**
5. **feat(aptos): extend wallet support for OKX and MSafe**
6. **feat(aptos): create example project structure**
7. **feat(aptos): implement comprehensive usage examples**
8. **docs(aptos): add documentation and API references**
9. **feat(aptos): integrate with main project configuration**
10. **fix(aptos): final optimization and code review fixes**

### 备选方案: 6个功能性commits

1. **feat(aptos): implement complete aptos support package**
2. **feat(assets): add aptos wallet icons**
3. **feat(aptos): add comprehensive wallet adapters**
4. **feat(aptos): create usage examples**
5. **feat(aptos): integrate with main project**
6. **docs(aptos): add documentation and tests**

## 质量保证

### 代码规范
- 遵循项目现有的 TypeScript 和 ESLint 规范
- 使用项目统一的代码格式化配置
- 保持与 Solana 实现的一致性

### 测试要求
- 确保所有新功能都有对应的测试用例
- 运行完整的测试套件确保没有破坏现有功能
- 在多个钱包中测试连接和交易功能

### 文档要求
- 每个公共API都要有完整的JSDoc注释
- 提供清晰的使用示例
- 更新相关的README文件

## PR 提交指南

### PR 标题格式
```
feat: Add Aptos blockchain support to ant-design-web3
```

### PR 描述模板
```markdown
## 概述
为 ant-design-web3 项目添加 Aptos 区块链支持，包括钱包连接、交易签名、链配置等完整功能。

## 实现内容
- ✅ 创建 @ant-design/web3-aptos 核心包
- ✅ 支持主流 Aptos 钱包：Petra、AptosConnect、OKX、MSafe
- ✅ 实现链配置（主网、测试网、开发网）
- ✅ 提供完整的使用示例
- ✅ 添加钱包图标资源

## 技术方案
参考现有 Solana 实现模式和 aptos-labs/aptos-wallet-adapter，确保：
- 与现有架构保持一致
- 遵循项目代码规范
- 提供完整的 TypeScript 支持

## 测试
- ✅ 单元测试覆盖核心功能
- ✅ 集成测试验证钱包连接
- ✅ 示例项目验证完整流程

## 相关链接
- 参考实现: https://github.com/aptos-labs/aptos-wallet-adapter
- 相关 Issue: #xxx (如果有)
```

## 后续维护

### 版本发布
- 遵循项目的语义化版本规范
- 及时更新 CHANGELOG.md
- 确保向后兼容性

### 社区支持
- 及时响应相关issue和PR
- 协助用户解决集成问题
- 跟进Aptos生态更新

## 风险评估

### 技术风险
- **低风险**: 参考成熟的实现方案
- **依赖风险**: 依赖Aptos官方SDK，需要跟进版本更新
- **兼容性**: 确保与现有功能不冲突

### 时间估算
- **开发时间**: 3-5天
- **测试时间**: 1-2天  
- **文档时间**: 1天
- **总计**: 5-8天

## 联系方式

如有问题或需要协助，可以通过以下方式联系：
- GitHub Issue: 在对应仓库创建issue
- PR Review: 在PR中直接讨论

---

*此计划书将随着开发进度动态更新*