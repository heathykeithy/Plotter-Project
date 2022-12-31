# Plotter project 
## Current status: Mid-stage Development

## A base structure for any small scale cnc/plotter/printer using ESP32 and GRBL

### This project is designed as an introduction to use of markerspace tools and machines such as a laser cutter and 3d printer. It also in includes stepper motors and microcontrollers.

This design has been adapted from Superb Tech's 3D printed plotter found [here](https://www.youtube.com/watch?v=WgsTyhX311E)

And bluino_electronics Drawing Robot - Wifi Bluetooth USB CNC Shield Grbl_Esp32 found [here](https://www.instructables.com/Drawing-Robot-Wifi-Bluetooth-USB-CNC-Shield-GrblEs/#step2) 

![railProfile](SVGs/RailProfile.svg)
This project uses markerslidealuminium extrusion (called markerslide) purely because my makerspace has lots of it.
It is 20x40 with an extra flange on top edges. 

![gif](referenceDocs/v3GIF.gif)

---

## Parts
- 20x40 aluminium extrusion - length 1200mm
- Acrylic sheet 6mmx200x100
- Base board 600x600
- 2x stepper motors
- belts - length TBA
- Esp32 micro controller
- 12v power supply
- V-grove nuts and bolts - TBA  


## Software 

GRBL_ESP32 [here](https://github.com/bdring/Grbl_Esp32)

GRBL_ESP32 is an adaption of GRBL, CNC milling software for Arduino, to run ESP32

## Software setup
### IDE setup
* Clone or download the repo for GRBL_ESP32 [here](https://github.com/bdring/Grbl_Esp32)
* ! IMPORTANT ! Install ESP32 libraries 1.0.3 from Tools> Boards> Board Manager - search for ESP32, change version to 1.0.3 - This is for bug prevention at time of writing (end 2022)  
* Install libraries for Ardunio IDE for ESP32 by adding 
`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`  
to File> Preferences> Additional Boards Manager URLs
* Install libraries for Ardunio IDE from GRBL_ESP32, copy `arduinoWebSocketsv` and `ESP32SSDP` from `Grbl_Esp32-main\libraries` to your local IDE folder. Typically some folder like `...\Documents\Arduino\libraries`
*   Install libraries for Ardunio IDE for `TMCStepper` from Sketch> Include Library> Manage Library - Search for `TMCStepper` - install

### Config
* Setup Wifi by adding your credentials in `Grbl_Esp32-main\Grbl_Esp32\src\Config.h` line 96 or at `#define CONNECT_TO_SSID` 
* In `Grbl_Esp32-main\Grbl_Esp32\src\Machine.h` replace `include "Machines/test_drive.h"
` with `include "Machines/drawbot.h"`
