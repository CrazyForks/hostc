
# AGENT INSTRUCTIONS: hostc Workers 子项目

本说明专为 `apps/workers` Cloudflare Worker 子项目设计，聚焦开发、部署、约定和关键文件。

## 目录结构

- `src/index.ts`：Worker 原生 fetch 入口，负责 tunnel API、WebSocket connect 入口和公网 proxy 分发。
- `src/durable/tunnel.ts`：Durable Object，负责 tunnel 状态、WebSocket 连接和请求转发。
- `wrangler.jsonc`：Worker 配置，包含 Durable Object 绑定、migrations、兼容性等。
- `worker-configuration.d.ts`：由 `wrangler types` 自动生成的类型声明。

## 开发流程

1. 本地开发：
	```sh
	pnpm dev -F workers
	# 或
	pnpm wrangler dev
	```
2. 部署：
	```sh
	pnpm deploy -F workers
	# 或
	pnpm wrangler deploy
	```
3. 变更 Wrangler 绑定或相关类型配置后，务必执行：
	```sh
	pnpm wrangler types
	```

## 约定与建议

- Durable Object 类需在 wrangler.jsonc 的 `durable_objects.bindings` 和 `migrations` 中声明。
- Worker 入口只保留当前需要的原生路由分发；tunnel 状态和转发逻辑仍放在 Durable Object 中。
- 公网隧道基域名通过 wrangler.jsonc 中的 `vars.PUBLIC_BASE_DOMAIN` 配置。
- tunnel 鉴权依赖 `TOKEN_SECRET` secret；Worker 负责签发 10 分钟滑动 session token 和短时 connect token，Durable Object 不持久化 token。
- Worker 提供 refresh 接口给 CLI 续签 session 并下发新的 websocketUrl；CLI 在内存里保存 session token，并在连接意外断开后自动刷新并重连。
- 变更 Durable Object 结构时，需同步更新 `migrations`，并重新生成类型。
- 生产环境建议开启 `observability` 便于监控。
- 兼容 Node.js 能力已启用（见 wrangler.jsonc 的 `compatibility_flags`）。

## 关键文档

- [Cloudflare Workers 官方文档](https://developers.cloudflare.com/workers/)
- [Wrangler 配置说明](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Durable Objects 最佳实践](https://developers.cloudflare.com/durable-objects/best-practices/rules-of-durable-objects/)

---
如需全局约定，见项目根目录 AGENTS.md。
