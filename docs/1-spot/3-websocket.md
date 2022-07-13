---
title: Websocket行情推送
---

<Block>

# 说明

1. 所有交易对均为小写
2. wss接口的baseurl为: wss://stream.cryptobothub.com
3. 如若断线，请妥善处理断线重连。
4. 不对topic校验，如若错误不推送数据。
5. 每个链接最多可订阅50个Topic。
6. 每1分钟服务端会发送ping，客户端应当立即回复pong，否则服务端会在1分钟内主动断开链接。允许客户端发送不成对的pong帧(即客户端可以以高于1分钟每次的频率发送pong保持链接)。

订阅消息格式如下:

```json
{
  "method": "subscribe",
  "args": ["<topic1>","<topic2>", ...]
}
```

取消订阅消息格式如下:

```json
{
  "method": "unsubscribe",
  "args": ["<topic1>","<topic2>", ...]
}
```

服务器发送ping消息格式如下:

```
ping
```


订阅成功时返回:
```
ok
```

订阅失败时返回(可能因为发送对订阅消息格式错误):
```
error
```

如您不熟悉websocket是如何运作的，请用http://www.websocket-test.com先来测试是否正常连接。

当订阅成功后建议发送ping至服务器，服务器将返回pong以证明您成功连接。

[[toc]]

</Block>


<Block>

## 订阅Ticker级别数据

推送频率:1000ms

返回的数据为最新24h内成交数据，包括当前最新价格。

- topic:%exchange.market.ticker.%symbol
+ 第一个%s代表交易所，从基础API得到。
+ 第二个%s代表需要订阅的币。

订阅单个币请发下如下json。

```json
{
  "method": "subscribe",
  "args": ["binance.market.ticker.btcusdt"]
}
```

订阅多个币请发下如下json。

```json
{
  "method": "subscribe",
  "args": ["binance.market.ticker.btcusdt","binance.market.ticker.dotusdt", ...]
}
```

释义:

| 字段名称 |  数据类型  |  描述 |
|-----|-----|---|
| ch|string |订阅的channel |
| ts|long |系统响应时间 |
| result|[object] | |
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


<Block>

## 订阅实时价格

推送频率:当交易所撮合交易价格变化后即可推送，极限推送为100ms。

返回的数据为最新市场价格数据。

该订阅不建议单个连接连接过多的币种（3-5个内较好，若比较多分开订阅），以免影响速度。

- topic:%exchange.market.price.%symbol
+ 第一个%s代表交易所，从基础API得到。
+ 第二个%s代表需要订阅的币。

订阅单个币请发下如下json。

```json
{
  "method": "subscribe",
  "args": ["binance.market.price.btcusdt"]
}
```

订阅多个币请发下如下json。

```json
{
  "method": "subscribe",
  "args": ["binance.market.price.btcusdt","binance.market.price.dotusdt", ...]
}
```

释义:

| 字段名称 |  数据类型  |  描述 |
|-----|-----|---|
| ch|string |订阅的channel |
| ts|long |系统响应时间 |
| result|[object] | |
| symbol|string |交易对 |
| price|float |实时价格 |

<Example>

返回值如下:

```json
{
  "result": {
    "symbol": "btcusdt",
    "price": 20884.9
  },
  "ch": "binance.market.price.btcusdt",
  "ts": 1657294293356
}
```

</Example>

</Block>

