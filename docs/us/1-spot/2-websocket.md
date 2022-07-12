---
title: websocket行情推送
---

<Block>

# 说明

1. 所有交易对均为小写
2. wss接口的baseurl为: wss://stream.cryptobothub.com
3. 如若断线，请妥善处理断线重连。
4. 不对topic校验，如若错误不推送数据。

订阅格式如下:

```json
{
  "sub": "订阅的topic",
  "cancel": "取消订阅的topic"
}
```

订阅成功时返回:
```json
{
  "ch":"binance.market.ticker.btcusdt",
  "status":"OK",
  "subbed":"binance.market.ticker.btcusdt",
  "ts":1657294050169
} 
```

如您不熟悉websocket是如何运作的，请用http://www.websocket-test.com先来测试是否正常连接。

当订阅成功后建议发送ping至服务器，服务器将返回pong以证明您成功连接。

[[toc]]

</Block>


<Block>

## 订阅Ticker级别数据

返回的数据为最新24h内成交数据，包括当前最新价格。

+ 第一个%s代表交易所，从基础API得到。
+ 第二个%s代表需要订阅的币。
+ %s.market.ticker.$s

订阅单个币请发下如下json。

```json
{
  "sub": "binance.market.ticker.btcusdt"
}
```

订阅所有币请发下如下json。

```json
{
  "sub": "binance.market.ticker.all"
}
```

释义:

| 字段名称 |  数据类型  |  描述 |
|-----|-----|---|
| ch|string |订阅的channel |
| ts|long |系统响应时间 |
| result|object | |
| symbol|string |交易对 |
| amount|float |成交量 |
| count|long |成交笔数 |
| openPrice|float |开盘价格 |
| closePrice|float |收盘价格(当前最新价格) |
| highPrice|float |该阶段内最高价格 |
| lowPrice|float |该阶段内最低价格 |
| amplitude|double |涨跌幅 |

<Example>

返回值如下:

```json
{
  "result": {
    "symbol": "btcusdt",
    "amount": 242373.50575,
    "count": 2601541,
    "openPrice": 20884.9,
    "amplitude": 4.91,
    "lowPrice": 20830.01,
    "highPrice": 22527.37,
    "closePrice": 21911.07
  },
  "ch": "binance.market.ticker.btcusdt",
  "ts": 1657294293356
}
```

</Example>

</Block>

