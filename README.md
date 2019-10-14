# Setable-Demo
**Setable-Demo** is a Fitbit OS App that demos the capabilities of the Companion Settings Library. **Setable-Demo** uses [Fitbit SDK V3.1.0](https://github.com/Fitbit). 

## Features
A compiled settings.jsx file is registered into the Fitbit mobile application during the application installation process. The following offers a basic settings page to show capabilities of the Companion Settings Library:
* Settings Toggle Switch
* Background Colour Select
* Basic Text Formatting
* Enable Text Input Toggle
* Slider Settings
* Slider
* Text Input Save
* Clear Settings Storage
* Add List Item (Auto-Complete)
* Selection
* Multi-Selection
* Additive List
* Image Picker
* Links
* TextImageRow
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
**Setable-Demo** is built for Fitbit Devices: Ionic (348x250).

<p align="center">
  <img width="80" height="80" src=./resources/icon.png>
</p>
