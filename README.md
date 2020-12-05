# Get rid of ghost emulator 

run `adb -e reboot` then `adb kill-server` then `adb start-server`
check with `adb devices` to check

# Hot refresh not updating? 

run `react-native run-android --port 8082`; post 8082 might be busy

# How to add a new authorized device to the server

- In the device's shell, run `ssh-keygen -t rse -b 4096 -C "device_name"`
- cd to the /home/user/.ssh dir 
- copy the public key 
- In the server shell, go to /home/user/.ssh/authorized-keys
- `nano authorized-keys`
- add the copied public key into the last line
- write to and save the file

# Disabled google auth two factor

Disable google auth to access the server with react native

To re-activate google auth:
-  https://www.youtube.com/watch?v=sO-afVsDJOA at 16:03

