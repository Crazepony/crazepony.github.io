---
layout: crazepony-md
title: faq
---

## prepare the transmitter

* for now you need a V202 transmitter, or Deviated Devo or MultiPro NRF24 module, I still have to make a firmware for the stock transmitter ...
* copy Model27.ini to your Devo (rename it if necessary...) then select this profile, it's for Devo10 basically but it should work with a 7e too and default to ANGLE (auto level) mode. On Devo10, GEAR switch for ANGLE (0) to acro rate (1). flight modes must be configured in the GUI, or it will just defaults to 'acro' rate mode
* switch off the transmitter for now

## install the GUI

* open Chrome browser (Yeah, I hate it too, and use it only for CF configurator )
* go to settings -> extensions -> developer mode -> load unpacked extension then locate the cleanflight-configurator folder you've extracted from the archive
* launch Chrome app launcher, you should see a "special" version of the configurator in the app list, open it


## configuration

I included a basic cleanflight config file for convenience:

* in the GUI, click Connect
* go to the CLI tab (last one on bottom)
* open "cleanflight config.txt" in a text editor
* copy the content (ctrl+a, ctrl+c)
* paste it into configurator CLI: (ctrl+v, enter)
* enter "set gyro_lpf=42HZ" without the quotes then press enter (thanks @vasiliy_gr)
* enter "save" then press enter
* press Disconnect / Connect
* go to the Receiver tab
* switch your TX on
* check that RX is working
* go to the Modes tab then configure ANGLE and/or HORIZON at your liking, don't forget to click the Save button when you're done
* go to the Setup tab
* click "Calibrate Accelerometer"
* wait a few seconds and click disconnect, disconnect from USB

... now if I haven't forgotten anything you should be able to switch the quad on, then the transmitter, then arm with throttle low + yaw right.

Note that the transmitter needs to be switched on AFTER the quad as TXID isn't saved to eeprom yet.

Now we need to find good PIDs (too much oscillations right now), but I don't have much hope using those propellers, I'll try with smaller ones (YD717) and a smaller battery (360mAh).
