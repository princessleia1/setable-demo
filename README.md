# Settings-Plus
**Settings-Plus** is a Fitbit OS App that demos the capabilities of the Companion Settings Library. **Settings-Plus** uses [Fitbit SDK V3.1.0](https://github.com/Fitbit). 

## Features
A compiled settings.jsx file is registered into the Fitbit mobile application during the application installation process. The following offers a basic settings page to show capabilities of the Companion Settings Library:
* Settings Toggle Switch
* Background Colour Select
* Basic Formatting
* TextImageRow
* Clear Settings Storage
* Link
* Slider
* Add List Item
* Selection
* Multi-Selection
* Additive List
* Image Picker
* Button

### Guides
* [Fitbit Guide Settings](https://dev.fitbit.com/build/guides/settings/)
* [Fitbit Settings API](https://dev.fitbit.com/build/reference/settings-api/)
* [Fitbit Guide Companion](https://dev.fitbit.com/build/guides/companion/)
* [Fitbit Companion API](https://dev.fitbit.com/build/reference/companion-api/)

### Debug Output
Slider:
```
App received: {"data":{"key":"slider","newValue":"26"}}app/index.js:8,3
App received: {"data":{"key":"slider","newValue":"12"}}app/index.js:8,3
App received: {"data":{"key":"slider","newValue":"33"}}app/index.js:8,3
App received: {"data":{"key":"slider","newValue":"34"}}
```
Single Selection:
```
App received: {"data":{"key":"selection","newValue":"{\"values\":[{\"name\":\"Three\"}],\"selected\":[2]}"}}
```
Multi-Selection:
```
App received: {"data":{"key":"multiselection","newValue":"{\"values\":[{\"name\":\"One\",\"value\":\"1\"},{\"name\":\"Four\",\"value\":\"4\"},{\"name\":\"Seven\",\"value\":\"7\"}],\"selected\":[0,3,6]}"}}
```

## Devices
**Settings-Plus** is built for Fitbit Devices: Ionic (348x250).

## License
**Settings-Plus** is licensed under the terms of the [GPL-3.0 License](/LICENSE). 

<p align="center">
  <img width="80" height="80" src=./resources/icon-80x80.png>
</p>
