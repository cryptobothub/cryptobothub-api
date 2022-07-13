---
title: 基础数据
---

<Block>

# 说明

基础数据一般作为请求行情数据的参数，在进行其他的API调用之前先请查阅如下基础数据API。

[[toc]]

</Block>


<Block>

## 目前支持的交易所API(现货)

|    交易所     |  RestApi行情数据   |     Websocket 行情推送
| :---------: | :-----: | :--------------------------------:
|    binance    | 支持  | 支持
|    huobi      | x |x

::: tip
文档会一直更新
::: 

<Example>


</Example>

</Block>

<Block>

## 获取目前支持的交易所

+ GET https://api.cryptobothub.com/api/v1/exchange/base/data/exchange-type

此接口返回目前支持的交易所，以便调用其余API。

此接口不支持携带任何参数。

<Example>

<Blank height="148px" />

<CURL>
```bash
curl -X GET https://api.cryptobothub.com/api/v1/exchange/base/data/exchange-type
```
</CURL>

</Example>

</Block>