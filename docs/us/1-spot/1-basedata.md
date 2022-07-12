---
title: Basic data
---

<Block>

# illustrate

Basic data is generally used as a parameter for requesting market data. Before making other API calls, please refer to the following basic data API.

[[toc]]

</Block>


<Block>

## Currently supported exchange APIs (spot)

|    Exchange     |  market data   |     Subscribe to Quotes
| :---------: | :-----: | :--------------------------------:
|    binance    | updating  | pending update
|    huobi    | pending update |pending update

::: tip
Documentation will always be updated
::: 

<Example>


</Example>

</Block>

<Block>

## Get currently supported exchanges

This interface returns currently supported exchanges for calling the rest of the API.

This interface does not support carrying any parameters.

GET https://api.cryptobothub.com/v3/exchange/queryType

<Example>

<Blank height="148px" />

<CURL>
```bash
curl -X GET https://api.cryptobothub.com/v3/exchange/queryType
```
</CURL>

</Example>

</Block>