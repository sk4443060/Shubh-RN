<!-- REACT NATIVE GUIDE --># Shubh-RN
# OFFICIAL DOCS AND THEIR PURPOSE:
    01. React Native: https://reactnative.dev
                    https://reactnative.dev/docs/environment-setup
                    https://reactnative.dev/docs/set-up-your-environment
                            <!-- #Chocolatey -->
                            <!-- https://chocolatey.org/install -->
                            - Click on Chocolatey inside Node, JDK
                            - Click on "Install" from Navbar
                            - Now copy "Get-ExecutionPolicy"
                            - Now copy from "Now run the following command"
                                >Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
                                .
                            <!-- #Install Android Studio -->
                            <!-- https://developer.android.com/studio -->
                            - Visit the given link
                            - Click on: Download Android Studio Otter 2 Feature Drop
                            - Check the License Agreement
                            - Now click the "Download button"
                            #NOTE: Configure Android Studio as:
                            ----------------------------------------------
                            - After installation run the Android Studio
                            - Click on: More Actions
                            - Click on SDK Manager
                            - Select Android 11.0("R") under SDK Platform Tab
                            - Now click on next tab "SDK Tools"
                            - Check the following:
                                Android SDK Command-line Tools (Latest)
                                Android SDK Platform-Tools
                            - Click on OK
                            - Again OK
                            - Accept Consent
                            - Click on Next Button
                            - After successfull installation click on "Finish" button
                            #NOTE: Create Virtual Device
                            ----------------------------------------------
                            - Click on: More Actions
                            - Click on: Virtual Device Manager
                            - Click on: +
                            - Select Pixel 8 Pro under phone tab
                            - Next
                            - Select: API 35 (If there is no such thing move the next and select "R")
                            - Click: Next
                            #NOTE: Edit User Variable 
                            ----------------------------------------------
                            - Click on Start menu in your window
                            - Type: env
                            - Click on System Environment Variable
                            - Click on: Environment Variable button
                            - Under System Variable Click on "New" button
                            - Add: ANDROID_HOME inside variable name input field
                            - Enter Variable Value: C\Users\<Your User or system Name>\AppData\Local\Android\Sdk
                            - Click: OK, OK...
       
    02. Creating first project by follow this link:
        Link:

            https://reactnative.dev/docs/environment-setup

        OR Directly use the command:

            npx create-expo-app@latest

        OR Move forward by clicking on the "Continue with Expo"
        After this you will be landed on the "Expo Official Documentation"
        You can also navigate directly by visiting this url:

            https://docs.expo.dev/get-started/set-up-your-environment/

        And click on "Expo logo", It will navigate you to at "https://expo.dev"
        Next click on button: Read the Docs

# CLASSES AND ITS CORE CONTENT
# -----------------------------------------------
# Class 01:
    - Creating project using:

        npx create-expo-app@latest

    - Running Project

        npm start

    > NOTE: Your system and Mobile must connected with the same network and also installed expo in your mobile device.

    - Scan the QR using your expo app
    - You have successfully launched your first mobile app.